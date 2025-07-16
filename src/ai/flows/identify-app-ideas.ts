'use server';

/**
 * @fileOverview This file defines a Genkit flow to identify app ideas from Reddit comments.
 *
 * The flow extracts "I wish there was an app that..." patterns from Reddit comments
 * within user-selected categories to discover potential app ideas.
 *
 * @exports identifyAppIdeas - The main function to trigger the app idea identification flow.
 * @exports IdentifyAppIdeasInput - The input type for the identifyAppIdeas function.
 * @exports IdentifyAppIdeasOutput - The output type for the identifyAppIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';


const IdentifyAppIdeasInputSchema = z.object({
  redditPosts: z.array(
    z.object({
      title: z.string().describe('The title of the Reddit post.'),
      comments: z.array(z.string()).describe('The comments of the Reddit post.'),
    })
  ).describe('An array of Reddit posts with titles and comments.'),
});

export type IdentifyAppIdeasInput = z.infer<typeof IdentifyAppIdeasInputSchema>;

const IdentifyAppIdeasOutputSchema = z.object({
  appIdeas: z.array(
    z.string().describe('Extracted app ideas from Reddit comments.')
  ).describe('An array of app ideas.'),
});

export type IdentifyAppIdeasOutput = z.infer<typeof IdentifyAppIdeasOutputSchema>;

export async function identifyAppIdeas(input: IdentifyAppIdeasInput): Promise<IdentifyAppIdeasOutput> {
  return identifyAppIdeasFlow(input);
}

const identifyAppIdeasPrompt = ai.definePrompt({
  name: 'identifyAppIdeasPrompt',
  input: {schema: IdentifyAppIdeasInputSchema},
  output: {schema: IdentifyAppIdeasOutputSchema},
  prompt: `You are an expert in identifying potential app ideas from user comments on Reddit.

  Given a list of Reddit posts and their comments, extract the "I wish there was an app that..." patterns from the comments.
  These patterns indicate unmet needs and potential app ideas.

  Consider each comment and determine if it expresses a desire for a new application.
  Focus on comments that explicitly state a need or problem that could be solved by an app.

  Return a list of app ideas based on these patterns.

  Here's the Reddit data:

  {{#each redditPosts}}
    Post Title: {{this.title}}
    Comments:
    {{#each this.comments}}
      - {{this}}
    {{/each}}
  {{/each}}
  `,
});

const identifyAppIdeasFlow = ai.defineFlow(
  {
    name: 'identifyAppIdeasFlow',
    inputSchema: IdentifyAppIdeasInputSchema,
    outputSchema: IdentifyAppIdeasOutputSchema,
  },
  async input => {
    const {output} = await identifyAppIdeasPrompt(input);
    return output!;
  }
);
