import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';

import { fonts, radius, type Theme } from '@/theme';

import type { ButtonSize, ButtonVariant } from './Button.types';

type SizeSpec = { height: number; radius: number; label: TextStyle };
type VariantSpec = { container: ViewStyle; label: TextStyle };

// Theme-independent — static.
export const sizeSpecs: Record<ButtonSize, SizeSpec> = {
  sm: {
    height: 52,
    radius: radius.lg,
    label: { fontFamily: fonts.rubikMedium, fontSize: 16 },
  },
  lg: {
    height: 56,
    radius: radius.md,
    label: { fontFamily: fonts.rubikBold, fontSize: 15 },
  },
};

export const getVariantSpecs = (colors: Theme['colors']): Record<ButtonVariant, VariantSpec> => ({
  primary: {
    container: { backgroundColor: colors.brand.default },
    label: { color: colors.text.inverse },
  },
  secondary: {
    container: {
      backgroundColor: colors.background.primary,
      borderWidth: 1,
      borderColor: colors.border.default,
    },
    label: { color: colors.text.primary },
  },
});

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  fullWidth: { alignSelf: 'stretch' },
  auto: { alignSelf: 'flex-start' },
  disabled: { opacity: 0.4 },
  label: { textAlign: 'center' },
});
