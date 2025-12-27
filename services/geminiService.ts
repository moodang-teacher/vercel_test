
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateCreativeStrategy = async (prompt: string) => {
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: `You are a world-class Design Strategist at a top-tier creative agency like Collins. 
      Your tone is sophisticated, intellectual, yet playful and visionary. 
      Help the user brainstorm design concepts that combine minimalism with character-driven 3D animation.
      Focus on brand narrative and transformation.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          strategy: { type: Type.STRING },
          concepts: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["title", "strategy", "concepts"]
      }
    }
  });

  const response = await model;
  return JSON.parse(response.text);
};
