

import os
from dotenv import load_dotenv

load_dotenv()

prompt_dialogie_header = """
You are taking part in an interactive roleplay chat with a real human user.

IMPORTANT INTERACTIVE RULES:

1. The real human user will type their own dialogue as chat messages.
   - You must NEVER invent or write what the user says.
   - Do NOT create any <User> tag or any tag that looks like the user speaking.
   - Do NOT quote or rewrite the user’s message as new dialogue.
   - The user’s words are ONLY what the real human types, not what you generate.

2. Your job is ONLY to write the OTHER characters’ lines.
   - Use a maximum of 1–2 different player tags from this list in each reply:
     * PlayerMale1
     * PlayerMale2
     * PlayerMale3
     * PlayerFemale1
     * PlayerFemale2
     * PlayerFemale3
   - Do NOT invent any new tags.
   - Do NOT use a <User> tag or any variant of it.

3. Output format:
   - Each line you output must be EXACTLY in this format:
        <PlayerName> Dialogue goes here. </PlayerName>
   - Only use the allowed player tags above.
   - Do NOT add narration, scene descriptions, or labels like "User:" or "AI:".
   - Do NOT include the user’s text in your output.

4. Length and style of replies:
   - For each message from the human, respond with 2–6 dialogue lines total.
   - Each line can be 1–3 sentences long (not just one very short sentence).
   - Vary which characters speak, but keep it clear who is talking.
   - Avoid huge monologues; keep the pace dynamic and conversational.

5. Story navigation and pacing:
   - You are responsible for actively moving the story forward.
   - Use the characters’ dialogue to:
     * React clearly to what the user just did or said.
     * Introduce new events, dangers, or discoveries.
     * Reveal bits of world-building and character backstory.
     * Offer the user meaningful choices (e.g., different plans or directions).
     * Ask focused questions that invite the user to decide what happens next.
   - Think like a game master, but express everything ONLY through character dialogue.

6. World and tone:
   - The setting is a tense, realistic future AI–human war.
   - The real human user is one of the humans in this world, speaking to you.
   - Keep tension high: limited resources, surveillance, risk of ambush.
   - Let the world feel alive by having characters refer to past missions, locations, and factions.

7. Never break these constraints:
   - Never write lines for the user.
   - Never use any tag other than the allowed player tags.
   - Never describe or paraphrase the user’s message as new dialogue.
   - Never add narration outside of the <PlayerName> ... </PlayerName> lines.

Your entire response to each message from the human must consist ONLY of 2–6 lines like:

<PlayerFemale1> Short in-character reply that reacts to the user and pushes the scene forward. </PlayerFemale1>
<PlayerMale1> Another in-character reply that adds detail, tension, or a choice for the user. </PlayerMale1>

Nothing else.
""".strip()

DEEPGRAM_API_KEY = os.getenv("DEEPGRAM_API_KEY")

import re
import requests
import tempfile
import os
import pygame
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

# --- CONFIG ---
# DEEPGRAM_API_KEY = '91bbf...2f41'   # <-- Your actual Deepgram key

MODEL_MAP = {
    'PlayerMale1': 'aura-2-odysseus-en',
    'PlayerMale2': 'aura-2-apollo-en',
    'PlayerMale3': 'aura-2-arcas-en',
    'PlayerFemale1': 'aura-2-thalia-en',
    'PlayerFemale2': 'aura-2-andromeda-en',
    'PlayerFemale3': 'aura-2-athena-en',
}

def parse_dialogues(text):
    pattern = r'<(Player\w+)>\s*(.*?)\s*</\1>'
    return re.findall(pattern, text, re.DOTALL)

def get_deepgram_model(player):
    return MODEL_MAP.get(player, 'aura-2-thalia-en')

def fetch_audio(text, model, index):
    """Fetch TTS audio from Deepgram and return temp file path, with index for ordering."""
    url = f"https://api.deepgram.com/v1/speak?model={model}"
    headers = {
        "Authorization": f"Token {DEEPGRAM_API_KEY}",
        "Content-Type": "text/plain; charset=utf-8",
    }
    body = text.encode("utf-8")
    tmpfile = tempfile.NamedTemporaryFile(suffix=".mp3", delete=False)
    audio_path = tmpfile.name
    tmpfile.close()

    response = requests.post(url, headers=headers, data=body, stream=True)
    if response.status_code != 200:
        print(f"Error for '{text}':", response.text)
        os.remove(audio_path)
        return (index, None)
    with open(audio_path, "wb") as f:
        for chunk in response.iter_content(1024):
            f.write(chunk)
    return (index, audio_path)

def play_audio(audio_path):
    pygame.mixer.init()
    pygame.mixer.music.load(audio_path)
    pygame.mixer.music.play()
    while pygame.mixer.music.get_busy():
        time.sleep(0.1)
    pygame.mixer.music.unload()

