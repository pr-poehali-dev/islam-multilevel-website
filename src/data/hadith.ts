export interface Hadith {
  id: string;
  collection: 'bukhari' | 'muslim' | 'nawawi40';
  number: string;
  arabic: string;
  russian: string;
  english: string;
  narrator: string;
  narratorAr: string;
  category: string;
  categoryAr: string;
  grade: 'sahih' | 'hasan' | 'daif';
}

export const hadithCollections = {
  bukhari: {
    title: 'Сахих аль-Бухари',
    titleAr: 'صحيح البخاري',
    description: 'Наиболее достоверный сборник хадисов после Корана',
    descriptionAr: 'أصح كتاب بعد كتاب الله',
    totalHadith: 7563
  },
  muslim: {
    title: 'Сахих Муслим',
    titleAr: 'صحيح مسلم',
    description: 'Второй по важности сборник достоверных хадисов',
    descriptionAr: 'ثاني أصح كتب الحديث',
    totalHadith: 7190
  },
  nawawi40: {
    title: '40 хадисов ан-Навави',
    titleAr: 'الأربعون النووية',
    description: 'Основополагающие хадисы исламской религии',
    descriptionAr: 'أربعون حديثا في أصول الدين',
    totalHadith: 42
  }
};

export const hadiths: Hadith[] = [
  {
    id: 'nawawi-1',
    collection: 'nawawi40',
    number: '1',
    arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوْ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ',
    russian: 'Поистине, дела оцениваются по намерениям, и каждому человеку достанется то, что он намеревался обрести. Тому, кто совершил переселение ради Аллаха и Его Посланника, будет засчитано переселение ради Аллаха и Его Посланника. А тому, кто совершил переселение ради мирских благ или ради женщины, на которой он хотел жениться, будет засчитано переселение к тому, к чему он переселялся.',
    english: 'Actions are according to intentions, and everyone will get what was intended. Whoever migrates with an intention for Allah and His messenger, the migration will be for the sake of Allah and his Messenger. And whoever migrates for worldly gain or to marry a woman, then his migration will be for the sake of whatever he migrated for.',
    narrator: 'Умар ибн аль-Хаттаб',
    narratorAr: 'عمر بن الخطاب',
    category: 'Намерение и искренность',
    categoryAr: 'النية والإخلاص',
    grade: 'sahih'
  },
  {
    id: 'nawawi-2',
    collection: 'nawawi40',
    number: '2',
    arabic: 'بَيْنَمَا نَحْنُ عِنْدَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ ذَاتَ يَوْمٍ إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ، شَدِيدُ سَوَادِ الشَّعْرِ، لَا يُرَى عَلَيْهِ أَثَرُ السَّفَرِ، وَلَا يَعْرِفُهُ مِنَّا أَحَدٌ، حَتَّى جَلَسَ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَأَسْنَدَ رُكْبَتَيْهِ إِلَى رُكْبَتَيْهِ وَوَضَعَ كَفَّيْهِ عَلَى فَخِذَيْهِ وَقَالَ: يَا مُحَمَّدُ أَخْبِرْنِي عَنْ الْإِسْلَامِ',
    russian: 'Однажды, когда мы находились у Посланника Аллаха, перед нами предстал человек в ослепительно белой одежде, с очень чёрными волосами, на котором не было видно следов путешествия и которого никто из нас не знал. Он сел напротив Пророка, прислонил свои колени к его коленям, положил ладони на его бёдра и сказал: "О Мухаммад, поведай мне об Исламе".',
    english: 'One day when we were with the Messenger of Allah, a man appeared before us with very white clothing and very black hair. No signs of travel were visible on him, and none of us knew him. He sat down before the Prophet, rested his knees against his knees, placed his hands on his thighs, and said: "O Muhammad, tell me about Islam."',
    narrator: 'Умар ибн аль-Хаттаб',
    narratorAr: 'عمر بن الخطاب',
    category: 'Ислам, Иман и Ихсан',
    categoryAr: 'الإسلام والإيمان والإحسان',
    grade: 'sahih'
  },
  {
    id: 'bukhari-1',
    collection: 'bukhari',
    number: '1',
    arabic: 'بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالحَجِّ، وَصَوْمِ رَمَضَانَ',
    russian: 'Ислам построен на пяти (столпах): свидетельстве о том, что нет божества, кроме Аллаха, и что Мухаммад — посланник Аллаха, совершении молитвы, выплате закята, совершении хаджа и соблюдении поста в рамадан.',
    english: 'Islam is built upon five pillars: testifying that there is no deity worthy of worship except Allah and that Muhammad is the Messenger of Allah, establishing the prayer, paying the zakah, making the pilgrimage to the House, and fasting in Ramadan.',
    narrator: 'Абдуллах ибн Умар',
    narratorAr: 'عبد الله بن عمر',
    category: 'Столпы Ислама',
    categoryAr: 'أركان الإسلام',
    grade: 'sahih'
  },
  {
    id: 'bukhari-2',
    collection: 'bukhari',
    number: '6',
    arabic: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ',
    russian: 'Мусульманин — это тот, от чьего языка и руки другие мусульмане находятся в безопасности.',
    english: 'A Muslim is the one from whose tongue and hands the Muslims are safe.',
    narrator: 'Абдуллах ибн Амр',
    narratorAr: 'عبد الله بن عمرو',
    category: 'Нравственность',
    categoryAr: 'الأخلاق',
    grade: 'sahih'
  },
  {
    id: 'muslim-1',
    collection: 'muslim',
    number: '55',
    arabic: 'الدِّينُ النَّصِيحَةُ قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ',
    russian: 'Религия — это искренний совет. Мы спросили: "Кому?" Он ответил: "Аллаху, Его Писанию, Его Посланнику, руководителям мусульман и всем мусульманам".',
    english: 'Religion is sincere advice. We asked: "To whom?" He replied: "To Allah, His Book, His Messenger, and to the leaders of the Muslims and their common folk."',
    narrator: 'Тамим ад-Дари',
    narratorAr: 'تميم الداري',
    category: 'Искренность и наставления',
    categoryAr: 'النصيحة',
    grade: 'sahih'
  },
  {
    id: 'nawawi-3',
    collection: 'nawawi40',
    number: '13',
    arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    russian: 'Не уверует никто из вас до тех пор, пока не станет желать своему брату того же, чего желает самому себе.',
    english: 'None of you truly believes until he loves for his brother what he loves for himself.',
    narrator: 'Анас ибн Малик',
    narratorAr: 'أنس بن مالك',
    category: 'Любовь к братьям',
    categoryAr: 'المحبة للإخوان',
    grade: 'sahih'
  },
  {
    id: 'nawawi-4',
    collection: 'nawawi40',
    number: '16',
    arabic: 'لَا تَغْضَبْ',
    russian: 'Не гневайся.',
    english: 'Do not get angry.',
    narrator: 'Абу Хурайра',
    narratorAr: 'أبو هريرة',
    category: 'Контроль гнева',
    categoryAr: 'كظم الغيظ',
    grade: 'sahih'
  },
  {
    id: 'nawawi-5',
    collection: 'nawawi40',
    number: '24',
    arabic: 'كُلُّ سُلَامَى مِنْ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ',
    russian: 'За каждый сустав человека полагается милостыня каждый день, когда восходит солнце.',
    english: 'Every joint of a person must perform a charity each day that the sun rises.',
    narrator: 'Абу Хурайра',
    narratorAr: 'أبو هريرة',
    category: 'Благие дела',
    categoryAr: 'الأعمال الصالحة',
    grade: 'sahih'
  }
];
