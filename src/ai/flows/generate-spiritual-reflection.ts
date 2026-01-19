'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized, single-line spiritual reflection.
 *
 * The reflection is based on the selected emotion and Qur'anic verse to provide users with deeper insights.
 * @fileOverview GenerateSpiritualReflection - A function that generates a spiritual reflection.
 * @fileOverview GenerateSpiritualReflectionInput - The input type for the generateSpiritualReflection function.
 * @fileOverview GenerateSpiritualReflectionOutput - The return type for the generateSpiritualReflection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSpiritualReflectionInputSchema = z.object({
  emotion: z.string().describe('The emotion selected by the user.'),
  verse: z.string().describe('The Qur\'anic verse selected for the emotion.'),
  translation: z.string().describe('The English translation of the Qur\'anic verse.'),
});

export type GenerateSpiritualReflectionInput = z.infer<
  typeof GenerateSpiritualReflectionInputSchema
>;

const GenerateSpiritualReflectionOutputSchema = z.object({
  reflection: z.string().describe('A single-line spiritual reflection.'),
});

export type GenerateSpiritualReflectionOutput = z.infer<
  typeof GenerateSpiritualReflectionOutputSchema
>;

export async function generateSpiritualReflection(
  input: GenerateSpiritualReflectionInput
): Promise<GenerateSpiritualReflectionOutput> {
  return generateSpiritualReflectionFlow(input);
}

const spiritualReflectionPrompt = ai.definePrompt({
  name: 'spiritualReflectionPrompt',
  input: {schema: GenerateSpiritualReflectionInputSchema},
  output: {schema: GenerateSpiritualReflectionOutputSchema},
  prompt: `You are a spiritual guide helping users reflect on their emotions through the lens of Islamic teachings.\n  Generate a single-line spiritual reflection based on the user's emotion and the provided Qur'anic verse and its translation.  The reflection should be concise, encouraging, and relevant to the verse's core message and the emotion.\n\n  Emotion: {{{emotion}}}\n  Verse: {{{verse}}}\n  Translation: {{{translation}}}\n\n  Reflection:`,
});

const generateSpiritualReflectionFlow = ai.defineFlow(
  {
    name: 'generateSpiritualReflectionFlow',
    inputSchema: GenerateSpiritualReflectionInputSchema,
    outputSchema: GenerateSpiritualReflectionOutputSchema,
  },
  async input => {
    const {output} = await spiritualReflectionPrompt(input);
    return output!;
  }
);
