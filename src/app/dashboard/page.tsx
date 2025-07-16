import { getRedditPosts } from '@/lib/data';
import type { Idea } from '@/types';
import { DashboardView } from '@/components/dashboard/dashboard-view';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

async function getIdeas(): Promise<Idea[]> {
  // The data now comes with pre-generated summaries, so no API call is needed.
  return getRedditPosts();
}

export default async function DashboardPage() {
  const ideas = await getIdeas();
  return <DashboardView ideas={ideas} />;
}

export function Loading() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-1/4" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-32" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-4 w-2/3 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
