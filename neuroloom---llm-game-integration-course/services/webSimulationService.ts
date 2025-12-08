/// <reference types="vite/client" />

import { ChatMessage } from '../types';

// --- CONFIG ---
const DEEPGRAM_API_KEY = import.meta.env.VITE_DEEPGRAM_API_KEY || '';
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';

const PROMPT_DIALOGUE_HEADER = `
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
`.trim();

const MODEL_MAP: Record<string, string> = {
    'PlayerMale1': 'aura-2-odysseus-en',
    'PlayerMale2': 'aura-2-apollo-en',
    'PlayerMale3': 'aura-2-arcas-en',
    'PlayerFemale1': 'aura-2-thalia-en',
    'PlayerFemale2': 'aura-2-andromeda-en',
    'PlayerFemale3': 'aura-2-athena-en',
};

export interface ParsedDialogue {
    character: string;
    text: string;
    audioUrl?: string; // Blob URL
    model: string;
}

export const parseDialogues = (text: string): ParsedDialogue[] => {
    const pattern = /<(Player\w+)>\s*(.*?)\s*<\/\1>/gs;
    const matches = [...text.matchAll(pattern)];

    return matches.map(match => ({
        character: match[1],
        text: match[2].trim(),
        model: MODEL_MAP[match[1]] || 'aura-2-thalia-en'
    }));
};

// --- API CLIENTS ---

export const getGroqCompletion = async (history: ChatMessage[], newUserInput: string): Promise<string> => {
    const messages = [
        { role: 'system', content: PROMPT_DIALOGUE_HEADER },
        ...history.map(m => ({
            role: m.role === 'user' ? 'user' : 'assistant', // Map 'model' -> 'assistant'
            content: m.text
        })),
        { role: 'user', content: newUserInput }
    ];

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                messages: messages,
                model: "llama-3.3-70b-versatile", // Using a reliable Groq model
                temperature: 1,
                max_tokens: 2048,
                top_p: 1,
                stream: false
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Groq API Error: ${response.status} ${errorText}`);
        }

        const data = await response.json();
        return data.choices?.[0]?.message?.content || "";
    } catch (error) {
        console.error("Groq Chat Error:", error);
        throw error;
    }
};

export const fetchDeepgramAudio = async (text: string, model: string): Promise<string | null> => {
    if (!DEEPGRAM_API_KEY) {
        console.error("Deepgram API Key is missing!");
        return null;
    }

    try {
        const url = `https://api.deepgram.com/v1/speak?model=${model}`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Token ${DEEPGRAM_API_KEY}`,
                "Content-Type": "text/plain; charset=utf-8",
            },
            body: text
        });

        if (!response.ok) {
            const errText = await response.text();
            console.error(`Deepgram Error for '${text}':`, errText);
            throw new Error(`Deepgram API ${response.status}: ${errText}`);
        }

        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error("Audio Fetch Error:", error);
        throw error; // Re-throw to be caught by InteractiveDemo logs
    }
};
