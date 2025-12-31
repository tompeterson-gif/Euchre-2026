
import { GoogleGenAI } from "@google/genai";
import { SUCRE_MODELS } from "../constants";

export const getEuchreStrategy = async (ranking: number, nickname: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `You are a world-class Euchre coach. A player with the nickname "${nickname}" and a world ranking of ${ranking}/600 is attending the World Series of Euchre in Stuttgart, Germany. Give them a short, witty, and encouraging piece of advice for the tournament (max 3 sentences). Mention Stuttgart and their ranking.`;
  
  try {
    const response = await ai.models.generateContent({
      model: SUCRE_MODELS.TEXT,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching strategy:", error);
    return "Keep your loners close and your bowers closer. See you in Stuttgart!";
  }
};
