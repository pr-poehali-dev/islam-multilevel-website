import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Lesson, Quiz } from '@/types/learning';
import { Language } from '@/lib/translations';
import { QuizView } from './QuizView';

interface LessonViewProps {
  lesson: Lesson;
  language: Language;
  onComplete: () => void;
  onBack: () => void;
  onQuizComplete?: (score: number) => void;
}

export const LessonView = ({ lesson, language, onComplete, onBack, onQuizComplete }: LessonViewProps) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const isRTL = language === 'ar';
  const title = isRTL && lesson.titleAr ? lesson.titleAr : lesson.title;

  const handleLessonComplete = () => {
    setLessonCompleted(true);
    if (!lesson.quiz) {
      onComplete();
    }
  };

  const handleQuizComplete = (score: number) => {
    if (onQuizComplete) {
      onQuizComplete(score);
    }
    onComplete();
  };

  if (showQuiz && lesson.quiz) {
    return (
      <QuizView
        quiz={lesson.quiz}
        language={language}
        onComplete={handleQuizComplete}
        onBack={() => setShowQuiz(false)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4"
      >
        <Icon name="ArrowLeft" size={20} className={isRTL ? 'rotate-180' : ''} />
        {language === 'ar' ? 'رجوع' : language === 'ru' ? 'Назад' : 'Back'}
      </Button>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className={`text-3xl ${isRTL ? 'font-amiri text-right' : ''}`}>
              {title}
            </CardTitle>
            <Badge variant="outline" className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              {lesson.duration}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {lesson.content.map((content, idx) => (
            <div key={idx} className={`${isRTL ? 'text-right' : ''}`}>
              {content.type === 'text' && (
                <p className={`text-lg leading-relaxed ${isRTL && content.contentAr ? 'font-amiri' : ''}`}>
                  {isRTL && content.contentAr ? content.contentAr : content.content}
                </p>
              )}

              {content.type === 'arabic' && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-200">
                  <p className="text-3xl font-amiri text-center leading-loose" dir="rtl">
                    {content.content}
                  </p>
                  {content.audioUrl && (
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" size="sm">
                        <Icon name="Volume2" size={16} className="mr-2" />
                        {language === 'ar' ? 'استمع' : language === 'ru' ? 'Слушать' : 'Listen'}
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {content.type === 'list' && (
                <div>
                  {content.content && (
                    <p className={`font-semibold mb-3 text-lg ${isRTL ? 'font-amiri' : ''}`}>
                      {isRTL && content.contentAr ? content.contentAr : content.content}
                    </p>
                  )}
                  <ul className={`space-y-2 ${isRTL ? 'mr-6' : 'ml-6'}`}>
                    {content.items?.map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 text-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Icon name="CheckCircle" size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span className={isRTL ? 'font-amiri' : ''}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.type === 'quote' && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <Icon name="Quote" size={32} className="text-blue-500 mb-2" />
                  <p className={`text-lg italic ${isRTL ? 'font-amiri text-right' : ''}`}>
                    {isRTL && content.contentAr ? content.contentAr : content.content}
                  </p>
                </div>
              )}
            </div>
          ))}

          <div className="flex gap-4 pt-6 border-t">
            {!lessonCompleted ? (
              <Button onClick={handleLessonComplete} className="flex-1" size="lg">
                <Icon name="CheckCircle" size={20} className="mr-2" />
                {language === 'ar' ? 'أكمل الدرس' : language === 'ru' ? 'Завершить урок' : 'Complete Lesson'}
              </Button>
            ) : (
              <>
                {lesson.quiz ? (
                  <Button onClick={() => setShowQuiz(true)} className="flex-1" size="lg">
                    <Icon name="ClipboardCheck" size={20} className="mr-2" />
                    {language === 'ar' ? 'ابدأ الاختبار' : language === 'ru' ? 'Пройти тест' : 'Take Quiz'}
                  </Button>
                ) : (
                  <Button onClick={onComplete} className="flex-1" size="lg" variant="outline">
                    <Icon name="ArrowRight" size={20} className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                    {language === 'ar' ? 'التالي' : language === 'ru' ? 'Далее' : 'Next'}
                  </Button>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
