import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Course } from '@/types/learning';
import { Language } from '@/lib/translations';

interface CourseCardProps {
  course: Course;
  progress?: number;
  language: Language;
  onClick: () => void;
}

export const CourseCard = ({ course, progress = 0, language, onClick }: CourseCardProps) => {
  const isRTL = language === 'ar';
  const title = isRTL && course.titleAr ? course.titleAr : course.title;
  const description = isRTL && course.descriptionAr ? course.descriptionAr : course.description;

  const levelColors = {
    beginner: 'bg-green-100 text-green-800 border-green-300',
    intermediate: 'bg-blue-100 text-blue-800 border-blue-300',
    advanced: 'bg-purple-100 text-purple-800 border-purple-300'
  };

  const levelLabels = {
    ru: {
      beginner: 'Начальный',
      intermediate: 'Средний',
      advanced: 'Продвинутый'
    },
    ar: {
      beginner: 'مبتدئ',
      intermediate: 'متوسط',
      advanced: 'متقدم'
    },
    en: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    }
  };

  return (
    <Card
      className={`${course.color} border-2 border-transparent hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-lg bg-white shadow-sm`}>
            <Icon name={course.icon as any} size={32} className="text-primary" />
          </div>
          <Badge className={`${levelColors[course.level]} border`}>
            {levelLabels[language][course.level]}
          </Badge>
        </div>
        <CardTitle className={`text-xl mt-4 ${isRTL ? 'font-amiri text-right' : ''}`}>
          {title}
        </CardTitle>
        <CardDescription className={`text-base ${isRTL ? 'font-amiri text-right' : ''}`}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              {course.estimatedTime}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="BookOpen" size={16} />
              {course.lessons.length} {language === 'ar' ? 'دروس' : language === 'ru' ? 'уроков' : 'lessons'}
            </span>
          </div>
          {progress > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{language === 'ar' ? 'التقدم' : language === 'ru' ? 'Прогресс' : 'Progress'}</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
