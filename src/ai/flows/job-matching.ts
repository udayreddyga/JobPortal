'use server';
/**
 * @fileOverview AI-powered job matching flow.
 *
 * - jobMatching - A function that takes a user profile and job descriptions, and returns suggested job opportunities.
 * - JobMatchingInput - The input type for the jobMatching function.
 * - JobMatchingOutput - The return type for the jobMatching function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobMatchingInputSchema = z.object({
  userProfile: z
    .string()
    .describe('The user profile including skills and experience.'),
  jobDescriptions: z
    .array(z.string())
    .describe('An array of job descriptions to match against the user profile.'),
});
export type JobMatchingInput = z.infer<typeof JobMatchingInputSchema>;

const JobMatchingOutputSchema = z.object({
  suggestedJobs: z
    .array(z.string())
    .describe('An array of job descriptions that match the user profile.'),
});
export type JobMatchingOutput = z.infer<typeof JobMatchingOutputSchema>;

export async function jobMatching(input: JobMatchingInput): Promise<JobMatchingOutput> {
  return jobMatchingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'jobMatchingPrompt',
  input: {schema: JobMatchingInputSchema},
  output: {schema: JobMatchingOutputSchema},
  prompt: `You are an AI job matching assistant. Analyze the user profile and job descriptions to suggest relevant job opportunities.

User Profile: {{{userProfile}}}

Job Descriptions:
{{#each jobDescriptions}}- {{{this}}}\n{{/each}}

Based on the user's profile and the job descriptions, suggest the jobs that are most relevant to the user.`,
});

const jobMatchingFlow = ai.defineFlow(
  {
    name: 'jobMatchingFlow',
    inputSchema: JobMatchingInputSchema,
    outputSchema: JobMatchingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
