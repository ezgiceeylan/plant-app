const palette = {
  white: '#FFFFFF',
  green500: '#28AF6E',
  green600: '#1E9A5E',
  ink900: '#13231B',
  ink70: '#13231BB2',
  ink25: '#13231B40',
  moss70: '#597165B2',
  gray50: '#FBFCFE',
  gray100: '#F7F9F8',
  gray200: '#E5E8E6',
  red500: '#E5484D',
} as const;

export const colors = {
  background: {
    primary: palette.white,
    secondary: palette.gray100,
    screen: palette.gray50,
  },
  text: {
    primary: palette.ink900,
    secondary: palette.ink70,
    tertiary: palette.moss70,
    faint: palette.ink25,
    inverse: palette.white,
    brand: palette.green500,
  },
  border: {
    default: palette.gray200,
  },
  brand: {
    default: palette.green500,
    pressed: palette.green600,
  },
  danger: {
    default: palette.red500,
  },
} as const;

export { palette };

export type TextColor = keyof typeof colors.text;

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;

export const radius = { sm: 8, md: 12, lg: 14, pill: 999 } as const;

export const fonts = {
  rubikLight: 'Rubik-Light',
  rubikRegular: 'Rubik-Regular',
  rubikMedium: 'Rubik-Medium',
  rubikSemiBold: 'Rubik-SemiBold',
  rubikBold: 'Rubik-Bold',
  rubikExtraBold: 'Rubik-ExtraBold',
  visbyExtraBold: 'VisbyCF-ExtraBold',
  sfProSemibold: 'SFProText-Semibold',
  sfProBold: 'SFProText-Bold',
  sfProRegular: 'SFProText-Regular',
} as const;
