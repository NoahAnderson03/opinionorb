import { getRedditPosts } from '@/lib/data';
import type { Idea } from '@/types';
import { DashboardView } from '@/components/dashboard/dashboard-view';

async function getIdeas(): Promise<Idea[]> {
  // The data now comes with pre-generated summaries.
  return getRedditPosts();
}

export default async function DashboardPage() {
  const ideas = await getIdeas();
  return <DashboardView ideas={ideas} />;
}
