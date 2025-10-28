import { Achievement } from '@/types/learning';

export const achievements: Achievement[] = [
  {
    id: 'first-lesson',
    title: 'Первый урок',
    titleAr: 'الدرس الأول',
    description: 'Завершите ваш первый урок',
    descriptionAr: 'أكمل درسك الأول',
    icon: 'BookOpen',
    requirement: {
      type: 'lessons',
      count: 1
    }
  },
  {
    id: 'shahada-master',
    title: 'Знаток Шахады',
    titleAr: 'عالم الشهادة',
    description: 'Изучите основы Шахады',
    descriptionAr: 'تعلم أساسيات الشهادة',
    icon: 'Star',
    requirement: {
      type: 'lessons',
      count: 3
    }
  },
  {
    id: 'quiz-master',
    title: 'Мастер тестов',
    titleAr: 'خبير الاختبارات',
    description: 'Пройдите 5 тестов с результатом выше 80%',
    descriptionAr: 'اجتاز 5 اختبارات بنتيجة أعلى من 80٪',
    icon: 'Award',
    requirement: {
      type: 'quizzes',
      count: 5
    }
  },
  {
    id: 'basics-complete',
    title: 'Основы освоены',
    titleAr: 'الأساسيات مكتملة',
    description: 'Завершите курс "Основы веры"',
    descriptionAr: 'أكمل دورة "أساسيات الإيمان"',
    icon: 'CheckCircle',
    requirement: {
      type: 'courses',
      count: 1
    }
  },
  {
    id: 'salah-student',
    title: 'Изучающий намаз',
    titleAr: 'متعلم الصلاة',
    description: 'Завершите курс о намазе',
    descriptionAr: 'أكمل دورة الصلاة',
    icon: 'Hand',
    requirement: {
      type: 'courses',
      count: 2
    }
  },
  {
    id: 'week-streak',
    title: 'Недельный рекорд',
    titleAr: 'إنجاز أسبوعي',
    description: 'Учитесь 7 дней подряд',
    descriptionAr: 'التعلم لمدة 7 أيام متتالية',
    icon: 'Flame',
    requirement: {
      type: 'streak',
      count: 7
    }
  },
  {
    id: 'month-streak',
    title: 'Месячный марафон',
    titleAr: 'ماراثون شهري',
    description: 'Учитесь 30 дней подряд',
    descriptionAr: 'التعلم لمدة 30 يوما متتالية',
    icon: 'Trophy',
    requirement: {
      type: 'streak',
      count: 30
    }
  },
  {
    id: 'ten-lessons',
    title: 'Прилежный ученик',
    titleAr: 'طالب مجتهد',
    description: 'Завершите 10 уроков',
    descriptionAr: 'أكمل 10 دروس',
    icon: 'GraduationCap',
    requirement: {
      type: 'lessons',
      count: 10
    }
  },
  {
    id: 'fifty-lessons',
    title: 'Путь знания',
    titleAr: 'طريق العلم',
    description: 'Завершите 50 уроков',
    descriptionAr: 'أكمل 50 درسا',
    icon: 'Lightbulb',
    requirement: {
      type: 'lessons',
      count: 50
    }
  },
  {
    id: 'all-courses',
    title: 'Искатель знаний',
    titleAr: 'طالب العلم',
    description: 'Завершите все доступные курсы',
    descriptionAr: 'أكمل جميع الدورات المتاحة',
    icon: 'Medal',
    requirement: {
      type: 'courses',
      count: 4
    }
  }
];
