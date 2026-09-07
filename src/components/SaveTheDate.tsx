import React, { useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { trackEvent } from '../utils/analytics';

import { generateEthiopianCalendarDays } from '../utils/ethiopianCalendar';

// Dynamic Calendar Days builder
const generateCalendarDays = (targetDate: Date) => {
  const year = targetDate.getUTCFullYear();
  const month = targetDate.getUTCMonth();
  const dateOfDay = targetDate.getUTCDate();

  // Day of week of the 1st of the month (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const firstDayOfMonth = new Date(Date.UTC(year, month, 1)).getUTCDay();

  // Total days in the month
  const totalDays = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

  const daysList: Array<{ day: number | null; isWedding?: boolean }> = [];

  // Add empty slots for the start of the week
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysList.push({ day: null });
  }

  // Add the days of the month
  for (let d = 1; d <= totalDays; d++) {
    daysList.push({
      day: d,
      isWedding: d === dateOfDay
    });
  }

  return daysList;
};

export default function SaveTheDate({ bgClass }: { bgClass?: string; key?: React.Key }) {
  const { config, language, groom, bride, t } = useLanguage();
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!config.sections?.saveTheDate) return null;

  const targetDate = new Date(config.countdownTarget || "2026-09-20T16:00:00Z");
  const isAmharic = language === 'am';

  const ethCalendar = generateEthiopianCalendarDays(targetDate);
  const dayNum = isAmharic ? ethCalendar.ethDate.day : targetDate.getUTCDate();

  // English month name (e.g., "September 2026")
  const englishMonthYear = targetDate.toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

  // Amharic month name mapped to Ethiopian Month & Year
  const etMonths = t('calendar.monthsEth', 'መስከረም,ጥቅምት,ኅዳር,ታኅሣሥ,ጥር,የካቲት,መጋቢት,ሚያዝያ,ግንቦት,ሰኔ,ሐምሌ,ነሐሴ,ጳጉሜ').split(',');
  const amharicMonthName = etMonths[ethCalendar.ethDate.month - 1] || ethCalendar.monthNameAm;
  const amharicMonthYear = `${amharicMonthName} ${ethCalendar.ethDate.year} ዓ.ም`;

  const CALENDAR_DAYS = isAmharic ? ethCalendar.daysList : generateCalendarDays(targetDate);

  const weekdays = t('calendar.weekdays', 'Su,Mo,Tu,We,Th,Fr,Sa').split(',');

  const handleAddToCalendar = () => {
    trackEvent('add_to_calendar', 'engagement', `${groom} & ${bride} Wedding`);
    const formatToICS = (d: Date) => {
      const pad = (n: number) => n.toString().padStart(2, '0');
      return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
    };

    const startStr = formatToICS(targetDate);
    const endDate = new Date(targetDate.getTime() + 10 * 60 * 60 * 1000); // 10 hours later
    const endStr = formatToICS(endDate);

    const calendarEvent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      'CLASS:PUBLIC',
      `DESCRIPTION:${groom} & ${bride} Wedding Celebration inside ${config.venueName?.[language] || 'Wedding Hall'}.`,
      `DTSTART:${startStr}`,
      `DTEND:${endStr}`,
      `LOCATION:${config.venueName?.[language] || 'Wedding Hall'}`,
      `SUMMARY:${groom} & ${bride} Wedding Celebration`,
      'TRANSP:OPAQUE',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([calendarEvent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${groom}_${bride}_Wedding_Invite.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="calendar" className={`py-20 ${bgClass || 'bg-brand-cream-dark'} border-y border-[#E5E2D9]`}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-6 text-center lg:text-left"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-accent font-bold block animate-fade-in">
            {config.sectionConfigs?.savethedate?.title?.[language] || t('calendar.title', 'The Invitation')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-primary font-light tracking-wide leading-tight whitespace-pre-line">
            {config.sectionConfigs?.savethedate?.subtitle?.[language] || t('calendar.defaultSubtitle', 'Reserve the Twentieth\nof September')}
          </h2>
          <div className="h-[1px] w-16 bg-[#E5E2D9] mx-auto lg:mx-0 opacity-80" />

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.button
              onClick={handleAddToCalendar}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-brand-primary text-white hover:bg-brand-accent px-6 py-3 rounded-full font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>{t('calendar.addedSuccess', 'Added successfully!')}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-white" />
                  <span>{t('calendar.addToCalendar', 'Add to Calendar')}</span>
                </>
              )}
            </motion.button>
            <span className="text-[11px] text-brand-primary/50 tracking-wider font-sans uppercase">
              {t('calendar.downloadIcsTip', '• Downloads .ics file')}
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ boxShadow: "0 20px 40px rgba(154, 149, 135, 0.12)" }}
          className="lg:col-span-7 h-[380px] md:h-[450px] w-full bg-white p-3 rounded-3xl shadow-md border border-[#E5E2D9] overflow-hidden transition-all duration-500"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden relative bg-white p-6 md:p-8 flex flex-col justify-between border border-[#E5E2D9]/40">
            <div className="absolute top-2 right-4 text-[#E5E2D9]/40 font-serif italic text-7xl select-none pointer-events-none">
              {dayNum}
            </div>
            
            <div className="text-center pb-2">
              <h3 className="font-serif text-lg text-brand-primary font-medium">
                {language === 'am' ? amharicMonthYear : englishMonthYear}
              </h3>
              <p className="font-sans text-[10px] text-brand-accent uppercase tracking-wider font-bold">
                {groom} &amp; {bride} {t('calendar.weddingOf', 'Wedding')}
              </p>
            </div>

            <div className="grid grid-cols-7 gap-y-2 text-center border-b border-[#E5E2D9] pb-2">
              {weekdays.map((day) => (
                <span key={day} className="font-sans text-xs text-brand-primary/50 font-bold">
                  {day}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-2 pt-2 text-center">
              {CALENDAR_DAYS.map((item, index) => {
                if (item.day === null) {
                  return <div key={`empty-${index}`} />;
                }

                if (item.isWedding) {
                  return (
                    <div key={`day-${index}`} className="flex justify-center items-center py-0.5">
                      <motion.div 
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 rounded-full bg-brand-accent text-white flex flex-col justify-center items-center shadow-md relative cursor-help" 
                        title="The big day!"
                      >
                        <span className="text-xs font-bold font-sans">{dayNum}</span>
                        <motion.span 
                          animate={{ scale: [1, 1.25, 1] }}
                          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                          className="absolute -bottom-1 text-[8px] text-white"
                        >
                          ❤
                        </motion.span>
                      </motion.div>
                    </div>
                  );
                }

                return (
                  <div key={`day-${index}`} className="flex justify-center items-center py-0.5">
                    <motion.span 
                      whileHover={{ scale: 1.25, color: "var(--color-brand-accent)" }}
                      className={`text-xs font-sans select-none cursor-default transition-colors ${item.day === dayNum ? 'text-brand-accent font-bold' : 'text-brand-primary/80'}`}
                    >
                      {item.day}
                    </motion.span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-[#E5E2D9] text-center">
              <p className="font-serif italic text-xs text-brand-accent">
                {t('calendar.sundayCelebration', 'Sunday—The celebration begins.')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
