export interface Ayah {
  number: number;
  arabic: string;
  translation: {
    ru: string;
    en: string;
  };
}

export interface Surah {
  number: number;
  name: string;
  arabicName: string;
  englishName: string;
  revelationType: 'Meccan' | 'Medinan';
  numberOfAyahs: number;
  ayahs: Ayah[];
}

export const quranData: Surah[] = [
  {
    number: 1,
    name: 'Аль-Фатиха',
    arabicName: 'الفاتحة',
    englishName: 'Al-Fatihah',
    revelationType: 'Meccan',
    numberOfAyahs: 7,
    ayahs: [
      {
        number: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        translation: {
          ru: 'Во имя Аллаха, Милостивого, Милосердного!',
          en: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
        }
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        translation: {
          ru: 'Хвала Аллаху, Господу миров,',
          en: '[All] praise is [due] to Allah, Lord of the worlds -'
        }
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        translation: {
          ru: 'Милостивому, Милосердному,',
          en: 'The Entirely Merciful, the Especially Merciful,'
        }
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        translation: {
          ru: 'Властелину Дня воздаяния!',
          en: 'Sovereign of the Day of Recompense.'
        }
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        translation: {
          ru: 'Тебе одному мы поклоняемся и Тебя одного молим о помощи.',
          en: 'It is You we worship and You we ask for help.'
        }
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        translation: {
          ru: 'Веди нас прямым путем,',
          en: 'Guide us to the straight path -'
        }
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        translation: {
          ru: 'путем тех, кого Ты облагодетельствовал, не тех, на кого пал гнев, и не заблудших.',
          en: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.'
        }
      }
    ]
  },
  {
    number: 2,
    name: 'Аль-Бакара',
    arabicName: 'البقرة',
    englishName: 'Al-Baqarah',
    revelationType: 'Medinan',
    numberOfAyahs: 286,
    ayahs: [
      {
        number: 1,
        arabic: 'الم',
        translation: {
          ru: 'Алиф. Лям. Мим.',
          en: 'Alif, Lam, Meem.'
        }
      },
      {
        number: 2,
        arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
        translation: {
          ru: 'Это Писание, в котором нет сомнения, является верным руководством для богобоязненных,',
          en: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah -'
        }
      },
      {
        number: 3,
        arabic: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ',
        translation: {
          ru: 'которые веруют в сокровенное, совершают намаз и расходуют из того, чем Мы их наделили,',
          en: 'Who believe in the unseen, establish prayer, and spend out of what We have provided for them,'
        }
      },
      {
        number: 4,
        arabic: 'وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ',
        translation: {
          ru: 'которые веруют в ниспосланное тебе и ниспосланное до тебя и убеждены в Последней жизни.',
          en: 'And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith].'
        }
      },
      {
        number: 5,
        arabic: 'أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ',
        translation: {
          ru: 'Они следуют верному руководству от их Господа, и они являются преуспевшими.',
          en: 'Those are upon [right] guidance from their Lord, and it is those who are the successful.'
        }
      }
    ]
  },
  {
    number: 112,
    name: 'Аль-Ихлас',
    arabicName: 'الإخلاص',
    englishName: 'Al-Ikhlas',
    revelationType: 'Meccan',
    numberOfAyahs: 4,
    ayahs: [
      {
        number: 1,
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        translation: {
          ru: 'Скажи: «Он – Аллах, Единый,',
          en: 'Say, "He is Allah, [who is] One,'
        }
      },
      {
        number: 2,
        arabic: 'اللَّهُ الصَّمَدُ',
        translation: {
          ru: 'Аллах Самодостаточный.',
          en: 'Allah, the Eternal Refuge.'
        }
      },
      {
        number: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        translation: {
          ru: 'Он не родил и не был рожден,',
          en: 'He neither begets nor is born,'
        }
      },
      {
        number: 4,
        arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        translation: {
          ru: 'и нет никого равного Ему».',
          en: 'Nor is there to Him any equivalent."'
        }
      }
    ]
  },
  {
    number: 113,
    name: 'Аль-Фаляк',
    arabicName: 'الفلق',
    englishName: 'Al-Falaq',
    revelationType: 'Meccan',
    numberOfAyahs: 5,
    ayahs: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        translation: {
          ru: 'Скажи: «Прибегаю к защите Господа рассвета',
          en: 'Say, "I seek refuge in the Lord of daybreak'
        }
      },
      {
        number: 2,
        arabic: 'مِن شَرِّ مَا خَلَقَ',
        translation: {
          ru: 'от зла того, что Он сотворил,',
          en: 'From the evil of that which He created'
        }
      },
      {
        number: 3,
        arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        translation: {
          ru: 'от зла мрака, когда он наступает,',
          en: 'And from the evil of darkness when it settles'
        }
      },
      {
        number: 4,
        arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        translation: {
          ru: 'от зла колдуний, поплевывающих на узлы,',
          en: 'And from the evil of the blowers in knots'
        }
      },
      {
        number: 5,
        arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        translation: {
          ru: 'и от зла завистника, когда он завидует».',
          en: 'And from the evil of an envier when he envies."'
        }
      }
    ]
  },
  {
    number: 114,
    name: 'Ан-Нас',
    arabicName: 'الناس',
    englishName: 'An-Nas',
    revelationType: 'Meccan',
    numberOfAyahs: 6,
    ayahs: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        translation: {
          ru: 'Скажи: «Прибегаю к защите Господа людей,',
          en: 'Say, "I seek refuge in the Lord of mankind,'
        }
      },
      {
        number: 2,
        arabic: 'مَلِكِ النَّاسِ',
        translation: {
          ru: 'Царя людей,',
          en: 'The Sovereign of mankind.'
        }
      },
      {
        number: 3,
        arabic: 'إِلَٰهِ النَّاسِ',
        translation: {
          ru: 'Бога людей,',
          en: 'The God of mankind,'
        }
      },
      {
        number: 4,
        arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        translation: {
          ru: 'от зла искусителя отступающего,',
          en: 'From the evil of the retreating whisperer -'
        }
      },
      {
        number: 5,
        arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        translation: {
          ru: 'который наущает в груди людей,',
          en: 'Who whispers [evil] into the breasts of mankind -'
        }
      },
      {
        number: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        translation: {
          ru: 'от джиннов и людей».',
          en: 'From among the jinn and mankind."'
        }
      }
    ]
  }
];

export const getSurahByNumber = (number: number): Surah | undefined => {
  return quranData.find(surah => surah.number === number);
};

export const getAllSurahs = (): Surah[] => {
  return quranData;
};
