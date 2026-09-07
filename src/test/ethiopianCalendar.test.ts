import { describe, it, expect } from 'vitest';
import {
  gregorianToJdn,
  jdnToGregorian,
  jdnToEthiopian,
  ethiopianToJdn,
  getEthiopianDate,
  generateEthiopianCalendarDays,
} from '../utils/ethiopianCalendar';

describe('Ethiopian Calendar Utility Tests', () => {
  it('should accurately convert Gregorian Sept 20, 2026 to Ethiopian Meskerem 10, 2019', () => {
    const targetDate = new Date('2026-09-20T16:00:00Z');
    const ethDate = getEthiopianDate(targetDate);

    expect(ethDate.year).toBe(2019);
    expect(ethDate.month).toBe(1); // Meskerem
    expect(ethDate.day).toBe(10);
  });

  it('should accurately perform bi-directional conversion between JDN and Ethiopian date', () => {
    const originalEth = { year: 2019, month: 1, day: 10 };
    const jdn = ethiopianToJdn(originalEth.year, originalEth.month, originalEth.day);
    const convertedEth = jdnToEthiopian(jdn);

    expect(convertedEth).toEqual(originalEth);
  });

  it('should correctly build calendar grid for Meskerem 2019 E.C. (September 2026)', () => {
    const targetDate = new Date('2026-09-20T16:00:00Z');
    const calendar = generateEthiopianCalendarDays(targetDate);

    expect(calendar.ethDate).toEqual({ year: 2019, month: 1, day: 10 });
    expect(calendar.monthNameAm).toBe('መስከረም');
    expect(calendar.monthNameEn).toBe('Meskerem');
    expect(calendar.totalDays).toBe(30);

    // Meskerem 1, 2019 E.C. is Sept 11, 2026 (Friday, day index 5: Sun=0..Fri=5)
    expect(calendar.firstDayOfWeek).toBe(5);

    // Grid should contain 5 empty slots before Day 1
    const emptySlots = calendar.daysList.slice(0, 5);
    emptySlots.forEach((slot) => expect(slot.day).toBeNull());

    // Day 10 should be highlighted as wedding day
    const weddingSlot = calendar.daysList.find((slot) => slot.isWedding);
    expect(weddingSlot).toBeDefined();
    expect(weddingSlot?.day).toBe(10);
  });

  it('should handle Pagume (13th month) in regular and leap Ethiopian years', () => {
    // Non-leap year Pagume (2018 E.C. - Sept 8, 2026) -> 5 days
    const pagumeRegular = generateEthiopianCalendarDays(new Date('2026-09-08T00:00:00Z'));
    expect(pagumeRegular.ethDate.month).toBe(13);
    expect(pagumeRegular.totalDays).toBe(5);

    // Ethiopian leap year Pagume (2019 E.C. - Sept 9, 2027) -> 6 days
    const pagumeLeap = generateEthiopianCalendarDays(new Date('2027-09-09T00:00:00Z'));
    expect(pagumeLeap.ethDate.month).toBe(13);
    expect(pagumeLeap.totalDays).toBe(6);
  });
});
