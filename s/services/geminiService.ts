
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendedPhone } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPhoneRecommendations = async (prompt: string): Promise<RecommendedPhone[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Based on the following user request, recommend 3 mobile phones. User request: "${prompt}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              brand: {
                type: Type.STRING,
                description: 'The brand of the phone (e.g., Google, Samsung, Apple).',
              },
              model: {
                type: Type.STRING,
                description: 'The specific model name of the phone (e.g., Pixel 9 Pro, iPhone 16 Pro).',
              },
              key_features: {
                type: Type.ARRAY,
                description: 'A list of 2-3 standout features for this phone.',
                items: {
                  type: Type.STRING,
                },
              },
              reasoning: {
                type: Type.STRING,
                description: 'A brief explanation of why this phone is a good fit for the user\'s request.',
              }
            },
            required: ['brand', 'model', 'key_features', 'reasoning'],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const recommendations: RecommendedPhone[] = JSON.parse(jsonText);
    return recommendations;

  } catch (error) {
    console.error("Error fetching phone recommendations:", error);
    throw new Error("Failed to get recommendations from AI. Please check your API key and try again.");
  }
};
