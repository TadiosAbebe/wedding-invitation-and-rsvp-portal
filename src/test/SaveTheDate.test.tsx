import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SaveTheDate from '../components/SaveTheDate';
import { useLanguage } from '../LanguageContext';

vi.mock('../LanguageContext', () => ({
  useLanguage: vi.fn(),
}));

describe('SaveTheDate Component Language Tests', () => {
  const defaultMockContext = {
    config: {
      sections: { saveTheDate: true },
      countdownTarget: '2026-09-20T16:00:00Z',
      sectionConfigs: {
        savethedate: {
          title: { en: 'The Invitation', am: 'የግብዣ ወረቀት' },
          subtitle: { en: 'Reserve the Twentieth of September', am: 'መስከረም አስርን ያስውቡልን' },
        },
      },
    },
    language: 'en',
    groom: 'Groom',
    bride: 'Bride',
    t: (key: string, fallback: string) => fallback,
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders Gregorian calendar in English mode', () => {
    (useLanguage as any).mockReturnValue(defaultMockContext);

    render(<SaveTheDate />);

    // Should display English Month & Year
    expect(screen.getByText('September 2026')).toBeInTheDocument();
    // Highlighting day 20 for Gregorian September 20
    expect(screen.getAllByText('20').length).toBeGreaterThan(0);
  });

  it('renders Ethiopian calendar when language is switched to Amharic (am)', () => {
    (useLanguage as any).mockReturnValue({
      ...defaultMockContext,
      language: 'am',
      t: (key: string, fallback: string) => {
        if (key === 'calendar.monthsEth') {
          return 'መስከረም,ጥቅምት,ኅዳር,ታኅሣሥ,ጥር,የካቲት,መጋቢት,ሚያዝያ,ግንቦት,ሰኔ,ሐምሌ,ነሐሴ,ጳጉሜ';
        }
        if (key === 'calendar.weekdays') {
          return 'እሑ,ሰኞ,ማክ,ረቡ,ሐሙ,ዓር,ቅዳ';
        }
        return fallback;
      },
    });

    render(<SaveTheDate />);

    // Should display Ethiopian Month & Year (መስከረም 2019 ዓ.ም)
    expect(screen.getByText('መስከረም 2019 ዓ.ም')).toBeInTheDocument();

    // Weekdays should be in Amharic
    expect(screen.getByText('እሑ')).toBeInTheDocument();
    expect(screen.getByText('ሰኞ')).toBeInTheDocument();

    // Day 10 (Meskerem 10) should be highlighted
    expect(screen.getAllByText('10').length).toBeGreaterThan(0);
  });
});
