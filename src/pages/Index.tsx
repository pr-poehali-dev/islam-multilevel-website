import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'basics',
      title: 'Основы веры',
      icon: 'BookOpen',
      description: 'Шесть столпов имана и пять столпов Ислама',
      color: 'bg-emerald-50 hover:bg-emerald-100',
      iconColor: 'text-emerald-600',
      content: [
        { title: 'Шахада', subtitle: 'Свидетельство веры', audio: true },
        { title: 'Таухид', subtitle: 'Единобожие в Исламе', audio: false },
        { title: 'Столпы Ислама', subtitle: 'Пять основных обязанностей', audio: true }
      ]
    },
    {
      id: 'history',
      title: 'История Ислама',
      icon: 'Landmark',
      description: 'От пророка Мухаммада ﷺ до наших дней',
      color: 'bg-amber-50 hover:bg-amber-100',
      iconColor: 'text-amber-600',
      content: [
        { title: 'Жизнь Пророка ﷺ', subtitle: 'Сира Мухаммада', audio: true },
        { title: 'Праведные халифы', subtitle: 'Первые правители', audio: false },
        { title: 'Исламские империи', subtitle: 'Развитие цивилизации', audio: false }
      ]
    },
    {
      id: 'quran',
      title: 'Изучение Корана',
      icon: 'Book',
      description: 'Священная книга с толкованиями',
      color: 'bg-green-50 hover:bg-green-100',
      iconColor: 'text-green-600',
      content: [
        { title: 'Аль-Фатиха', subtitle: 'Открывающая сура', audio: true },
        { title: 'Короткие суры', subtitle: 'Джуз Амма', audio: true },
        { title: 'Тафсир', subtitle: 'Толкование Корана', audio: false }
      ]
    },
    {
      id: 'fiqh',
      title: 'Фикх',
      icon: 'Scale',
      description: 'Исламское право и законы',
      color: 'bg-blue-50 hover:bg-blue-100',
      iconColor: 'text-blue-600',
      content: [
        { title: 'Ибадат', subtitle: 'Поклонение', audio: false },
        { title: 'Муамалат', subtitle: 'Взаимоотношения', audio: false },
        { title: 'Четыре мазхаба', subtitle: 'Школы права', audio: false }
      ]
    },
    {
      id: 'salah',
      title: 'Намаз и молитвы',
      icon: 'HandHeart',
      description: 'Руководство по совершению молитв',
      color: 'bg-purple-50 hover:bg-purple-100',
      iconColor: 'text-purple-600',
      content: [
        { title: 'Как совершать намаз', subtitle: 'Пошаговое руководство', audio: true },
        { title: 'Дуа', subtitle: 'Повседневные молитвы', audio: true },
        { title: 'Азкар', subtitle: 'Поминания Аллаха', audio: true }
      ]
    },
    {
      id: 'hadith',
      title: 'Хадисы пророка',
      icon: 'ScrollText',
      description: 'Изречения и деяния пророка ﷺ',
      color: 'bg-rose-50 hover:bg-rose-100',
      iconColor: 'text-rose-600',
      content: [
        { title: 'Сахих аль-Бухари', subtitle: 'Достоверные хадисы', audio: false },
        { title: 'Сахих Муслим', subtitle: 'Собрание хадисов', audio: false },
        { title: '40 хадисов ан-Навави', subtitle: 'Основы религии', audio: true }
      ]
    },
    {
      id: 'calendar',
      title: 'Исламский календарь',
      icon: 'Calendar',
      description: 'Праздники и важные даты',
      color: 'bg-teal-50 hover:bg-teal-100',
      iconColor: 'text-teal-600',
      content: [
        { title: 'Рамадан', subtitle: 'Месяц поста', audio: false },
        { title: 'Ид аль-Фитр', subtitle: 'Праздник разговения', audio: false },
        { title: 'Ид аль-Адха', subtitle: 'Праздник жертвоприношения', audio: false }
      ]
    },
    {
      id: 'library',
      title: 'Библиотека материалов',
      icon: 'Library',
      description: 'Книги, статьи и лекции',
      color: 'bg-indigo-50 hover:bg-indigo-100',
      iconColor: 'text-indigo-600',
      content: [
        { title: 'Книги по исламу', subtitle: 'Классические и современные', audio: false },
        { title: 'Видеолекции', subtitle: 'Уроки учёных', audio: false },
        { title: 'Статьи', subtitle: 'Тематические материалы', audio: false }
      ]
    },
    {
      id: 'qa',
      title: 'Вопросы и ответы',
      icon: 'MessageCircleQuestion',
      description: 'Ответы на частые вопросы',
      color: 'bg-orange-50 hover:bg-orange-100',
      iconColor: 'text-orange-600',
      content: [
        { title: 'Вопросы акиды', subtitle: 'О вере и убеждениях', audio: false },
        { title: 'Вопросы фикха', subtitle: 'О практике религии', audio: false },
        { title: 'Современные вопросы', subtitle: 'Ислам в наше время', audio: false }
      ]
    }
  ];

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Sparkles" className="text-emerald-600" size={40} />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Изучение Ислама
            </h1>
            <Icon name="Sparkles" className="text-amber-600" size={40} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Образовательный портал для изучения основ Ислама с аудио материалами и правильным произношением
          </p>
          <Badge variant="secondary" className="mt-4 px-4 py-2 text-base">
            <Icon name="Volume2" size={16} className="mr-2" />
            Аудио произношение доступно
          </Badge>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => (
            <Card 
              key={section.id} 
              className={`${section.color} border-2 border-transparent hover:border-primary transition-all duration-300 cursor-pointer animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedSection(section.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-white ${section.iconColor}`}>
                    <Icon name={section.icon as any} size={28} />
                  </div>
                  {section.content.some(c => c.audio) && (
                    <Badge variant="outline" className="gap-1">
                      <Icon name="Headphones" size={14} />
                      Аудио
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl mt-4">{section.title}</CardTitle>
                <CardDescription className="text-base">{section.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {selectedSection && (
          <Card className="mb-12 animate-fade-in border-2 border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name={sections.find(s => s.id === selectedSection)?.icon as any} size={32} className="text-primary" />
                  {sections.find(s => s.id === selectedSection)?.title}
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setSelectedSection(null)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {sections.find(s => s.id === selectedSection)?.content.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-lg hover:text-primary">
                      <div className="flex items-center gap-3">
                        {item.audio && <Icon name="Play" size={18} className="text-emerald-600" />}
                        <div className="text-left">
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-4 bg-muted/50 rounded-lg space-y-4">
                        <p className="text-muted-foreground">
                          Здесь будет размещён подробный контент по теме "{item.title}". 
                          Материал включает теоретическую часть, примеры и практические советы.
                        </p>
                        {item.audio && (
                          <div className="bg-white p-4 rounded-lg border-2 border-primary/20">
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-semibold flex items-center gap-2">
                                <Icon name="Volume2" size={18} className="text-primary" />
                                Аудио произношение
                              </span>
                              <Badge>Арабский + Русский</Badge>
                            </div>
                            <div className="flex items-center gap-4">
                              <Button 
                                size="lg" 
                                className="rounded-full w-12 h-12 p-0"
                                onClick={toggleAudio}
                              >
                                <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
                              </Button>
                              <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                                <div className={`bg-primary h-full transition-all duration-1000 ${isPlaying ? 'w-3/4' : 'w-0'}`} />
                              </div>
                              <span className="text-sm text-muted-foreground">2:34</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        )}

        <Card className="bg-gradient-to-r from-emerald-600 to-amber-600 text-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="BookMarked" size={28} />
                  Начните своё путешествие
                </h3>
                <p className="text-white/90 text-lg">
                  Изучайте Ислам поэтапно с аудио материалами и подробными объяснениями
                </p>
              </div>
              <Button size="lg" variant="secondary" className="text-emerald-700 font-semibold">
                <Icon name="Play" size={18} className="mr-2" />
                Начать обучение
              </Button>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Heart" size={16} className="text-rose-500" />
            <p>Да благословит Аллах ваше изучение</p>
          </div>
          <p className="text-sm">Образовательный портал © 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
