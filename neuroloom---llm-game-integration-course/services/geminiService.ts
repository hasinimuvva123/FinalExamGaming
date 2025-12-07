import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

try {
  if (API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI:", error);
}

/**
 * Simulates a conversation with an NPC in a game context.
 * We use a specific system instruction to enforce the character.
 */
export const generateNPCResponse = async (
  history: { role: string; text: string }[], 
  userMessage: string
): Promise<string> => {
  if (!ai) {
    return "Error: API Key is missing or invalid. Please check your configuration.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the prompt with history context
    // In a real production app, we would use the Chat API (ai.chats.create), 
    // but for this stateless demo function, we'll construct the flow via generateContent 
    // to ensure atomic control over the "Game Engine" system prompt.
    
    const systemPrompt = `
      You are an NPC named 'Cipher' in a futuristic cyberpunk game similar to The Matrix.
      
      Character Profile:
      - Role: Information Broker / Rogue AI construct.
      - Tone: Cryptic, philosophical, slightly arrogant, but helpful if the price is right (or the intellectual challenge is worthy).
      - Constraints: You exist within the simulation. You know you are code, but you treat "reality" as just another layer of data.
      - Objective: Teach the player about "Dynamic Dialogue Systems" without breaking character too much. Use analogies related to coding, nodes, and neural networks.
      
      Current Context: The player is approaching you in a neon-lit alleyway.
      
      Respond to the user's input in character. Keep responses concise (under 100 words) as this is a game dialogue box.
    `;

    // Format history for context (simplistic approach for this demo)
    const conversationHistory = history.map(h => `${h.role === 'user' ? 'Player' : 'Cipher'}: ${h.text}`).join('\n');
    
    const fullPrompt = `${systemPrompt}\n\n[Conversation Log]\n${conversationHistory}\nPlayer: ${userMessage}\nCipher:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: fullPrompt,
      config: {
        temperature: 0.8,
        maxOutputTokens: 150, // Limit specifically for game dialogue UI
      }
    });

    return response.text || "...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System Error: Connection to the Matrix interrupted. (API Call Failed)";
  }
};
