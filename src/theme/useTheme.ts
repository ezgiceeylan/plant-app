import { colors, fonts, radius, spacing } from './tokens';

const theme = { colors, spacing, radius, fonts } as const;

export type Theme = typeof theme;

export function useTheme(): Theme {
  return theme;
}
