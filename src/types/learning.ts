export interface Course {
  id: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  lessons: Lesson[];
  icon: string;
  color: string;
  estimatedTime: string;
  prerequisites?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  titleAr?: string;
  content: LessonContent[];
  quiz?: Quiz;
  audioUrl?: string;
  duration: string;
}

export interface LessonContent {
  type: 'text' | 'arabic' | 'list' | 'quote' | 'audio' | 'video';
  content: string;
  contentAr?: string;
  items?: string[];
  audioUrl?: string;
}

export interface Quiz {
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  questionAr?: string;
  options: string[];
  optionsAr?: string[];
  correctAnswer: number;
  explanation: string;
  explanationAr?: string;
}

export interface UserProgress {
  courseId: string;
  completedLessons: string[];
  quizScores: Record<string, number>;
  lastAccessed: Date;
  totalTime: number;
}

export interface Achievement {
  id: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  icon: string;
  unlockedAt?: Date;
  requirement: {
    type: 'lessons' | 'quizzes' | 'courses' | 'streak';
    count: number;
  };
}
