import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Language } from '@/lib/translations';

interface PrayerTimesProps {
  language: Language;
}

interface PrayerTime {
  name: string;
  nameAr: string;
  time: string;
  icon: string;
}

export const PrayerTimes = ({ language }: PrayerTimesProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPrayer, setNextPrayer] = useState(0);
  const isRTL = language === 'ar';

  const prayerTimes: PrayerTime[] = [
    { name: 'Фаджр', nameAr: 'الفجر', time: '05:30', icon: 'Sunrise' },
    { name: 'Зухр', nameAr: 'الظهر', time: '13:15', icon: 'Sun' },
    { name: 'Аср', nameAr: 'العصر', time: '16:45', icon: 'CloudSun' },
    { name: 'Магриб', nameAr: 'المغرب', time: '19:20', icon: 'Sunset' },
    { name: 'Иша', nameAr: 'العشاء', time: '21:00', icon: 'Moon' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    let next = 0;
    for (let i = 0; i < prayerTimes.length; i++) {
      const [hours, minutes] = prayerTimes[i].time.split(':').map(Number);
      const prayerMinutes = hours * 60 + minutes;
      
      if (currentMinutes < prayerMinutes) {
        next = i;
        break;
      }
    }
    setNextPrayer(next);

    return () => clearInterval(timer);
  }, []);

  const getTimeUntilNext = () => {
    const now = new Date();
    const [hours, minutes] = prayerTimes[nextPrayer].time.split(':').map(Number);
    const prayerTime = new Date();
    prayerTime.setHours(hours, minutes, 0);

    if (prayerTime < now) {
      prayerTime.setDate(prayerTime.getDate() + 1);
    }

    const diff = prayerTime.getTime() - now.getTime();
    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { hours: hoursLeft, minutes: minutesLeft };
  };

  const timeLeft = getTimeUntilNext();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className={`text-3xl font-bold mb-2 ${isRTL ? 'font-amiri' : ''}`}>
          {language === 'ar' ? 'أوقات الصلاة' : language === 'ru' ? 'Время намазов' : 'Prayer Times'}
        </h2>
        <p className={`text-muted-foreground ${isRTL ? 'font-amiri' : ''}`}>
          {currentTime.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'ru-RU', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-xl">
        <CardHeader>
          <div className="text-center">
            <CardDescription className="text-blue-100 text-lg mb-2">
              {language === 'ar' ? 'الصلاة القادمة' : language === 'ru' ? 'Следующий намаз' : 'Next Prayer'}
            </CardDescription>
            <CardTitle className={`text-4xl mb-2 ${isRTL ? 'font-amiri' : ''}`}>
              {isRTL ? prayerTimes[nextPrayer].nameAr : prayerTimes[nextPrayer].name}
            </CardTitle>
            <div className="text-5xl font-bold mb-4">
              {prayerTimes[nextPrayer].time}
            </div>
            <div className="flex items-center justify-center gap-2 text-xl">
              <Icon name="Clock" size={24} />
              <span>
                {language === 'ar'
                  ? `بعد ${timeLeft.hours > 0 ? `${timeLeft.hours} ساعة و` : ''}${timeLeft.minutes} دقيقة`
                  : language === 'ru'
                  ? `через ${timeLeft.hours > 0 ? `${timeLeft.hours} ч` : ''} ${timeLeft.minutes} мин`
                  : `in ${timeLeft.hours > 0 ? `${timeLeft.hours}h` : ''} ${timeLeft.minutes}m`}
              </span>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4">
        {prayerTimes.map((prayer, idx) => {
          const isPast = idx < nextPrayer;
          const isNext = idx === nextPrayer;

          return (
            <Card
              key={idx}
              className={`transition-all ${
                isNext
                  ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-500 shadow-lg'
                  : isPast
                  ? 'bg-gray-50 opacity-70'
                  : 'hover:shadow-md'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${isNext ? 'bg-emerald-100' : 'bg-gray-100'}`}>
                      <Icon
                        name={prayer.icon as any}
                        size={28}
                        className={isNext ? 'text-emerald-600' : 'text-gray-600'}
                      />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${isRTL ? 'font-amiri' : ''}`}>
                        {isRTL ? prayer.nameAr : prayer.name}
                      </h3>
                      {isNext && (
                        <Badge className="mt-1 bg-emerald-600">
                          {language === 'ar' ? 'القادمة' : language === 'ru' ? 'Следующий' : 'Next'}
                        </Badge>
                      )}
                      {isPast && (
                        <Badge variant="outline" className="mt-1">
                          {language === 'ar' ? 'تمت' : language === 'ru' ? 'Прошёл' : 'Past'}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-3xl font-bold">
                    {prayer.time}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={24} className="text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <p className={`text-sm ${isRTL ? 'font-amiri text-right' : ''}`}>
                {language === 'ar'
                  ? 'ملاحظة: أوقات الصلاة تقريبية لمدينة موسكو. للحصول على أوقات دقيقة، يرجى التحقق من مسجدك المحلي.'
                  : language === 'ru'
                  ? 'Примечание: Время намазов приблизительное для города Москвы. Для точного времени обратитесь к вашей местной мечети.'
                  : 'Note: Prayer times are approximate for Moscow. For exact times, please check with your local mosque.'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
