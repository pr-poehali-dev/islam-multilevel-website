export interface Dua {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  occasion: string;
  occasionAr: string;
  arabic: string;
  transliteration: string;
  russian: string;
  english: string;
  reference?: string;
  audioUrl?: string;
}

export const prayerCategories = [
  { id: 'morning', title: 'Утренние дуа', titleAr: 'أذكار الصباح' },
  { id: 'evening', title: 'Вечерние дуа', titleAr: 'أذكار المساء' },
  { id: 'daily', title: 'Ежедневные дуа', titleAr: 'الأدعية اليومية' },
  { id: 'salah', title: 'Дуа в намазе', titleAr: 'أدعية الصلاة' },
  { id: 'special', title: 'Особые случаи', titleAr: 'مناسبات خاصة' }
];

export const duas: Dua[] = [
  {
    id: 'waking-up',
    title: 'При пробуждении',
    titleAr: 'عند الاستيقاظ',
    category: 'morning',
    categoryAr: 'أذكار الصباح',
    occasion: 'Когда просыпаетесь утром',
    occasionAr: 'عند الاستيقاظ من النوم',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: 'Alhamdu lillahi alladhi ahyana ba\'da ma amatana wa ilayhi an-nushur',
    russian: 'Хвала Аллаху, Который оживил нас после того, как умертвил, и к Нему воскрешение.',
    english: 'All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection.',
    reference: 'Сахих аль-Бухари'
  },
  {
    id: 'entering-bathroom',
    title: 'При входе в туалет',
    titleAr: 'عند دخول الخلاء',
    category: 'daily',
    categoryAr: 'الأدعية اليومية',
    occasion: 'Перед входом в туалет',
    occasionAr: 'قبل دخول الخلاء',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
    transliteration: 'Allahumma inni a\'udhu bika minal-khubuthi wal-khaba\'ith',
    russian: 'О Аллах, я прибегаю к Твоей защите от скверны и нечистоты.',
    english: 'O Allah, I seek refuge in You from male and female devils.',
    reference: 'Сахих аль-Бухари, Сахих Муслим'
  },
  {
    id: 'leaving-bathroom',
    title: 'При выходе из туалета',
    titleAr: 'عند الخروج من الخلاء',
    category: 'daily',
    categoryAr: 'الأدعية اليومية',
    occasion: 'После выхода из туалета',
    occasionAr: 'بعد الخروج من الخلاء',
    arabic: 'غُفْرَانَكَ',
    transliteration: 'Ghufranaka',
    russian: 'Прошу Твоего прощения.',
    english: 'I seek Your forgiveness.',
    reference: 'Абу Дауд, ат-Тирмизи, Ибн Маджа'
  },
  {
    id: 'before-meal',
    title: 'Перед едой',
    titleAr: 'قبل الطعام',
    category: 'daily',
    categoryAr: 'الأدعية اليومية',
    occasion: 'Перед началом приёма пищи',
    occasionAr: 'قبل بدء الطعام',
    arabic: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillah',
    russian: 'Именем Аллаха.',
    english: 'In the name of Allah.',
    reference: 'Абу Дауд, ат-Тирмизи'
  },
  {
    id: 'after-meal',
    title: 'После еды',
    titleAr: 'بعد الطعام',
    category: 'daily',
    categoryAr: 'الأدعية اليومية',
    occasion: 'После завершения приёма пищи',
    occasionAr: 'بعد انتهاء الطعام',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    transliteration: 'Alhamdu lillahi alladhi at\'amana wa saqana wa ja\'alana muslimin',
    russian: 'Хвала Аллаху, Который накормил нас, напоил и сделал нас мусульманами.',
    english: 'All praise is for Allah who fed us and gave us drink, and made us Muslims.',
    reference: 'Абу Дауд, ат-Тирмизи'
  },
  {
    id: 'before-sleep',
    title: 'Перед сном',
    titleAr: 'قبل النوم',
    category: 'evening',
    categoryAr: 'أذكار المساء',
    occasion: 'Перед тем как лечь спать',
    occasionAr: 'قبل النوم',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    transliteration: 'Bismika Allahumma amutu wa ahya',
    russian: 'Именем Твоим, о Аллах, я умираю и оживаю.',
    english: 'In Your name, O Allah, I die and I live.',
    reference: 'Сахих аль-Бухари'
  },
  {
    id: 'ayat-kursi',
    title: 'Аят аль-Курси',
    titleAr: 'آية الكرسي',
    category: 'evening',
    categoryAr: 'أذكار المساء',
    occasion: 'Для защиты перед сном',
    occasionAr: 'للحماية قبل النوم',
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ',
    transliteration: 'Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum, la ta\'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard',
    russian: 'Аллах - нет божества, кроме Него, Живого, Поддерживающего жизнь. Им не овладевают ни дремота, ни сон. Ему принадлежит то, что на небесах, и то, что на земле.',
    english: 'Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.',
    reference: 'Коран 2:255'
  },
  {
    id: 'talbiyah',
    title: 'Тальбия (в Хадже)',
    titleAr: 'التلبية',
    category: 'special',
    categoryAr: 'مناسبات خاصة',
    occasion: 'Произносится во время Хаджа и Умры',
    occasionAr: 'يُقال في الحج والعمرة',
    arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
    transliteration: 'Labbayka Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni\'mata laka wal-mulk, la sharika lak',
    russian: 'Вот я перед Тобой, о Аллах, вот я перед Тобой! Вот я перед Тобой, нет у Тебя сотоварища, вот я перед Тобой! Поистине, хвала и благо принадлежат Тебе, и владычество, нет у Тебя сотоварища!',
    english: 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Indeed all praise, favor and sovereignty belong to You. You have no partner.',
    reference: 'Сахих аль-Бухари, Сахих Муслим'
  },
  {
    id: 'istiftah',
    title: 'Дуа аль-Истифтах',
    titleAr: 'دعاء الاستفتاح',
    category: 'salah',
    categoryAr: 'أدعية الصلاة',
    occasion: 'После такбира в начале намаза',
    occasionAr: 'بعد تكبيرة الإحرام',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَىٰ جَدُّكَ، وَلَا إِلَٰهَ غَيْرُكَ',
    transliteration: 'Subhanaka Allahumma wa bihamdika, wa tabarakasmuka, wa ta\'ala jadduka, wa la ilaha ghayruk',
    russian: 'Слава Тебе, о Аллах, и хвала Тебе, благословенно имя Твоё, велико могущество Твоё, и нет божества, кроме Тебя.',
    english: 'Glory is to You O Allah, and praise. Blessed is Your Name and Exalted is Your Majesty. There is none worthy of worship but You.',
    reference: 'Абу Дауд, ат-Тирмизи'
  },
  {
    id: 'tashahhud',
    title: 'Ташаххуд',
    titleAr: 'التشهد',
    category: 'salah',
    categoryAr: 'أدعية الصلاة',
    occasion: 'В положении сидя в намазе',
    occasionAr: 'في الجلوس في الصلاة',
    arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu \'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh, as-salamu \'alayna wa \'ala \'ibadillahis-salihin, ashhadu an la ilaha illallah, wa ashhadu anna Muhammadan \'abduhu wa rasuluh',
    russian: 'Приветствия Аллаху, молитвы и благие дела. Мир тебе, о Пророк, милость Аллаха и Его благословения. Мир нам и праведным рабам Аллаха. Свидетельствую, что нет божества, кроме Аллаха, и свидетельствую, что Мухаммад — Его раб и посланник.',
    english: 'All compliments, prayers and pure words are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous slaves of Allah. I bear witness that there is none worthy of worship but Allah, and I bear witness that Muhammad is His slave and Messenger.',
    reference: 'Сахих аль-Бухари, Сахих Муслим'
  },
  {
    id: 'qunut',
    title: 'Дуа аль-Кунут',
    titleAr: 'دعاء القنوت',
    category: 'salah',
    categoryAr: 'أدعية الصلاة',
    occasion: 'В намазе Витр',
    occasionAr: 'في صلاة الوتر',
    arabic: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ',
    transliteration: 'Allahumma ihdini fiman hadayt, wa \'afini fiman \'afayt, wa tawallani fiman tawallayt, wa barik li fima a\'tayt, wa qini sharra ma qadayt',
    russian: 'О Аллах, направь меня на прямой путь вместе с теми, кого Ты направил, даруй мне благополучие вместе с теми, кому Ты даровал его, возьми меня под Свою защиту вместе с теми, кого Ты взял, благослови меня в том, что Ты даровал мне, и защити меня от зла того, что Ты предопределил.',
    english: 'O Allah, guide me among those You have guided, pardon me among those You have pardoned, turn to me in friendship among those on whom You have turned in friendship, and bless me in what You have bestowed, and save me from the evil of what You have decreed.',
    reference: 'Абу Дауд, ан-Насаи, ат-Тирмизи'
  },
  {
    id: 'traveling',
    title: 'При путешествии',
    titleAr: 'دعاء السفر',
    category: 'special',
    categoryAr: 'مناسبات خاصة',
    occasion: 'При начале путешествия',
    occasionAr: 'عند بداية السفر',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ',
    transliteration: 'Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun',
    russian: 'Пречист Тот, Кто подчинил нам это, хотя мы не способны были подчинить его, и, поистине, к Господу нашему мы вернёмся.',
    english: 'Glory is to Him Who has subjected this to us, and we could never have it by our efforts. Surely, unto our Lord we shall return.',
    reference: 'Абу Дауд, ат-Тирмизи'
  }
];
