### Gaming & AI

Hi there! 👋 Welcome to **NeuroLoom**.

This project is for the **LLM Game Integration into Gaming**. I wanted to tackle a problem that has bothered me in RPGs for years: **Boring, repetitive dialogue.**

You know the struggle—you ask an NPC a question, and they give you the exact same pre-written line three times in a row? NeuroLoom is my attempt to fix that using Generative AI. It's an educational platform (and a working prototype!) designed to teach how to hook up **Large Language Models (LLMs)** to game engines.

https://finalexamgaming.vercel.app/

---

## 🌟 What's Inside?

This repo isn't just a code dump; it's a full learning module. Here is what I built:

### 1. The Interactive Web Platform 🖥️
I built a React application to act as the "textbook" for this concept. Instead of just reading, you can:
*   **Chat with 'Cipher'**: A live demo of a Cyberpunk NPC who remembers what you said.
*   **Explore the Blueprints**: I included an IDE-like view to explore the Python architecture.
*   **Learn the Theory**: Check out the "Pedagogy Report" tab where I break down the math behind tokens, vectors, and why AI hallucinations happen.

### 2. The "Brain" (Python Prototype) 
The file `codebase.py` is the real deal. It's a standalone script that demonstrates:
*   **Groq API**: For generating intelligence (I chose Groq because it is *blazing* fast).
*   **Deepgram**: For giving the characters a distinct voice.
*   **Multithreading**: Because nobody likes waiting 3 seconds for an NPC to reply.

---

## 🛠️ The Tech Stack
*(Or: "What I used to build this thing")*

*   **Frontend**: React 19 + TypeScript (Styled with TailwindCSS for those soft pastel vibes 🌸).
*   **The Brains**: Groq API (running open-source models).
*   **The Voice**: Deepgram Aura (Text-to-Speech).
*   **The Glue**: Python `concurrent.futures` for threading magic.

---

## 🚀 How to Run It

I've tried to make this as painless as possible.

### Option A: The Web App (The full experience)
1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Fire it up:**
    ```bash
    npm run dev
    ```
3.  **Open your browser:** Go to `http://localhost:5173`. You should see the landing page!

### Option B: The Python Prototype (Just the logic)
If you just want to see the backend code run in your terminal:
1.  **Install Python libs:**
    ```bash
    pip install requests pygame
    ```
    *(Note: You'll need your own API keys for Groq and Deepgram in your environment variables for this to actually talk back!)*
2.  **Run it:**
    ```bash
    python codebase.py
    ```

---

## Why I Built This

My main goal was to prove that **"Prompts are Code."**

In traditional coding, we write specific instructions. In AI engineering, we write *personas* and *constraints*. The "Pedagogical Report" inside the app goes deep into this, but essentially, I wanted to show that:
1.  **Context is King**: If the AI forgets who you are, the immersion breaks.
2.  **Latency Matters**: If the AI takes too long to think, the player gets bored.
3.  **Safety First**: We can't have NPCs saying weird stuff, so "System Prompts" act as the guardrails.

---

Hope you enjoy exploring it as much as I enjoyed building it!

**— Hasini Muvva**
