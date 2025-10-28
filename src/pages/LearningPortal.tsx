import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Language } from '@/lib/translations';
import { courses } from '@/data/courses';
import { useProgress } from '@/hooks/useProgress';
import { CourseCard } from '@/components/CourseCard';
import { LessonView } from '@/components/LessonView';
import { HadithLibrary } from '@/components/HadithLibrary';
import { PrayerGuide } from '@/components/PrayerGuide';
import { PrayerTimes } from '@/components/PrayerTimes';
import { QuranReader } from '@/components/QuranReader';
import { Course, Lesson } from '@/types/learning';

const LearningPortal = () => {
  const [language, setLanguage] = useState<Language>('ru');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const isRTL = language === 'ar';

  const {
    progress,
    completeLesson,
    saveQuizScore,
    getCourseProgress,
    getOverallStats,
    unlockedAchievements,
    currentStreak
  } = useProgress();

  const stats = getOverallStats();

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setActiveTab('course-detail');
  };

  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  const handleLessonComplete = () => {
    if (selectedCourse && selectedLesson) {
      completeLesson(selectedCourse.id, selectedLesson.id);
      setSelectedLesson(null);
      setActiveTab('course-detail');
    }
  };

  const handleQuizComplete = (score: number) => {
    if (selectedCourse && selectedLesson) {
      saveQuizScore(selectedCourse.id, selectedLesson.id, score);
    }
  };

  const getCourseProgressPercentage = (courseId: string) => {
    const courseProgress = getCourseProgress(courseId);
    if (!courseProgress) return 0;

    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;

    return Math.round((courseProgress.completedLessons.length / course.lessons.length) * 100);
  };

  if (selectedLesson && selectedCourse) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end mb-4">
            <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ru">Русский</SelectItem>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <LessonView
            lesson={selectedLesson}
            language={language}
            onComplete={handleLessonComplete}
            onBack={() => setSelectedLesson(null)}
            onQuizComplete={handleQuizComplete}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg">
                <Icon name="GraduationCap" size={32} className="text-white" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${isRTL ? 'font-amiri' : ''}`}>
                  {language === 'ar' ? 'بوابة تعلم الإسلام' : language === 'ru' ? 'Портал изучения Ислама' : 'Islamic Learning Portal'}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-orange-100 px-3 py-2 rounded-lg">
                <Icon name="Flame" size={20} className="text-orange-600" />
                <span className="font-bold text-orange-900">{currentStreak}</span>
              </div>
              
              <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ru">Русский</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Icon name="LayoutDashboard" size={18} />
              <span className={isRTL ? 'font-amiri' : ''}>
                {language === 'ar' ? 'لوحة التحكم' : language === 'ru' ? 'Панель' : 'Dashboard'}
              </span>
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <Icon name="BookOpen" size={18} />
              <span className={isRTL ? 'font-amiri' : ''}>
                {language === 'ar' ? 'الدورات' : language === 'ru' ? 'Курсы' : 'Courses'}
              </span>
            </TabsTrigger>
            <TabsTrigger value="quran" className="flex items-center gap-2">
              <Icon name="Book" size={18} />
              <span className={isRTL ? 'font-amiri' : ''}>
                {language === 'ar' ? 'القرآن' : language === 'ru' ? 'Коран' : 'Quran'}
              </span>
            </TabsTrigger>
            <TabsTrigger value="hadith" className="flex items-center gap-2">
              <Icon name="ScrollText" size={18} />
              <span className={isRTL ? 'font-amiri' : ''}>
                {language === 'ar' ? 'الأحاديث' : language === 'ru' ? 'Хадисы' : 'Hadith'}
              </span>
            </TabsTrigger>
            <TabsTrigger value="prayers" className="flex items-center gap-2">
              <Icon name="Hand" size={18} />
              <span className={isRTL ? 'font-amiri' : ''}>
                {language === 'ar' ? 'الأدعية' : language === 'ru' ? 'Дуа' : 'Duas'}
              </span>
            </TabsTrigger>
            <TabsTrigger value="prayer-times" className="flex items-center gap-2">
              <Icon name="Clock" size={18} />
              <span className={isRTL ? 'font-amiri' : ''}>
                {language === 'ar' ? 'الأوقات' : language === 'ru' ? 'Намаз' : 'Times'}
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>{language === 'ar' ? 'الدروس المكتملة' : language === 'ru' ? 'Завершено уроков' : 'Lessons Completed'}</CardDescription>
                  <CardTitle className="text-3xl">{stats.totalLessons}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Icon name="BookCheck" size={32} className="text-emerald-600" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>{language === 'ar' ? 'الدورات' : language === 'ru' ? 'Курсов' : 'Courses'}</CardDescription>
                  <CardTitle className="text-3xl">{stats.totalCourses}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Icon name="GraduationCap" size={32} className="text-blue-600" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>{language === 'ar' ? 'متوسط النتائج' : language === 'ru' ? 'Средний балл' : 'Avg Score'}</CardDescription>
                  <CardTitle className="text-3xl">{stats.averageQuizScore}%</CardTitle>
                </CardHeader>
                <CardContent>
                  <Icon name="Target" size={32} className="text-purple-600" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>{language === 'ar' ? 'الإنجازات' : language === 'ru' ? 'Достижения' : 'Achievements'}</CardDescription>
                  <CardTitle className="text-3xl">{stats.totalAchievements}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Icon name="Trophy" size={32} className="text-amber-600" />
                </CardContent>
              </Card>
            </div>

            {unlockedAchievements.length > 0 && (
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'font-amiri' : ''}`}>
                  {language === 'ar' ? 'الإنجازات الأخيرة' : language === 'ru' ? 'Последние достижения' : 'Recent Achievements'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {unlockedAchievements.slice(-3).map(achievement => (
                    <Card key={achievement.id} className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-amber-100 rounded-full">
                            <Icon name={achievement.icon as any} size={32} className="text-amber-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-bold text-lg ${isRTL ? 'font-amiri' : ''}`}>
                              {isRTL && achievement.titleAr ? achievement.titleAr : achievement.title}
                            </h4>
                            <p className={`text-sm text-muted-foreground ${isRTL ? 'font-amiri' : ''}`}>
                              {isRTL && achievement.descriptionAr ? achievement.descriptionAr : achievement.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'font-amiri' : ''}`}>
                {language === 'ar' ? 'تابع التعلم' : language === 'ru' ? 'Продолжить обучение' : 'Continue Learning'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.slice(0, 3).map(course => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    progress={getCourseProgressPercentage(course.id)}
                    language={language}
                    onClick={() => handleCourseSelect(course)}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            {selectedCourse && activeTab === 'course-detail' ? (
              <div>
                <Button variant="ghost" onClick={() => setSelectedCourse(null)} className="mb-4">
                  <Icon name="ArrowLeft" size={20} className={isRTL ? 'rotate-180' : ''} />
                  {language === 'ar' ? 'رجوع' : language === 'ru' ? 'Назад' : 'Back'}
                </Button>

                <Card className={`${selectedCourse.color} border-2 border-primary mb-6`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                          <Icon name={selectedCourse.icon as any} size={40} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className={`text-3xl ${isRTL ? 'font-amiri text-right' : ''}`}>
                            {isRTL && selectedCourse.titleAr ? selectedCourse.titleAr : selectedCourse.title}
                          </CardTitle>
                          <CardDescription className={`text-lg mt-2 ${isRTL ? 'font-amiri text-right' : ''}`}>
                            {isRTL && selectedCourse.descriptionAr ? selectedCourse.descriptionAr : selectedCourse.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={20} />
                        <span>{selectedCourse.estimatedTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="BookOpen" size={20} />
                        <span>{selectedCourse.lessons.length} {language === 'ar' ? 'دروس' : language === 'ru' ? 'уроков' : 'lessons'}</span>
                      </div>
                      {getCourseProgressPercentage(selectedCourse.id) > 0 && (
                        <div className="flex-1">
                          <Progress value={getCourseProgressPercentage(selectedCourse.id)} className="h-3" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className={`text-2xl font-bold ${isRTL ? 'font-amiri' : ''}`}>
                    {language === 'ar' ? 'الدروس' : language === 'ru' ? 'Уроки' : 'Lessons'}
                  </h3>
                  {selectedCourse.lessons.map((lesson, idx) => {
                    const isCompleted = getCourseProgress(selectedCourse.id)?.completedLessons.includes(lesson.id);
                    return (
                      <Card
                        key={lesson.id}
                        className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-primary"
                        onClick={() => handleLessonSelect(lesson)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                              <div className={`p-3 rounded-lg ${isCompleted ? 'bg-green-100' : 'bg-gray-100'}`}>
                                {isCompleted ? (
                                  <Icon name="CheckCircle" size={24} className="text-green-600" />
                                ) : (
                                  <span className="text-lg font-bold text-gray-600">{idx + 1}</span>
                                )}
                              </div>
                              <div className="flex-1">
                                <h4 className={`text-xl font-bold ${isRTL ? 'font-amiri' : ''}`}>
                                  {isRTL && lesson.titleAr ? lesson.titleAr : lesson.title}
                                </h4>
                                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                  <Icon name="Clock" size={16} />
                                  {lesson.duration}
                                </p>
                              </div>
                            </div>
                            <Icon name="ChevronRight" size={24} className={`text-muted-foreground ${isRTL ? 'rotate-180' : ''}`} />
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${isRTL ? 'font-amiri' : ''}`}>
                  {language === 'ar' ? 'جميع الدورات' : language === 'ru' ? 'Все курсы' : 'All Courses'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map(course => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      progress={getCourseProgressPercentage(course.id)}
                      language={language}
                      onClick={() => handleCourseSelect(course)}
                    />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="quran">
            <QuranReader language={language} />
          </TabsContent>

          <TabsContent value="hadith">
            <HadithLibrary language={language} />
          </TabsContent>

          <TabsContent value="prayers">
            <PrayerGuide language={language} />
          </TabsContent>

          <TabsContent value="prayer-times">
            <PrayerTimes language={language} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default LearningPortal;
