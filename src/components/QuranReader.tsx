import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { getAllSurahs, Surah, Ayah } from '@/lib/quran-data';
import { Language } from '@/lib/translations';

interface QuranReaderProps {
  language: Language;
}

export const QuranReader = ({ language }: QuranReaderProps) => {
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [playingAyah, setPlayingAyah] = useState<number | null>(null);
  const surahs = getAllSurahs();

  const isRTL = language === 'ar';

  const handlePlayAyah = (ayahNumber: number) => {
    if (playingAyah === ayahNumber) {
      setPlayingAyah(null);
    } else {
      setPlayingAyah(ayahNumber);
      setTimeout(() => setPlayingAyah(null), 3000);
    }
  };

  const getSurahTitle = (surah: Surah) => {
    if (language === 'ar') return surah.arabicName;
    if (language === 'en') return surah.englishName;
    return surah.name;
  };

  const getRevelationType = (type: string) => {
    if (language === 'ar') return type === 'Meccan' ? 'مكية' : 'مدنية';
    if (language === 'en') return type;
    return type === 'Meccan' ? 'Мекканская' : 'Мединская';
  };

  if (selectedSurah) {
    return (
      <Card className="animate-fade-in border-2 border-primary">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="secondary" className={isRTL ? 'font-amiri' : ''}>
                  {language === 'ru' ? 'Сура' : language === 'ar' ? 'سورة' : 'Surah'} {selectedSurah.number}
                </Badge>
                <Badge variant="outline" className={isRTL ? 'font-amiri' : ''}>
                  {getRevelationType(selectedSurah.revelationType)}
                </Badge>
                <Badge variant="outline" className={isRTL ? 'font-amiri' : ''}>
                  {selectedSurah.numberOfAyahs} {language === 'ru' ? 'аятов' : language === 'ar' ? 'آية' : 'verses'}
                </Badge>
              </div>
              <CardTitle className="text-3xl">
                <div className="font-amiri text-emerald-600 mb-1">{selectedSurah.arabicName}</div>
                <div className={`text-2xl ${isRTL ? 'font-amiri' : ''}`}>{getSurahTitle(selectedSurah)}</div>
              </CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setSelectedSurah(null)}>
              <Icon name="X" size={24} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-emerald-50 to-amber-50 p-6 rounded-lg mb-6 text-center">
            <p className="font-amiri text-2xl text-emerald-700 leading-relaxed">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {language === 'ru' ? 'Во имя Аллаха, Милостивого, Милосердного' : 
               language === 'ar' ? 'بسم الله الرحمن الرحيم' : 
               'In the name of Allah, the Entirely Merciful, the Especially Merciful'}
            </p>
          </div>

          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-6">
              {selectedSurah.ayahs.map((ayah: Ayah) => (
                <div key={ayah.number} className="group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{ayah.number}</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="font-amiri text-2xl leading-loose text-right" dir="rtl">
                        {ayah.arabic}
                      </div>
                      <Separator />
                      <div className={`text-base text-muted-foreground ${isRTL ? 'font-amiri text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                        {language === 'ar' ? ayah.arabic : language === 'en' ? ayah.translation.en : ayah.translation.ru}
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handlePlayAyah(ayah.number)}
                          className="gap-2"
                        >
                          <Icon name={playingAyah === ayah.number ? "Pause" : "Play"} size={16} />
                          {language === 'ru' ? 'Прослушать' : language === 'ar' ? 'استمع' : 'Listen'}
                        </Button>
                      </div>
                    </div>
                  </div>
                  {ayah.number < selectedSurah.numberOfAyahs && (
                    <Separator className="my-2" />
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <CardContent className="p-6">
          <div className="text-center">
            <Icon name="Book" size={48} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">
              {language === 'ru' ? 'Священный Коран' : 
               language === 'ar' ? 'القرآن الكريم' : 
               'The Holy Quran'}
            </h3>
            <p className="text-white/90">
              {language === 'ru' ? '114 сур с арабским текстом и переводом' : 
               language === 'ar' ? '114 سورة مع النص العربي والترجمة' : 
               '114 chapters with Arabic text and translation'}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {surahs.map((surah) => (
          <Card
            key={surah.number}
            className="cursor-pointer hover:border-primary transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-emerald-50"
            onClick={() => setSelectedSurah(surah)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {surah.number}
                  </div>
                  <div>
                    <div className={`font-semibold ${isRTL ? 'font-amiri' : ''}`}>
                      {getSurahTitle(surah)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {surah.numberOfAyahs} {language === 'ru' ? 'аятов' : language === 'ar' ? 'آية' : 'verses'}
                    </div>
                  </div>
                </div>
                <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
              </div>
              <div className="font-amiri text-xl text-emerald-600 text-right">
                {surah.arabicName}
              </div>
              <div className="mt-2">
                <Badge variant="secondary" className="text-xs">
                  {getRevelationType(surah.revelationType)}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
