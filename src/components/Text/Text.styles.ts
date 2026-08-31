import { fonts } from '@/theme';

import type { TextFont, TextSize } from './Text.types';

export const fontMap: Record<TextFont, string> = {
  light: fonts.rubikLight,
  regular: fonts.rubikRegular,
  medium: fonts.rubikMedium,
  bold: fonts.rubikBold,
  extraBold: fonts.visbyExtraBold,
};

export const sizeMap: Record<TextSize, number> = {
  xs: 11,
  sm: 13,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 28,
};
