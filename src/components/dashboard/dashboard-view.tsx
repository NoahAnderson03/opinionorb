'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Idea } from '@/types';
import { IdeaCard } from './idea-card';
import { OnboardingDialog } from './onboarding-dialog';
import useLocalStorage from '@/hooks/use-local-storage';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { CATEGORIES } from '@/lib/data';

type SortOption = 'newest' | 'popular';

export function DashboardView({ ideas }: { ideas: Idea[] }) {
  const [isClient, setIsClient] = useState(false);
  const [savedIdeas, setSavedIdeas] = useLocalStorage<Set<string>>(
    'savedIdeas',
    new Set()
  );
  const [onboardingComplete, setOnboardingComplete] = useLocalStorage(
    'onboardingComplete',
    false
  );
  const [selectedCategories, setSelectedCategories] = useLocalStorage<string[]>(
    'selectedCategories',
    []
  );

  const [sort, setSort] = useState<SortOption>('popular');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSaveToggle = (ideaId: string) => {
    setSavedIdeas((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(ideaId)) {
        newSet.delete(ideaId);
      } else {
        newSet.add(ideaId);
      }
      return newSet;
    });
  };

  const handleOnboardingFinish = (categories: string[]) => {
    setSelectedCategories(categories);
    setOnboardingComplete(true);
  };
  
  const filteredAndSortedIdeas = useMemo(() => {
    let filtered = ideas;

    if (selectedCategories.length > 0) {
      filtered = ideas.filter((idea) => selectedCategories.includes(idea.category));
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (idea) =>
          idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          idea.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return [...filtered].sort((a, b) => {
      if (sort === 'newest') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      // 'popular'
      return b.upvotes - a.upvotes;
    });
  }, [ideas, selectedCategories, searchTerm, sort]);

  if (!isClient) {
    return null; // or a loading component
  }

  return (
    <>
      {!onboardingComplete && (
        <OnboardingDialog
          onFinish={handleOnboardingFinish}
        />
      )}
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Discovered Ideas</h1>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search ideas..."
                  className="w-full pl-10 md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
               <Select onValueChange={(value) => setSort(value as SortOption)} value={sort}>
                 <SelectTrigger className="w-full md:w-[180px]">
                   <SelectValue placeholder="Sort by" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="popular">Most Popular</SelectItem>
                   <SelectItem value="newest">Newest</SelectItem>
                 </SelectContent>
               </Select>
            </div>
        </div>
        
        {filteredAndSortedIdeas.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedIdeas.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                isSaved={savedIdeas.has(idea.id)}
                onSaveToggle={handleSaveToggle}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/50 p-12 text-center">
            <h3 className="text-xl font-semibold">No Ideas Found</h3>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your filters or search term.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
