import { colors, fonts } from './tokens';

const theme = { colors, fonts } as const;

export type Theme = typeof theme;

export function useTheme(): Theme {
  return theme;
}
