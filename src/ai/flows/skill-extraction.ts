'use server';
/**
 * @fileOverview AI tool for extracting key skills from user profiles and job listings.
 *
 * - extractSkills - A function that handles the skill extraction process.
 * - SkillExtractionInput - The input type for the extractSkills function.
 * - SkillExtractionOutput - The return type for the extractSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillExtractionInputSchema = z.object({
  text: z.string().describe('The text from which to extract skills.'),
});
export type SkillExtractionInput = z.infer<typeof SkillExtractionInputSchema>;

const SkillExtractionOutputSchema = z.object({
  skills: z.array(z.string()).describe('The extracted skills from the text.'),
});
export type SkillExtractionOutput = z.infer<typeof SkillExtractionOutputSchema>;

export async function extractSkills(input: SkillExtractionInput): Promise<SkillExtractionOutput> {
  return skillExtractionFlow(input);
}

const skillExtractionPrompt = ai.definePrompt({
  name: 'skillExtractionPrompt',
  input: {schema: SkillExtractionInputSchema},
  output: {schema: SkillExtractionOutputSchema},
  prompt: `You are a skill extraction expert. Please extract the skills from the following text:\n\n{{text}}\n\nSkills:`, 
});

const skillExtractionFlow = ai.defineFlow(
  {
    name: 'skillExtractionFlow',
    inputSchema: SkillExtractionInputSchema,
    outputSchema: SkillExtractionOutputSchema,
  },
  async input => {
    const {output} = await skillExtractionPrompt(input);
    return output!;
  }
);
