import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Language } from '@/lib/translations';
import { duas, prayerCategories, Dua } from '@/data/prayers';

interface PrayerGuideProps {
  language: Language;
}

export const PrayerGuide = ({ language }: PrayerGuideProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDua, setSelectedDua] = useState<Dua | null>(null);
  const isRTL = language === 'ar';

  if (selectedDua) {
    return (
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" onClick={() => setSelectedDua(null)} className="mb-4">
          <Icon name="ArrowLeft" size={20} className={isRTL ? 'rotate-180' : ''} />
          {language === 'ar' ? 'رجوع' : language === 'ru' ? 'Назад' : 'Back'}
        </Button>

        <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader>
            <CardTitle className={`text-3xl ${isRTL ? 'font-amiri text-right' : ''}`}>
              {isRTL ? selectedDua.titleAr : selectedDua.title}
            </CardTitle>
            <CardDescription className={`text-lg ${isRTL ? 'font-amiri text-right' : ''}`}>
              {isRTL ? selectedDua.occasionAr : selectedDua.occasion}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-emerald-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="BookOpen" size={20} className="text-emerald-600" />
                <span className="font-semibold text-emerald-900">
                  {language === 'ar' ? 'النص العربي' : language === 'ru' ? 'Арабский текст' : 'Arabic Text'}
                </span>
              </div>
              <p className="text-3xl font-amiri leading-loose text-right mb-4" dir="rtl">
                {selectedDua.arabic}
              </p>
              {selectedDua.audioUrl && (
                <div className="flex justify-center">
                  <Button variant="outline" size="lg">
                    <Icon name="Volume2" size={20} className="mr-2" />
                    {language === 'ar' ? 'استمع' : language === 'ru' ? 'Слушать' : 'Listen'}
                  </Button>
                </div>
              )}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Type" size={20} className="text-blue-600" />
                <span className="font-semibold text-blue-900">
                  {language === 'ar' ? 'النقحرة' : language === 'ru' ? 'Транслитерация' : 'Transliteration'}
                </span>
              </div>
              <p className="text-xl italic leading-relaxed">
                {selectedDua.transliteration}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Languages" size={20} className="text-purple-600" />
                <span className="font-semibold text-purple-900">
                  {language === 'ar' ? 'الترجمة' : language === 'ru' ? 'Перевод' : 'Translation'}
                </span>
              </div>
              <p className="text-lg leading-relaxed">
                {language === 'ru' ? selectedDua.russian : selectedDua.english}
              </p>
            </div>

            {selectedDua.reference && (
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2">
                  <Icon name="BookMarked" size={18} className="text-amber-600" />
                  <span className="text-sm font-medium text-amber-900">
                    {language === 'ar' ? 'المصدر' : language === 'ru' ? 'Источник' : 'Reference'}: {selectedDua.reference}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className={`text-3xl font-bold mb-2 ${isRTL ? 'font-amiri' : ''}`}>
          {language === 'ar' ? 'الأدعية والأذكار' : language === 'ru' ? 'Молитвы и дуа' : 'Prayers and Duas'}
        </h2>
        <p className={`text-muted-foreground ${isRTL ? 'font-amiri' : ''}`}>
          {language === 'ar'
            ? 'أدعية يومية وأذكار من السنة النبوية'
            : language === 'ru'
            ? 'Ежедневные молитвы и поминания из Сунны'
            : 'Daily prayers and remembrances from the Sunnah'}
        </p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            placeholder={language === 'ar' ? 'ابحث في الأدعية...' : language === 'ru' ? 'Поиск молитв...' : 'Search prayers...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={isRTL ? 'text-right' : ''}
          />
        </div>
      </div>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          {prayerCategories.map(cat => (
            <TabsTrigger key={cat.id} value={cat.id} className={isRTL ? 'font-amiri text-xs' : 'text-xs'}>
              {isRTL ? cat.titleAr : cat.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {prayerCategories.map(category => (
          <TabsContent key={category.id} value={category.id} className="space-y-4">
            <div className="grid gap-4">
              {duas
                .filter(dua => 
                  dua.category === category.id &&
                  (searchTerm === '' ||
                    dua.arabic.includes(searchTerm) ||
                    dua.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    dua.transliteration.toLowerCase().includes(searchTerm.toLowerCase()))
                )
                .map(dua => (
                  <Card
                    key={dua.id}
                    className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-emerald-500 bg-gradient-to-r from-white to-emerald-50"
                    onClick={() => setSelectedDua(dua)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className={`text-xl mb-2 ${isRTL ? 'font-amiri text-right' : ''}`}>
                            {isRTL ? dua.titleAr : dua.title}
                          </CardTitle>
                          <CardDescription className={`text-base ${isRTL ? 'font-amiri text-right' : ''}`}>
                            {isRTL ? dua.occasionAr : dua.occasion}
                          </CardDescription>
                        </div>
                        <Icon name="ChevronRight" size={24} className={`flex-shrink-0 text-muted-foreground ${isRTL ? 'rotate-180' : ''}`} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-white p-4 rounded-lg border border-emerald-100">
                        <p className="text-xl font-amiri leading-relaxed text-right line-clamp-2" dir="rtl">
                          {dua.arabic}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
