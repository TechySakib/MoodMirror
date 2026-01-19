'use client';

import { useState, useTransition, useEffect, Key } from 'react';
import type { Emotion, Verse } from '@/lib/types';
import { getReflectionAction } from '@/app/actions';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Copy, Sparkles, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type HeroCardProps = {
  emotion: Emotion | null;
  verse: Verse | null;
};

const WelcomeState = () => (
  <div className="text-center text-primary-foreground/70 flex flex-col items-center justify-center h-full p-8">
    <div className="w-24 h-24 mb-4 bg-primary-foreground/10 rounded-full flex items-center justify-center">
      <Sparkles className="w-12 h-12 text-primary-foreground/50" />
    </div>
    <h2 className="font-headline text-2xl text-primary-foreground/90">Welcome to MoodMirror</h2>
    <p className="font-body mt-2">Select an emotion from the left to begin your reflection.</p>
  </div>
);

const ContentDisplay = ({ emotion, verse, key }: { emotion: Emotion; verse: Verse; key: Key }) => {
  const [isPending, startTransition] = useTransition();
  const [reflection, setReflection] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Reset reflection when verse changes
    setReflection(null);
  }, [verse]);

  const handleGenerateReflection = () => {
    startTransition(async () => {
      const result = await getReflectionAction({
        emotion: emotion.title,
        verse: verse.reference,
        translation: verse.translation,
      });
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Reflection Failed",
          description: result.error,
        });
      } else {
        setReflection(result.reflection);
      }
    });
  };

  const handleCopy = () => {
    const textToCopy = `${verse.translation}\n\n— Qur'an ${verse.reference}\n\n${verse.arabic}`;
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Verse Copied 🤍",
      description: "The verse has been copied to your clipboard.",
    });
  };

  return (
    <div className="flex flex-col h-full p-6 sm:p-8 animate-in fade-in duration-500" key={key}>
      <header className="text-center">
        <div className="text-6xl animate-in fade-in-0 zoom-in-75 duration-300">{emotion.emoji}</div>
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary-foreground/90 mt-2">
          Feeling {emotion.title}
        </h2>
      </header>
      
      <div className="my-6 text-center">
        <p 
            dir="rtl" 
            lang="ar" 
            className="font-serif text-2xl text-primary-foreground/90 leading-loose mb-3"
            style={{fontFamily: "'Noto Naskh Arabic', serif"}}
        >
            {verse.arabic}
        </p>
        <p className="font-body text-lg italic text-primary-foreground/80">
          "{verse.translation}"
        </p>
        <p className="font-body text-sm text-primary-foreground/60 mt-3">
          — Qur'an {verse.reference}
        </p>
      </div>

      <Separator className="my-4 bg-white/20" />

      <div className="space-y-4 flex-grow min-h-[6rem]">
        {reflection && (
          <div className="bg-primary-foreground/10 p-4 rounded-lg animate-in fade-in duration-500">
            <h3 className="font-headline text-sm font-semibold text-primary-foreground/80 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              Spiritual Reflection
            </h3>
            <p className="font-body text-primary-foreground/70 mt-2 text-sm">
              {reflection}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-6">
        <Button onClick={handleGenerateReflection} disabled={isPending} className="w-full bg-accent/80 hover:bg-accent text-accent-foreground">
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
          Generate Reflection
        </Button>
        <Button onClick={handleCopy} variant="outline" className="w-full bg-transparent border-white/30 text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground">
          <Copy className="mr-2 h-4 w-4" />
          Copy Verse
        </Button>
      </div>
    </div>
  );
};

export function HeroCard({ emotion, verse }: HeroCardProps) {
  return (
    <Card className="bg-card/30 backdrop-blur-lg border-white/20 shadow-lg min-h-[60vh] flex flex-col justify-center">
      <CardContent className="p-0 h-full">
        {emotion && verse ? (
          <ContentDisplay emotion={emotion} verse={verse} key={verse.id} />
        ) : (
          <WelcomeState />
        )}
      </CardContent>
    </Card>
  );
}
