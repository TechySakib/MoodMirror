"use server";

import {
  generateSpiritualReflection,
  type GenerateSpiritualReflectionInput,
} from "@/ai/flows/generate-spiritual-reflection";

export async function getReflectionAction(
  input: GenerateSpiritualReflectionInput
) {
  try {
    const result = await generateSpiritualReflection(input);
    return { reflection: result.reflection, error: null };
  } catch (error) {
    console.error("Error generating reflection:", error);
    return {
      reflection: null,
      error: "Could not generate a reflection at this time. Please try again later.",
    };
  }
}
