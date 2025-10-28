export type Language = 'ru' | 'ar' | 'en';

export const translations = {
  ru: {
    title: 'Изучение Ислама',
    subtitle: 'Образовательный портал для изучения основ Ислама с аудио материалами и правильным произношением',
    audioBadge: 'Аудио произношение доступно',
    audioLabel: 'Аудио',
    ctaTitle: 'Начните своё путешествие',
    ctaSubtitle: 'Изучайте Ислам поэтапно с аудио материалами и подробными объяснениями',
    ctaButton: 'Начать обучение',
    footer: 'Да благословит Аллах ваше изучение',
    copyright: 'Образовательный портал © 2025',
    audioPronunciation: 'Аудио произношение',
    languages: 'Арабский + Русский',
    contentPlaceholder: 'Здесь будет размещён подробный контент по теме',
    contentDescription: 'Материал включает теоретическую часть, примеры и практические советы.',
    sections: {
      basics: {
        title: 'Основы веры',
        description: 'Шесть столпов имана и пять столпов Ислама',
        content: [
          { title: 'Шахада', subtitle: 'Свидетельство веры' },
          { title: 'Таухид', subtitle: 'Единобожие в Исламе' },
          { title: 'Столпы Ислама', subtitle: 'Пять основных обязанностей' }
        ]
      },
      history: {
        title: 'История Ислама',
        description: 'От пророка Мухаммада ﷺ до наших дней',
        content: [
          { title: 'Жизнь Пророка ﷺ', subtitle: 'Сира Мухаммада' },
          { title: 'Праведные халифы', subtitle: 'Первые правители' },
          { title: 'Исламские империи', subtitle: 'Развитие цивилизации' }
        ]
      },
      quran: {
        title: 'Изучение Корана',
        description: 'Священная книга с толкованиями',
        content: [
          { title: 'Аль-Фатиха', subtitle: 'Открывающая сура' },
          { title: 'Короткие суры', subtitle: 'Джуз Амма' },
          { title: 'Тафсир', subtitle: 'Толкование Корана' }
        ]
      },
      fiqh: {
        title: 'Фикх',
        description: 'Исламское право и законы',
        content: [
          { title: 'Ибадат', subtitle: 'Поклонение' },
          { title: 'Муамалат', subtitle: 'Взаимоотношения' },
          { title: 'Четыре мазхаба', subtitle: 'Школы права' }
        ]
      },
      salah: {
        title: 'Намаз и молитвы',
        description: 'Руководство по совершению молитв',
        content: [
          { title: 'Как совершать намаз', subtitle: 'Пошаговое руководство' },
          { title: 'Дуа', subtitle: 'Повседневные молитвы' },
          { title: 'Азкар', subtitle: 'Поминания Аллаха' }
        ]
      },
      hadith: {
        title: 'Хадисы пророка',
        description: 'Изречения и деяния пророка ﷺ',
        content: [
          { title: 'Сахих аль-Бухари', subtitle: 'Достоверные хадисы' },
          { title: 'Сахих Муслим', subtitle: 'Собрание хадисов' },
          { title: '40 хадисов ан-Навави', subtitle: 'Основы религии' }
        ]
      },
      calendar: {
        title: 'Исламский календарь',
        description: 'Праздники и важные даты',
        content: [
          { title: 'Рамадан', subtitle: 'Месяц поста' },
          { title: 'Ид аль-Фитр', subtitle: 'Праздник разговения' },
          { title: 'Ид аль-Адха', subtitle: 'Праздник жертвоприношения' }
        ]
      },
      library: {
        title: 'Библиотека материалов',
        description: 'Книги, статьи и лекции',
        content: [
          { title: 'Книги по исламу', subtitle: 'Классические и современные' },
          { title: 'Видеолекции', subtitle: 'Уроки учёных' },
          { title: 'Статьи', subtitle: 'Тематические материалы' }
        ]
      },
      qa: {
        title: 'Вопросы и ответы',
        description: 'Ответы на частые вопросы',
        content: [
          { title: 'Вопросы акиды', subtitle: 'О вере и убеждениях' },
          { title: 'Вопросы фикха', subtitle: 'О практике религии' },
          { title: 'Современные вопросы', subtitle: 'Ислам в наше время' }
        ]
      }
    }
  },
  ar: {
    title: 'تعلم الإسلام',
    subtitle: 'بوابة تعليمية لدراسة أساسيات الإسلام مع مواد صوتية ونطق صحيح',
    audioBadge: 'النطق الصوتي متاح',
    audioLabel: 'صوتي',
    ctaTitle: 'ابدأ رحلتك',
    ctaSubtitle: 'تعلم الإسلام خطوة بخطوة مع المواد الصوتية والشروحات التفصيلية',
    ctaButton: 'ابدأ التعلم',
    footer: 'بارك الله في دراستك',
    copyright: 'بوابة تعليمية © 2025',
    audioPronunciation: 'النطق الصوتي',
    languages: 'عربي + روسي',
    contentPlaceholder: 'سيتم وضع محتوى تفصيلي حول موضوع',
    contentDescription: 'تشمل المواد الجزء النظري والأمثلة والنصائح العملية.',
    sections: {
      basics: {
        title: 'أسس العقيدة',
        description: 'أركان الإيمان الستة وأركان الإسلام الخمسة',
        content: [
          { title: 'الشهادة', subtitle: 'شهادة الإيمان' },
          { title: 'التوحيد', subtitle: 'توحيد الله في الإسلام' },
          { title: 'أركان الإسلام', subtitle: 'الواجبات الخمس الأساسية' }
        ]
      },
      history: {
        title: 'تاريخ الإسلام',
        description: 'من النبي محمد ﷺ إلى يومنا هذا',
        content: [
          { title: 'حياة النبي ﷺ', subtitle: 'السيرة النبوية' },
          { title: 'الخلفاء الراشدون', subtitle: 'الحكام الأوائل' },
          { title: 'الإمبراطوريات الإسلامية', subtitle: 'تطور الحضارة' }
        ]
      },
      quran: {
        title: 'دراسة القرآن',
        description: 'الكتاب المقدس مع التفسير',
        content: [
          { title: 'الفاتحة', subtitle: 'السورة الافتتاحية' },
          { title: 'السور القصيرة', subtitle: 'جزء عم' },
          { title: 'التفسير', subtitle: 'تفسير القرآن' }
        ]
      },
      fiqh: {
        title: 'الفقه',
        description: 'الشريعة والقوانين الإسلامية',
        content: [
          { title: 'العبادات', subtitle: 'العبادة' },
          { title: 'المعاملات', subtitle: 'العلاقات' },
          { title: 'المذاهب الأربعة', subtitle: 'مدارس الفقه' }
        ]
      },
      salah: {
        title: 'الصلاة والدعاء',
        description: 'دليل أداء الصلاة',
        content: [
          { title: 'كيفية أداء الصلاة', subtitle: 'دليل خطوة بخطوة' },
          { title: 'الدعاء', subtitle: 'الأدعية اليومية' },
          { title: 'الأذكار', subtitle: 'ذكر الله' }
        ]
      },
      hadith: {
        title: 'أحاديث النبي',
        description: 'أقوال وأفعال النبي ﷺ',
        content: [
          { title: 'صحيح البخاري', subtitle: 'الأحاديث الصحيحة' },
          { title: 'صحيح مسلم', subtitle: 'مجموعة الأحاديث' },
          { title: 'الأربعون النووية', subtitle: 'أساسيات الدين' }
        ]
      },
      calendar: {
        title: 'التقويم الإسلامي',
        description: 'الأعياد والتواريخ المهمة',
        content: [
          { title: 'رمضان', subtitle: 'شهر الصيام' },
          { title: 'عيد الفطر', subtitle: 'عيد الإفطار' },
          { title: 'عيد الأضحى', subtitle: 'عيد الأضحية' }
        ]
      },
      library: {
        title: 'مكتبة المواد',
        description: 'كتب ومقالات ومحاضرات',
        content: [
          { title: 'كتب إسلامية', subtitle: 'كلاسيكية وحديثة' },
          { title: 'محاضرات فيديو', subtitle: 'دروس العلماء' },
          { title: 'مقالات', subtitle: 'مواد موضوعية' }
        ]
      },
      qa: {
        title: 'أسئلة وأجوبة',
        description: 'إجابات على الأسئلة الشائعة',
        content: [
          { title: 'أسئلة العقيدة', subtitle: 'عن الإيمان والمعتقدات' },
          { title: 'أسئلة الفقه', subtitle: 'عن ممارسة الدين' },
          { title: 'أسئلة معاصرة', subtitle: 'الإسلام في عصرنا' }
        ]
      }
    }
  },
  en: {
    title: 'Learning Islam',
    subtitle: 'Educational portal for studying the basics of Islam with audio materials and correct pronunciation',
    audioBadge: 'Audio pronunciation available',
    audioLabel: 'Audio',
    ctaTitle: 'Start Your Journey',
    ctaSubtitle: 'Learn Islam step by step with audio materials and detailed explanations',
    ctaButton: 'Start Learning',
    footer: 'May Allah bless your studies',
    copyright: 'Educational Portal © 2025',
    audioPronunciation: 'Audio pronunciation',
    languages: 'Arabic + Russian',
    contentPlaceholder: 'Detailed content will be placed here on the topic',
    contentDescription: 'The material includes theoretical part, examples and practical advice.',
    sections: {
      basics: {
        title: 'Foundations of Faith',
        description: 'Six pillars of Iman and five pillars of Islam',
        content: [
          { title: 'Shahada', subtitle: 'Testimony of Faith' },
          { title: 'Tawhid', subtitle: 'Monotheism in Islam' },
          { title: 'Pillars of Islam', subtitle: 'Five main obligations' }
        ]
      },
      history: {
        title: 'History of Islam',
        description: 'From Prophet Muhammad ﷺ to our days',
        content: [
          { title: 'Life of the Prophet ﷺ', subtitle: 'Seerah of Muhammad' },
          { title: 'Rightly Guided Caliphs', subtitle: 'First rulers' },
          { title: 'Islamic Empires', subtitle: 'Development of civilization' }
        ]
      },
      quran: {
        title: 'Studying the Quran',
        description: 'Sacred book with interpretations',
        content: [
          { title: 'Al-Fatiha', subtitle: 'Opening chapter' },
          { title: 'Short chapters', subtitle: 'Juz Amma' },
          { title: 'Tafsir', subtitle: 'Quran interpretation' }
        ]
      },
      fiqh: {
        title: 'Fiqh',
        description: 'Islamic law and jurisprudence',
        content: [
          { title: 'Ibadat', subtitle: 'Worship' },
          { title: 'Muamalat', subtitle: 'Interactions' },
          { title: 'Four Madhabs', subtitle: 'Schools of law' }
        ]
      },
      salah: {
        title: 'Prayer and Supplications',
        description: 'Guide to performing prayers',
        content: [
          { title: 'How to pray', subtitle: 'Step-by-step guide' },
          { title: 'Dua', subtitle: 'Daily supplications' },
          { title: 'Adhkar', subtitle: 'Remembrance of Allah' }
        ]
      },
      hadith: {
        title: 'Prophetic Hadiths',
        description: 'Sayings and actions of Prophet ﷺ',
        content: [
          { title: 'Sahih al-Bukhari', subtitle: 'Authentic hadiths' },
          { title: 'Sahih Muslim', subtitle: 'Hadith collection' },
          { title: '40 Hadith an-Nawawi', subtitle: 'Fundamentals of religion' }
        ]
      },
      calendar: {
        title: 'Islamic Calendar',
        description: 'Holidays and important dates',
        content: [
          { title: 'Ramadan', subtitle: 'Month of fasting' },
          { title: 'Eid al-Fitr', subtitle: 'Festival of breaking fast' },
          { title: 'Eid al-Adha', subtitle: 'Festival of sacrifice' }
        ]
      },
      library: {
        title: 'Library of Materials',
        description: 'Books, articles and lectures',
        content: [
          { title: 'Islamic books', subtitle: 'Classical and modern' },
          { title: 'Video lectures', subtitle: 'Lessons from scholars' },
          { title: 'Articles', subtitle: 'Thematic materials' }
        ]
      },
      qa: {
        title: 'Questions and Answers',
        description: 'Answers to common questions',
        content: [
          { title: 'Questions of Aqeedah', subtitle: 'About faith and beliefs' },
          { title: 'Questions of Fiqh', subtitle: 'About religious practice' },
          { title: 'Contemporary questions', subtitle: 'Islam in our time' }
        ]
      }
    }
  }
};

export const getTranslation = (lang: Language) => translations[lang];
