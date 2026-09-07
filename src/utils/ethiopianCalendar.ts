export const ETHIOPIAN_ERA = 1724221;

export const ETHIOPIAN_MONTHS_AM = [
  'መስከረም', 'ጥቅምት', 'ኅዳር', 'ታኅሣሥ', 'ጥር', 'የካቲት',
  'መጋቢት', 'ሚያዝያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜ'
];

export const ETHIOPIAN_MONTHS_EN = [
  'Meskerem', 'Tikimt', 'Hidar', 'Tahsas', 'Tir', 'Yekatit',
  'Megabit', 'Miazia', 'Ginbot', 'Sene', 'Hamle', 'Nehase', 'Pagume'
];

/**
 * Converts a Gregorian Date (year, month 1-12, day) into a Julian Day Number (JDN)
 */
export function gregorianToJdn(year: number, month: number, day: number): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
}

/**
 * Converts a Julian Day Number (JDN) into a Gregorian Date object
 */
export function jdnToGregorian(jdn: number): { year: number; month: number; day: number } {
  const f = jdn + 1401 + Math.floor((Math.floor((4 * jdn + 274274) / 146097) * 3) / 4) - 38;
  const e = 4 * f + 3;
  const g = Math.floor((e % 1461) / 4);
  const h = 5 * g + 2;
  const day = Math.floor((h % 153) / 5) + 1;
  const month = ((Math.floor(h / 153) + 2) % 12) + 1;
  const year = Math.floor(e / 1461) - 4716 + Math.floor((14 - month) / 12);
  return { year, month, day };
}

/**
 * Converts a Julian Day Number (JDN) into an Ethiopian Date { year, month, day }
 */
export function jdnToEthiopian(jdn: number): { year: number; month: number; day: number } {
  const r = (jdn - ETHIOPIAN_ERA) % 1461;
  const n = (r % 365) + 365 * Math.floor(r / 1460);

  const year = 4 * Math.floor((jdn - ETHIOPIAN_ERA) / 1461) + Math.floor(r / 365) - Math.floor(r / 1460) + 1;
  const month = Math.floor(n / 30) + 1;
  const day = (n % 30) + 1;

  return { year, month, day };
}

/**
 * Converts an Ethiopian Date (year, month 1-13, day) into a Julian Day Number (JDN)
 */
export function ethiopianToJdn(year: number, month: number, day: number): number {
  const C = Math.floor((year - 1) / 4);
  const yInC = (year - 1) % 4;
  return ETHIOPIAN_ERA + C * 1461 + yInC * 365 + (month - 1) * 30 + day - 1;
}

/**
 * Converts a JavaScript Date (UTC) to Ethiopian Date components
 */
export function getEthiopianDate(gregorianDate: Date): { year: number; month: number; day: number } {
  const jdn = gregorianToJdn(
    gregorianDate.getUTCFullYear(),
    gregorianDate.getUTCMonth() + 1,
    gregorianDate.getUTCDate()
  );
  return jdnToEthiopian(jdn);
}

export interface EthiopianCalendarDay {
  day: number | null;
  isWedding?: boolean;
}

export interface EthiopianCalendarResult {
  ethDate: { year: number; month: number; day: number };
  firstDayOfWeek: number;
  totalDays: number;
  daysList: EthiopianCalendarDay[];
  monthNameAm: string;
  monthNameEn: string;
}

/**
 * Generates an Ethiopian Calendar grid for the given target UTC Date.
 */
export function generateEthiopianCalendarDays(targetDate: Date): EthiopianCalendarResult {
  const ethDate = getEthiopianDate(targetDate);
  const firstDayJdn = ethiopianToJdn(ethDate.year, ethDate.month, 1);
  const firstDayGreg = jdnToGregorian(firstDayJdn);
  const firstDayOfWeek = new Date(Date.UTC(firstDayGreg.year, firstDayGreg.month - 1, firstDayGreg.day)).getUTCDay();

  const isEthLeap = ethDate.year % 4 === 3;
  const totalDays = ethDate.month === 13 ? (isEthLeap ? 6 : 5) : 30;

  const daysList: EthiopianCalendarDay[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    daysList.push({ day: null });
  }

  for (let d = 1; d <= totalDays; d++) {
    daysList.push({
      day: d,
      isWedding: d === ethDate.day,
    });
  }

  return {
    ethDate,
    firstDayOfWeek,
    totalDays,
    daysList,
    monthNameAm: ETHIOPIAN_MONTHS_AM[ethDate.month - 1] || '',
    monthNameEn: ETHIOPIAN_MONTHS_EN[ethDate.month - 1] || '',
  };
}
