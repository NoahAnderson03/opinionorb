'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Idea } from '@/types';
import { Bookmark, MessageCircle, ThumbsUp, Flame, Zap } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useToast } from '@/hooks/use-toast';


interface IdeaCardProps {
  idea: Idea;
  isSaved: boolean;
  onSaveToggle: (id: string) => void;
}

export function IdeaCard({ idea, isSaved, onSaveToggle }: IdeaCardProps) {
  const { toast } = useToast();

  const handleSaveClick = () => {
    onSaveToggle(idea.id);
    if (!isSaved) {
      toast({
        title: "Idea Saved!",
        description: `"${idea.title}" has been added to your saved ideas.`,
      });
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-lg leading-tight">{idea.title}</CardTitle>
            <Button
              variant={isSaved ? 'default' : 'outline'}
              size="icon"
              className="h-8 w-8 shrink-0"
              onClick={handleSaveClick}
              aria-label={isSaved ? 'Unsave idea' : 'Save idea'}
            >
              <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
            </Button>
        </div>
        <CardDescription className="flex items-center gap-4 pt-1 text-xs">
          <span>
            From{' '}
            <a
              href={`https://www.reddit.com/r/${idea.subreddit}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              r/{idea.subreddit}
            </a>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{idea.summary}</p>
        <Accordion type="single" collapsible className="mt-4 w-full">
          <AccordionItem value="details">
            <AccordionTrigger className="text-sm font-medium">View Details</AccordionTrigger>
            <AccordionContent className="space-y-4 pt-2 text-sm">
              <div>
                <h4 className="flex items-center gap-2 font-semibold">
                  <Flame className="h-4 w-4 text-destructive" /> Common Complaints
                </h4>
                <p className="mt-1 text-muted-foreground">{idea.complaints}</p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 font-semibold">
                  <Zap className="h-4 w-4 text-green-500" /> Feature Requests
                </h4>
                <p className="mt-1 text-muted-foreground">{idea.featureRequests}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex items-center justify-between bg-secondary/50 p-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ThumbsUp className="h-3.5 w-3.5" />
              {idea.upvotes}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5" />
              {idea.comments.length}
            </span>
        </div>
        <div className="flex items-center gap-2">
            <Badge variant="outline">{idea.category}</Badge>
            <span>{formatDistanceToNow(new Date(idea.createdAt), { addSuffix: true })}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