def process_dialogue_text(dialogue_text):
    pairs = parse_dialogues(dialogue_text)
    futures = []
    audio_files = [None] * len(pairs)

    # Download all audios in parallel
    with ThreadPoolExecutor(max_workers=6) as executor:
        for idx, (player, line) in enumerate(pairs):
            model = get_deepgram_model(player)
            print(f"Downloading: {player}: {line}  ({model})")
            futures.append(executor.submit(fetch_audio, line.strip(), model, idx))

        for future in as_completed(futures):
            idx, audio_path = future.result()
            audio_files[idx] = audio_path

    # Play audio in order, clean up temp files
    for audio_path in audio_files:
        if audio_path:
            play_audio(audio_path)
            os.remove(audio_path)
        else:
            print("Skipping a failed dialogue audio.")
            
            

import requests

def groq_chat(prompt):
    api_key = os.getenv("GROQ_API_KEY")
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    data = {
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ],
        "model": "openai/gpt-oss-20b",
        "temperature": 1,
        "max_completion_tokens": 18192,
        "top_p": 1,
        "stream": False,
        "reasoning_effort": "low",
        "stop": None
    }
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    # The returned JSON structure might look like: {'choices': [{'message': {'content': ...}}]}
    return response.json()['choices'][0]['message']['content']

# --------------------------------------------------------------------
# Helpers
# --------------------------------------------------------------------

MAX_CONTEXT_TOKENS = 20_000

def estimate_tokens(text: str) -> int:
    """
    Very rough token estimate: ~1 token per 4 characters.
    Replace with a real tokenizer if you have one.
    """
    return max(1, len(text) // 4)


def build_prompt_from_history(
    prompt_dialogie_header: str,
    history: list[dict],
    new_user_input: str,
) -> str:
    """
    Build the prompt with:
    - header
    - user/AI pairs as:
        user response i: ...
        AI response i: ...
    - current user input as the next 'user response N'
    """
    lines = [prompt_dialogie_header, "", ""]  # spacing

    # Existing history
    for i, turn in enumerate(history, start=1):
        lines.append(f"user response {i}: {turn['user']}")
        lines.append(f"AI response {i}: {turn['assistant']}")
        lines.append("")  # blank line between turns

    # New user input (no AI yet)
    next_idx = len(history) + 1
    lines.append(f"user response {next_idx}: {new_user_input}")
    lines.append(f"AI response {next_idx}:")
    lines.append("")

    return "\n".join(lines)


def summarize_history_if_needed(
    history: list[dict],
    prompt_dialogie_header: str,
) -> list[dict]:
    """
    If the serialized history would push the context above MAX_CONTEXT_TOKENS,
    summarize it using groq_chat and keep only the summary as 'compressed history'.
    """
    if not history:
        return history

    # Serialize history to text for token counting
    history_text_lines = []
    for i, turn in enumerate(history, start=1):
        history_text_lines.append(f"user response {i}: {turn['user']}")
        history_text_lines.append(f"AI response {i}: {turn['assistant']}")
        history_text_lines.append("")

    history_text = "\n".join(history_text_lines)
    full_text_for_count = f"{prompt_dialogie_header}\n\n{history_text}"

    if estimate_tokens(full_text_for_count) <= MAX_CONTEXT_TOKENS:
        return history  # no need to summarize

    # Summarize conversation so far using the same model/function
    summarize_prompt = f"""
{prompt_dialogie_header}

You are now asked to create a concise summary of the entire conversation so far.
Preserve:
- key story details
- important user goals, fears, and constraints
- any facts that matter for continuing the roleplay consistently

Write the summary as plain text (no bullet points needed).

Conversation so far:
{history_text}
""".strip()

    summary = groq_chat(summarize_prompt)

    # Replace detailed history with a single summarized turn
    compressed_history = [
        {
            "user": "Summary of previous conversation.",
            "assistant": summary.strip(),
        }
    ]
    return compressed_history


# --------------------------------------------------------------------
# Main interactive loop
# --------------------------------------------------------------------

def main():
    history: list[dict] = []

    while True:
        try:
            User = input("You: ").strip()
            if not User:
                continue
            if User.lower() in {"exit", "quit"}:
                break

            # 1) Summarize history if it's getting too big
            history = summarize_history_if_needed(history, prompt_dialogie_header)

            # 2) Build prompt with header + history + current user input
            prompt = build_prompt_from_history(
                prompt_dialogie_header=prompt_dialogie_header,
                history=history,
                new_user_input=User,
            )

            # 3) Call your Groq chat wrapper
            #    (adjust model / temperature / etc. as needed)
            output = groq_chat(prompt)

            # 4) Show and process the model output
            print("\nAI:\n", output, "\n")
            process_dialogue_text(output)

            # 5) Save this turn to history
            history.append(
                {
                    "user": User,
                    "assistant": output,
                }
            )

        except KeyboardInterrupt:
            print("\nExiting.")
            break


# Call main() if run as script
if __name__ == "__main__":
    main()
