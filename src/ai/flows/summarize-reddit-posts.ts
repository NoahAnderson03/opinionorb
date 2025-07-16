// Summarizes Reddit posts and comments to extract main ideas, complaints, and feature requests.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeRedditPostsInputSchema = z.object({
  postTitle: z.string().describe('The title of the Reddit post.'),
  postContent: z.string().describe('The content of the Reddit post.'),
  comments: z.array(z.string()).describe('An array of comments from the Reddit post.'),
});
export type SummarizeRedditPostsInput = z.infer<typeof SummarizeRedditPostsInputSchema>;

const SummarizeRedditPostsOutputSchema = z.object({
  summary: z.string().describe('A summary of the main ideas from the Reddit post and comments.'),
  complaints: z.string().describe('Common complaints identified in the post and comments.'),
  featureRequests: z.string().describe('Feature requests or desired improvements mentioned in the post and comments.'),
});
export type SummarizeRedditPostsOutput = z.infer<typeof SummarizeRedditPostsOutputSchema>;

export async function summarizeRedditPosts(input: SummarizeRedditPostsInput): Promise<SummarizeRedditPostsOutput> {
  return summarizeRedditPostsFlow(input);
}

const summarizeRedditPostsPrompt = ai.definePrompt({
  name: 'summarizeRedditPostsPrompt',
  input: {schema: SummarizeRedditPostsInputSchema},
  output: {schema: SummarizeRedditPostsOutputSchema},
  prompt: `Summarize the following Reddit post and its comments to identify the main ideas, common complaints, and feature requests.\n\nPost Title: {{{postTitle}}}\nPost Content: {{{postContent}}}\nComments:\n{{#each comments}}- {{{this}}}\n{{/each}}\n\nMain Ideas: \nCommon Complaints: \nFeature Requests: `,
});

const summarizeRedditPostsFlow = ai.defineFlow(
  {
    name: 'summarizeRedditPostsFlow',
    inputSchema: SummarizeRedditPostsInputSchema,
    outputSchema: SummarizeRedditPostsOutputSchema,
  },
  async input => {
    const {output} = await summarizeRedditPostsPrompt(input);
    return output!;
  }
);
