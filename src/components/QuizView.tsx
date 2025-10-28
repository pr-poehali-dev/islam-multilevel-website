import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Quiz, Question } from '@/types/learning';
import { Language } from '@/lib/translations';

interface QuizViewProps {
  quiz: Quiz;
  language: Language;
  onComplete: (score: number) => void;
  onBack: () => void;
}

export const QuizView = ({ quiz, language, onComplete, onBack }: QuizViewProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const isRTL = language === 'ar';

  const question = quiz.questions[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  if (showResults) {
    const score = calculateScore();
    const passed = score >= 70;

    return (
      <div className="max-w-2xl mx-auto">
        <Card className={`border-2 ${passed ? 'border-green-500 bg-green-50' : 'border-orange-500 bg-orange-50'}`}>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className={`p-4 rounded-full ${passed ? 'bg-green-100' : 'bg-orange-100'}`}>
                <Icon
                  name={passed ? 'Trophy' : 'AlertCircle'}
                  size={48}
                  className={passed ? 'text-green-600' : 'text-orange-600'}
                />
              </div>
            </div>
            <CardTitle className={`text-3xl ${isRTL ? 'font-amiri' : ''}`}>
              {passed
                ? (language === 'ar' ? 'ممتاز!' : language === 'ru' ? 'Отлично!' : 'Excellent!')
                : (language === 'ar' ? 'حاول مرة أخرى' : language === 'ru' ? 'Попробуйте снова' : 'Try Again')}
            </CardTitle>
            <CardDescription className="text-2xl font-bold">
              {language === 'ar' ? 'النتيجة' : language === 'ru' ? 'Результат' : 'Score'}: {score}%
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className={`text-lg ${isRTL ? 'font-amiri' : ''}`}>
                {language === 'ar'
                  ? `أجبت بشكل صحيح على ${selectedAnswers.filter((a, i) => a === quiz.questions[i].correctAnswer).length} من ${quiz.questions.length} أسئلة`
                  : language === 'ru'
                  ? `Вы правильно ответили на ${selectedAnswers.filter((a, i) => a === quiz.questions[i].correctAnswer).length} из ${quiz.questions.length} вопросов`
                  : `You answered ${selectedAnswers.filter((a, i) => a === quiz.questions[i].correctAnswer).length} out of ${quiz.questions.length} questions correctly`}
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {quiz.questions.map((q, idx) => {
                const isCorrect = selectedAnswers[idx] === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border-2 ${
                      isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <Icon
                        name={isCorrect ? 'CheckCircle' : 'XCircle'}
                        size={20}
                        className={isCorrect ? 'text-green-600' : 'text-red-600'}
                      />
                      <div className="flex-1">
                        <p className={`font-semibold ${isRTL ? 'font-amiri text-right' : ''}`}>
                          {isRTL && q.questionAr ? q.questionAr : q.question}
                        </p>
                        {!isCorrect && (
                          <p className={`text-sm mt-2 ${isRTL ? 'font-amiri text-right' : ''}`}>
                            {language === 'ar' ? 'الإجابة الصحيحة: ' : language === 'ru' ? 'Правильный ответ: ' : 'Correct answer: '}
                            {isRTL && q.optionsAr ? q.optionsAr[q.correctAnswer] : q.options[q.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4 pt-4">
              <Button onClick={onBack} variant="outline" className="flex-1">
                <Icon name="ArrowLeft" size={20} className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                {language === 'ar' ? 'رجوع للدرس' : language === 'ru' ? 'Вернуться к уроку' : 'Back to Lesson'}
              </Button>
              <Button onClick={() => onComplete(score)} className="flex-1">
                <Icon name="CheckCircle" size={20} className="mr-2" />
                {language === 'ar' ? 'متابعة' : language === 'ru' ? 'Продолжить' : 'Continue'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const questionText = isRTL && question.questionAr ? question.questionAr : question.question;
  const options = isRTL && question.optionsAr ? question.optionsAr : question.options;

  return (
    <div className="max-w-2xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <Icon name="ArrowLeft" size={20} className={isRTL ? 'rotate-180' : ''} />
        {language === 'ar' ? 'رجوع' : language === 'ru' ? 'Назад' : 'Back'}
      </Button>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardDescription>
              {language === 'ar' ? 'سؤال' : language === 'ru' ? 'Вопрос' : 'Question'} {currentQuestion + 1} {language === 'ar' ? 'من' : language === 'ru' ? 'из' : 'of'} {quiz.questions.length}
            </CardDescription>
            <div className="flex gap-1">
              {quiz.questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentQuestion ? 'bg-primary' : selectedAnswers[idx] !== undefined ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <CardTitle className={`text-2xl ${isRTL ? 'font-amiri text-right' : ''}`}>
            {questionText}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup value={selectedAnswers[currentQuestion]?.toString()} onValueChange={(val) => handleAnswer(parseInt(val))}>
            {options.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2 space-x-reverse p-4 rounded-lg border-2 hover:border-primary transition-colors cursor-pointer">
                <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                <Label htmlFor={`option-${idx}`} className={`flex-1 cursor-pointer text-lg ${isRTL ? 'font-amiri text-right' : ''}`}>
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <Button
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestion] === undefined}
            className="w-full"
            size="lg"
          >
            {currentQuestion < quiz.questions.length - 1
              ? (language === 'ar' ? 'السؤال التالي' : language === 'ru' ? 'Следующий вопрос' : 'Next Question')
              : (language === 'ar' ? 'إنهاء الاختبار' : language === 'ru' ? 'Завершить тест' : 'Finish Quiz')}
            <Icon name="ArrowRight" size={20} className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
