import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getTranslation, Language } from '@/lib/translations';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('ru');

  const t = getTranslation(language);
  const isRTL = language === 'ar';

  const sections = [
    {
      id: 'basics',
      icon: 'BookOpen',
      color: 'bg-emerald-50 hover:bg-emerald-100',
      iconColor: 'text-emerald-600',
      audioAvailable: true
    },
    {
      id: 'history',
      icon: 'Landmark',
      color: 'bg-amber-50 hover:bg-amber-100',
      iconColor: 'text-amber-600',
      audioAvailable: true
    },
    {
      id: 'quran',
      icon: 'Book',
      color: 'bg-green-50 hover:bg-green-100',
      iconColor: 'text-green-600',
      audioAvailable: true
    },
    {
      id: 'fiqh',
      icon: 'Scale',
      color: 'bg-blue-50 hover:bg-blue-100',
      iconColor: 'text-blue-600',
      audioAvailable: false
    },
    {
      id: 'salah',
      icon: 'HandHeart',
      color: 'bg-purple-50 hover:bg-purple-100',
      iconColor: 'text-purple-600',
      audioAvailable: true
    },
    {
      id: 'hadith',
      icon: 'ScrollText',
      color: 'bg-rose-50 hover:bg-rose-100',
      iconColor: 'text-rose-600',
      audioAvailable: true
    },
    {
      id: 'calendar',
      icon: 'Calendar',
      color: 'bg-teal-50 hover:bg-teal-100',
      iconColor: 'text-teal-600',
      audioAvailable: false
    },
    {
      id: 'library',
      icon: 'Library',
      color: 'bg-indigo-50 hover:bg-indigo-100',
      iconColor: 'text-indigo-600',
      audioAvailable: false
    },
    {
      id: 'qa',
      icon: 'MessageCircleQuestion',
      color: 'bg-orange-50 hover:bg-orange-100',
      iconColor: 'text-orange-600',
      audioAvailable: false
    }
  ];

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6 animate-fade-in">
          <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ru">
                <div className="flex items-center gap-2">
                  <span>🇷🇺</span>
                  <span>Русский</span>
                </div>
              </SelectItem>
              <SelectItem value="ar">
                <div className="flex items-center gap-2">
                  <span>🇸🇦</span>
                  <span>العربية</span>
                </div>
              </SelectItem>
              <SelectItem value="en">
                <div className="flex items-center gap-2">
                  <span>🇬🇧</span>
                  <span>English</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <header className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Sparkles" className="text-emerald-600" size={40} />
            <h1 className={`text-5xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent ${isRTL ? 'font-amiri' : ''}`}>
              {t.title}
            </h1>
            <Icon name="Sparkles" className="text-amber-600" size={40} />
          </div>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'font-amiri' : ''}`}>
            {t.subtitle}
          </p>
          <Badge variant="secondary" className="mt-4 px-4 py-2 text-base">
            <Icon name="Volume2" size={16} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t.audioBadge}
          </Badge>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => {
            const sectionData = t.sections[section.id as keyof typeof t.sections];
            return (
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
                    {section.audioAvailable && (
                      <Badge variant="outline" className="gap-1">
                        <Icon name="Headphones" size={14} />
                        {t.audioLabel}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className={`text-xl mt-4 ${isRTL ? 'font-amiri' : ''}`}>{sectionData.title}</CardTitle>
                  <CardDescription className={`text-base ${isRTL ? 'font-amiri' : ''}`}>{sectionData.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {selectedSection && (
          <Card className="mb-12 animate-fade-in border-2 border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className={`text-2xl flex items-center gap-3 ${isRTL ? 'font-amiri' : ''}`}>
                  <Icon name={sections.find(s => s.id === selectedSection)?.icon as any} size={32} className="text-primary" />
                  {t.sections[selectedSection as keyof typeof t.sections].title}
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setSelectedSection(null)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {t.sections[selectedSection as keyof typeof t.sections].content.map((item, idx) => {
                  const hasAudio = [0, 2].includes(idx) && sections.find(s => s.id === selectedSection)?.audioAvailable;
                  return (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-lg hover:text-primary">
                        <div className="flex items-center gap-3">
                          {hasAudio && <Icon name="Play" size={18} className="text-emerald-600" />}
                          <div className={isRTL ? 'text-right' : 'text-left'}>
                            <div className={`font-semibold ${isRTL ? 'font-amiri' : ''}`}>{item.title}</div>
                            <div className={`text-sm text-muted-foreground ${isRTL ? 'font-amiri' : ''}`}>{item.subtitle}</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 bg-muted/50 rounded-lg space-y-4">
                          <p className={`text-muted-foreground ${isRTL ? 'font-amiri' : ''}`}>
                            {t.contentPlaceholder} "{item.title}". {t.contentDescription}
                          </p>
                          {hasAudio && (
                            <div className="bg-white p-4 rounded-lg border-2 border-primary/20">
                              <div className="flex items-center justify-between mb-3">
                                <span className={`font-semibold flex items-center gap-2 ${isRTL ? 'font-amiri' : ''}`}>
                                  <Icon name="Volume2" size={18} className="text-primary" />
                                  {t.audioPronunciation}
                                </span>
                                <Badge className={isRTL ? 'font-amiri' : ''}>{t.languages}</Badge>
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
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>
        )}

        <Card className="bg-gradient-to-r from-emerald-600 to-amber-600 text-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className={`text-2xl font-bold mb-2 flex items-center gap-2 justify-center md:justify-start ${isRTL ? 'font-amiri md:flex-row-reverse' : ''}`}>
                  <Icon name="BookMarked" size={28} />
                  {t.ctaTitle}
                </h3>
                <p className={`text-white/90 text-lg ${isRTL ? 'font-amiri' : ''}`}>
                  {t.ctaSubtitle}
                </p>
              </div>
              <Button size="lg" variant="secondary" className="text-emerald-700 font-semibold">
                <Icon name="Play" size={18} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span className={isRTL ? 'font-amiri' : ''}>{t.ctaButton}</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Heart" size={16} className="text-rose-500" />
            <p className={isRTL ? 'font-amiri' : ''}>{t.footer}</p>
          </div>
          <p className={`text-sm ${isRTL ? 'font-amiri' : ''}`}>{t.copyright}</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
