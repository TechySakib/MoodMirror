'use client';

import { useState, useMemo, useEffect } from 'react';
import { emotions } from '@/lib/emotions';
import type { Emotion, Verse } from '@/lib/types';
import { HeroCard } from '@/components/mood-mirror/HeroCard';
import { EmotionGrid } from '@/components/mood-mirror/EmotionGrid';
import { cn } from '@/lib/utils';

export default function Home() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [currentVerse, setCurrentVerse] = useState<Verse | null>(null);
  const [lastVerseId, setLastVerseId] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);


  const handleSelectEmotion = (emotion: Emotion) => {
    setSelectedEmotion(emotion);
    
    // Randomly select a verse, avoiding the last one if possible
    const availableVerses = emotion.verses.filter(v => v.id !== lastVerseId);
    const versesToChooseFrom = availableVerses.length > 0 ? availableVerses : emotion.verses;
    const newVerse = versesToChooseFrom[Math.floor(Math.random() * versesToChooseFrom.length)];
    
    setCurrentVerse(newVerse);
    setLastVerseId(newVerse.id);
  };

  const backgroundClass = useMemo(() => {
    if (!isMounted) return 'from-background to-secondary';
    return selectedEmotion ? selectedEmotion.theme.background : 'from-background to-secondary';
  }, [selectedEmotion, isMounted]);

  return (
    <main 
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-8 transition-all duration-1000 bg-gradient-to-br",
        backgroundClass
      )}
    >
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="w-full max-w-6xl mx-auto z-10">
        <header className={cn('text-center mb-8 transition-opacity duration-700', showContent ? 'opacity-100' : 'opacity-0')}>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary-foreground/90 tracking-tight">
            MoodMirror
          </h1>
          <p className="font-body text-primary-foreground/70 mt-2 text-lg">
            Reflect on your mood with verses from the Qur'an.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className={cn('lg:col-span-1 transition-all duration-700 delay-200', showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            <EmotionGrid emotions={emotions} onSelectEmotion={handleSelectEmotion} selectedEmotionId={selectedEmotion?.id} />
          </div>
          <div className={cn('lg:col-span-2 transition-all duration-700 delay-300', showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            <HeroCard emotion={selectedEmotion} verse={currentVerse} />
          </div>
        </div>
      </div>
    </main>
  );
}
