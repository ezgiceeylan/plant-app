import { getGreeting } from './greeting';

const dateAtHour = (hour: number) => new Date(2024, 0, 1, hour, 30);

describe('getGreeting', () => {
  it('greets with morning between 05:00 and 11:59', () => {
    expect(getGreeting(dateAtHour(5))).toBe('Good Morning! ☀️');
    expect(getGreeting(dateAtHour(11))).toBe('Good Morning! ☀️');
  });

  it('greets with afternoon between 12:00 and 16:59', () => {
    expect(getGreeting(dateAtHour(12))).toBe('Good Afternoon! ⛅');
    expect(getGreeting(dateAtHour(16))).toBe('Good Afternoon! ⛅');
  });

  it('greets with evening between 17:00 and 20:59', () => {
    expect(getGreeting(dateAtHour(17))).toBe('Good Evening! 🌆');
    expect(getGreeting(dateAtHour(20))).toBe('Good Evening! 🌆');
  });

  it('greets with night between 21:00 and 04:59', () => {
    expect(getGreeting(dateAtHour(21))).toBe('Good Night! 🌙');
    expect(getGreeting(dateAtHour(0))).toBe('Good Night! 🌙');
    expect(getGreeting(dateAtHour(4))).toBe('Good Night! 🌙');
  });

  it('falls back to the current time when no date is given', () => {
    expect(getGreeting()).toBe(getGreeting(new Date()));
  });
});
