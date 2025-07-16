'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CATEGORIES } from '@/lib/data';

interface OnboardingDialogProps {
  onFinish: (categories: string[]) => void;
}

export function OnboardingDialog({ onFinish }: OnboardingDialogProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleCategory = (category: string) => {
    setSelected((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const handleFinish = () => {
    onFinish(Array.from(selected));
  };

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[480px]" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Welcome to Demand Decoder!</DialogTitle>
          <DialogDescription>
            To get started, please select a few topics you're interested in. This will help us tailor the ideas you see.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category}
              name={category}
              isSelected={selected.has(category)}
              onClick={() => toggleCategory(category)}
            />
          ))}
        </div>
        <DialogFooter>
          <Button
            type="button"
            className="w-full"
            onClick={handleFinish}
            disabled={selected.size === 0}
          >
            Get Started
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function CategoryCard({
  name,
  isSelected,
  onClick,
}: {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative flex aspect-square cursor-pointer items-center justify-center rounded-lg border-2 p-4 text-center text-sm font-semibold transition-all',
        isSelected
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-border bg-transparent hover:bg-accent'
      )}
    >
      {isSelected && (
        <div className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-3 w-3" />
        </div>
      )}
      {name}
    </button>
  );
}
