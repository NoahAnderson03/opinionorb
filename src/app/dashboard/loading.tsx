import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Skeleton className="h-8 w-1/4" />
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <Skeleton className="h-10 w-full md:w-64" />
          <Skeleton className="h-10 w-full md:w-44" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-5 w-32" />
                </div>
                <Skeleton className="h-8 w-8 shrink-0" />
              </div>
              <Skeleton className="h-4 w-24 pt-1" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between bg-secondary/50 p-4">
              <Skeleton className="h-5 w-1/4" />
              <Skeleton className="h-5 w-1/3" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
