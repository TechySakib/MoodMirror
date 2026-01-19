export interface Verse {
  id: number;
  reference: string;
  arabic: string;
  translation: string;
}

export interface Emotion {
  id: string;
  title: string;
  emoji: string;
  theme: {
    background: string;
  };
  verses: Verse[];
}
