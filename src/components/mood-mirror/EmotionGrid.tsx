'use client';

import type { Emotion } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

type EmotionGridProps = {
  emotions: Emotion[];
  onSelectEmotion: (emotion: Emotion) => void;
  selectedEmotionId?: string;
};

const emotionGroups: Record<string, string[]> = {
    '🌱 Positive': ['Peaceful', 'Grateful', 'Hopeful', 'Loved'],
    '🌧️ Difficult': ['Sad', 'Anxious', 'Fearful', 'Lonely'],
    '🔥 Intense': ['Angry'],
    '🌙 Spiritual': ['Guilty', 'Patient']
};

export function EmotionGrid({ emotions, onSelectEmotion, selectedEmotionId }: EmotionGridProps) {
    
  return (
    <Card className="bg-card/30 backdrop-blur-lg border-white/20 shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary-foreground/90">How are you feeling?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(emotionGroups).map(([groupName, emotionTitles]) => {
          const groupEmotions = emotions.filter(e => emotionTitles.includes(e.title));
          if (groupEmotions.length === 0) return null;

          return (
            <div key={groupName}>
              <h3 className="font-body text-sm font-semibold text-primary-foreground/60 mb-2">{groupName}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                {groupEmotions.map((emotion) => (
                  <Button
                    key={emotion.id}
                    onClick={() => onSelectEmotion(emotion)}
                    className={cn(
                        "font-body w-full h-auto py-2 px-1 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-start text-left gap-2",
                        "transition-all duration-200",
                        selectedEmotionId === emotion.id 
                            ? "bg-primary text-primary-foreground shadow-md scale-105"
                            : "bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground/80 hover:text-primary-foreground"
                    )}
                  >
                    <span className="text-lg sm:text-base">{emotion.emoji}</span>
                    <span className="truncate">{emotion.title}</span>
                  </Button>
                ))}
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  );
}
