import { GoogleGenerativeAI } from "@google/generative-ai";

type GenerateImageResult = string | null;

export async function generateNanoBananaImage(
  prompt: string
): Promise<GenerateImageResult> {
  const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GENAI_API_KEY as string
  );

  const model = genAI.getGenerativeModel({
    model: "gemini-3.1-flash-image-preview",
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;

  const base64 =
    response?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

  if (!base64) {
    throw new Error("Failed to generate image: missing base64 data");
  }

  return base64;
}