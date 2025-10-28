import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Language } from '@/lib/translations';
import { hadiths, hadithCollections, Hadith } from '@/data/hadith';

interface HadithLibraryProps {
  language: Language;
}

export const HadithLibrary = ({ language }: HadithLibraryProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [selectedHadith, setSelectedHadith] = useState<Hadith | null>(null);
  const isRTL = language === 'ar';

  const filteredHadiths = hadiths.filter(hadith => {
    const matchesSearch = 
      hadith.arabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadith.russian.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadith.english.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCollection = selectedCollection === 'all' || hadith.collection === selectedCollection;
    
    return matchesSearch && matchesCollection;
  });

  const gradeColors = {
    sahih: 'bg-green-100 text-green-800 border-green-300',
    hasan: 'bg-blue-100 text-blue-800 border-blue-300',
    daif: 'bg-gray-100 text-gray-800 border-gray-300'
  };

  const gradeLabels = {
    sahih: { ru: 'Достоверный', ar: 'صحيح', en: 'Sahih' },
    hasan: { ru: 'Хороший', ar: 'حسن', en: 'Hasan' },
    daif: { ru: 'Слабый', ar: 'ضعيف', en: 'Daif' }
  };

  if (selectedHadith) {
    return (
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" onClick={() => setSelectedHadith(null)} className="mb-4">
          <Icon name="ArrowLeft" size={20} className={isRTL ? 'rotate-180' : ''} />
          {language === 'ar' ? 'رجوع' : language === 'ru' ? 'Назад' : 'Back'}
        </Button>

        <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex gap-2 mb-3">
                  <Badge className={gradeColors[selectedHadith.grade]}>
                    {gradeLabels[selectedHadith.grade][language]}
                  </Badge>
                  <Badge variant="outline">
                    {language === 'ar' ? 'رقم' : language === 'ru' ? '№' : 'No.'} {selectedHadith.number}
                  </Badge>
                </div>
                <CardTitle className={`text-2xl ${isRTL ? 'font-amiri text-right' : ''}`}>
                  {isRTL ? selectedHadith.categoryAr : selectedHadith.category}
                </CardTitle>
                <CardDescription className={`text-lg mt-2 ${isRTL ? 'font-amiri text-right' : ''}`}>
                  {language === 'ar' ? 'رواه' : language === 'ru' ? 'Передал' : 'Narrated by'}: {isRTL ? selectedHadith.narratorAr : selectedHadith.narrator}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="BookOpen" size={20} className="text-amber-600" />
                <span className="font-semibold text-amber-900">
                  {language === 'ar' ? 'النص العربي' : language === 'ru' ? 'Арабский текст' : 'Arabic Text'}
                </span>
              </div>
              <p className="text-2xl font-amiri leading-loose text-right" dir="rtl">
                {selectedHadith.arabic}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Languages" size={20} className="text-blue-600" />
                <span className="font-semibold text-blue-900">
                  {language === 'ar' ? 'الترجمة الروسية' : language === 'ru' ? 'Перевод на русский' : 'Russian Translation'}
                </span>
              </div>
              <p className="text-lg leading-relaxed">
                {selectedHadith.russian}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Languages" size={20} className="text-green-600" />
                <span className="font-semibold text-green-900">
                  {language === 'ar' ? 'الترجمة الإنجليزية' : language === 'ru' ? 'Перевод на английский' : 'English Translation'}
                </span>
              </div>
              <p className="text-lg leading-relaxed">
                {selectedHadith.english}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className={`text-3xl font-bold mb-2 ${isRTL ? 'font-amiri' : ''}`}>
          {language === 'ar' ? 'مكتبة الأحاديث' : language === 'ru' ? 'Библиотека хадисов' : 'Hadith Library'}
        </h2>
        <p className={`text-muted-foreground ${isRTL ? 'font-amiri' : ''}`}>
          {language === 'ar' 
            ? 'أقوال وأفعال النبي محمد ﷺ'
            : language === 'ru'
            ? 'Изречения и деяния пророка Мухаммада ﷺ'
            : 'Sayings and actions of Prophet Muhammad ﷺ'}
        </p>
      </div>

      <Tabs defaultValue="bukhari" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="bukhari" className={isRTL ? 'font-amiri' : ''}>
            {language === 'ar' ? 'البخاري' : 'Бухари'}
          </TabsTrigger>
          <TabsTrigger value="muslim" className={isRTL ? 'font-amiri' : ''}>
            {language === 'ar' ? 'مسلم' : 'Муслим'}
          </TabsTrigger>
          <TabsTrigger value="nawawi40" className={isRTL ? 'font-amiri' : ''}>
            {language === 'ar' ? '40 النووية' : '40 ан-Навави'}
          </TabsTrigger>
        </TabsList>

        {Object.entries(hadithCollections).map(([key, collection]) => (
          <TabsContent key={key} value={key} className="space-y-4">
            <Card className="bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardHeader>
                <CardTitle className={isRTL ? 'font-amiri text-right' : ''}>
                  {isRTL ? collection.titleAr : collection.title}
                </CardTitle>
                <CardDescription className={isRTL ? 'font-amiri text-right' : ''}>
                  {isRTL ? collection.descriptionAr : collection.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder={language === 'ar' ? 'ابحث في الأحاديث...' : language === 'ru' ? 'Поиск хадисов...' : 'Search hadiths...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={isRTL ? 'text-right' : ''}
                />
              </div>
            </div>

            <div className="grid gap-4">
              {hadiths
                .filter(h => h.collection === key && (
                  searchTerm === '' ||
                  h.arabic.includes(searchTerm) ||
                  h.russian.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  h.english.toLowerCase().includes(searchTerm.toLowerCase())
                ))
                .map(hadith => (
                  <Card
                    key={hadith.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary"
                    onClick={() => setSelectedHadith(hadith)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex gap-2 mb-2">
                            <Badge className={gradeColors[hadith.grade]}>
                              {gradeLabels[hadith.grade][language]}
                            </Badge>
                            <Badge variant="outline">
                              {language === 'ar' ? 'رقم' : '№'} {hadith.number}
                            </Badge>
                          </div>
                          <CardTitle className={`text-lg ${isRTL ? 'font-amiri text-right' : ''}`}>
                            {isRTL ? hadith.categoryAr : hadith.category}
                          </CardTitle>
                          <CardDescription className={`mt-1 ${isRTL ? 'font-amiri text-right' : ''}`}>
                            {isRTL ? hadith.narratorAr : hadith.narrator}
                          </CardDescription>
                        </div>
                        <Icon name="ChevronRight" size={24} className={`flex-shrink-0 text-muted-foreground ${isRTL ? 'rotate-180' : ''}`} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2 font-amiri text-right" dir="rtl">
                        {hadith.arabic}
                      </p>
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
