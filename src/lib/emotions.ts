import type { Emotion } from './types';

export const emotions: Emotion[] = [
  // Positive Emotions
  {
    id: 'peaceful',
    title: 'Peaceful',
    emoji: '🌿',
    theme: { background: 'from-green-200/50 to-teal-200/50' },
    verses: [
      {
        id: 1,
        reference: '13:28',
        arabic: 'ٱلَّذِينَ ءَامَنُواْ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ ٱللَّهِ ۗ أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ',
        translation: 'Those who believe and whose hearts find comfort in the remembrance of Allah. Surely in the remembrance of Allah do hearts find comfort.'
      },
      {
        id: 2,
        reference: '25:63',
        arabic: 'وَعِبَادُ ٱلرَّحْمَـٰنِ ٱلَّذِينَ يَمْشُونَ عَلَى ٱلْأَرْضِ هَوْنًا وَإِذَا خَاطَبَهُمُ ٱلْجَـٰهِلُونَ قَالُواْ سَلَـٰمًا',
        translation: 'The servants of the Most Merciful are those who walk upon the earth easily, and when the ignorant address them [harshly], they say [words of] peace.'
      }
    ]
  },
  {
    id: 'grateful',
    title: 'Grateful',
    emoji: '🌤️',
    theme: { background: 'from-amber-200/50 to-yellow-200/50' },
    verses: [
      {
        id: 3,
        reference: '14:7',
        arabic: 'وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِى لَشَدِيدٌ',
        translation: 'And [remember] when your Lord proclaimed, "If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe."'
      },
      {
        id: 4,
        reference: '55:13',
        arabic: 'فَبِأَىِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ',
        translation: 'So which of the favors of your Lord would you deny?'
      }
    ]
  },
  {
    id: 'hopeful',
    title: 'Hopeful',
    emoji: '☁️',
    theme: { background: 'from-sky-200/50 to-blue-200/50' },
    verses: [
      {
        id: 5,
        reference: '94:5-6',
        arabic: 'فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا',
        translation: 'For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.'
      },
      {
        id: 6,
        reference: '39:53',
        arabic: '۞ قُلْ يَـٰعِبَادِىَ ٱلَّذِينَ أَسْرَفُواْ عَلَىٰٓ أَنفُسِهِمْ لَا تَقْنَطُواْ مِن رَّحْمَةِ ٱللَّهِ ۚ إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا ۚ إِنَّهُۥ هُوَ ٱلْغَفُورُ ٱلرَّحِيمُ',
        translation: 'Say, "O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful."'
      }
    ]
  },
  {
    id: 'loved',
    title: 'Loved',
    emoji: '💗',
    theme: { background: 'from-rose-200/50 to-pink-200/50' },
    verses: [
      {
        id: 7,
        reference: '50:16',
        arabic: 'وَلَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِۦ نَفْسُهُۥ ۖ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ',
        translation: 'And We have already created man and know what his soul whispers to him, and We are closer to him than [his] jugular vein.'
      },
      {
        id: 8,
        reference: '19:96',
        arabic: 'إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّـٰلِحَـٰتِ سَيَجْعَلُ لَهُمُ ٱلرَّحْمَـٰنُ وُدًّۭا',
        translation: 'Indeed, those who have believed and done righteous deeds - the Most Merciful will appoint for them affection.'
      }
    ]
  },
  // Difficult Emotions
  {
    id: 'sad',
    title: 'Sad',
    emoji: '🌊',
    theme: { background: 'from-blue-300/50 to-indigo-300/50' },
    verses: [
      {
        id: 9,
        reference: '12:86',
        arabic: 'قَالَ إِنَّمَآ أَشْكُواْ بَثِّى وَحُزْنِىٓ إِلَى ٱللَّهِ وَأَعْلَمُ مِنَ ٱللَّهِ مَا لَا تَعْلَمُونَ',
        translation: 'He said, "I only complain of my suffering and my grief to Allah, and I know from Allah that which you do not know."'
      },
      {
        id: 10,
        reference: '9:40',
        arabic: 'لَا تَحْزَنْ إِنَّ ٱللَّهَ مَعَنَا',
        translation: '...Do not grieve; indeed Allah is with us.'
      }
    ]
  },
  {
    id: 'anxious',
    title: 'Anxious',
    emoji: '🌙',
    theme: { background: 'from-violet-300/50 to-purple-300/50' },
    verses: [
      {
        id: 11,
        reference: '2:45',
        arabic: 'وَٱسْتَعِينُواْ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
        translation: 'And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah].'
      },
      {
        id: 12,
        reference: '20:46',
        arabic: 'قَالَ لَا تَخَافَآ ۖ إِنَّنِى مَعَكُمَآ أَسْمَعُ وَأَرَىٰ',
        translation: 'He said, "Fear not. Indeed, I am with you both; I hear and I see."'
      }
    ]
  },
  {
    id: 'fearful',
    title: 'Fearful',
    emoji: '🌑',
    theme: { background: 'from-teal-300/50 to-cyan-300/50' },
    verses: [
      {
        id: 13,
        reference: '3:173',
        arabic: 'ٱلَّذِينَ قَالَ لَهُمُ ٱلنَّاسُ إِنَّ ٱلنَّاسَ قَدْ جَمَعُواْ لَكُمْ فَٱخْشَوْهُمْ فَزَادَهُمْ إِيمَـٰنًا وَقَالُواْ حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ',
        translation: 'Those to whom people said, "Indeed, the people have gathered against you, so fear them." But it [only] increased them in faith, and they said, "Sufficient for us is Allah, and [He is] the best Disposer of affairs."'
      },
      {
        id: 14,
        reference: '10:62',
        arabic: 'أَلَآ إِنَّ أَوْلِيَآءَ ٱللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ',
        translation: 'Unquestionably, [for] the allies of Allah there will be no fear concerning them, nor will they grieve.'
      }
    ]
  },
  {
    id: 'lonely',
    title: 'Lonely',
    emoji: '🌌',
    theme: { background: 'from-indigo-300/50 to-slate-300/50' },
    verses: [
      {
        id: 15,
        reference: '93:3',
        arabic: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ',
        translation: 'Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you].'
      },
      {
        id: 16,
        reference: '57:4',
        arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَٱللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ',
        translation: '...And He is with you wherever you are. And Allah, of what you do, is Seeing.'
      }
    ]
  },
  // Intense Emotions
  {
    id: 'angry',
    title: 'Angry',
    emoji: '🔥',
    theme: { background: 'from-red-300/50 to-rose-300/50' },
    verses: [
      {
        id: 17,
        reference: '3:134',
        arabic: '...وَٱلْكَـٰظِمِينَ ٱلْغَيْظَ وَٱلْعَافِينَ عَنِ ٱلنَّاسِ ۗ وَٱللَّهُ يُحِبُّ ٱلْمُحْسِنِينَ',
        translation: '...who restrain anger and who pardon the people - and Allah loves the doers of good.'
      },
      {
        id: 18,
        reference: '41:34',
        arabic: 'وَلَا تَسْتَوِى ٱلْحَسَنَةُ وَلَا ٱلسَّيِّئَةُ ۚ ٱدْفَعْ بِٱلَّتِى هِىَ أَحْسَنُ فَإِذَا ٱلَّذِى بَيْنَكَ وَبَيْنَهُۥ عَدَٰوَةٌ كَأَنَّهُۥ وَلِىٌّ حَمِيمٌ',
        translation: 'And not equal are the good deed and the bad. Repel [evil] by that [deed] which is better; and thereupon the one whom between you and him is enmity [will become] as though he was a devoted friend.'
      }
    ]
  },
  // Spiritual & Reflective States
  {
    id: 'guilty',
    title: 'Guilty',
    emoji: '🌫️',
    theme: { background: 'from-gray-300/50 to-slate-300/50' },
    verses: [
      {
        id: 19,
        reference: '39:53',
        arabic: '۞ قُلْ يَـٰعِبَادِىَ ٱلَّذِينَ أَسْرَفُواْ عَلَىٰٓ أَنفُسِهِمْ لَا تَقْنَطُواْ مِن رَّحْمَةِ ٱللَّهِ ۚ إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا ۚ إِنَّهُۥ هُوَ ٱلْغَفُورُ ٱلرَّحِيمُ',
        translation: 'Say, "O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful."'
      },
      {
        id: 20,
        reference: '8:33',
        arabic: 'وَمَا كَانَ ٱللَّهُ لِيُعَذِّبَهُمْ وَأَنتَ فِيهِمْ ۚ وَمَا كَانَ ٱللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْfِرُونَ',
        translation: 'But Allah would not punish them while you, [O Muhammad], are among them, and Allah would not punish them while they seek forgiveness.'
      }
    ]
  },
  {
    id: 'patient',
    title: 'Patient',
    emoji: '🍂',
    theme: { background: 'from-orange-200/50 to-amber-200/50' },
    verses: [
      {
        id: 21,
        reference: '2:153',
        arabic: 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱسْتَعِينُواْ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ',
        translation: 'O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.'
      },
      {
        id: 22,
        reference: '31:17',
        arabic: '...وَٱصْبِرْ عَلَىٰ مَآ أَصَابَكَ ۖ إِنَّ ذَٰلِكَ مِنْ عَزْمِ ٱلْأُمُورِ',
        translation: '...and be patient over what befalls you. Indeed, [all] that is of the matters [requiring] determination.'
      }
    ]
  }
];
