const palette = {
  white: '#FFFFFF',

  green500: '#28AF6E',
  green600: '#1E9A5E',
  green500Fade: '#28AF6E2B',
  green500Clear: '#28AF6E00',
  mint50: '#F9FFFA',

  ink900: '#13231B',
  ink70: '#13231BB2',
  ink25: '#13231B40',
  ink10: '#13231B1A',
  moss70: '#597165B2',

  gray50: '#FBFCFE',
  gray100: '#F7F9F8',
  gray150: '#FBFAFA',
  gray200: '#E5E8E6',
  gray400: '#AFAFAF',
  gray500: '#979798',
  systemGray25: '#3C3C4340',
  systemGray10: '#3C3C431A',

  forest900: '#101E17',
  forest800: '#23302A',
  bark800: '#24201A',

  goldLight: '#E5C990',
  goldDeep: '#E4B046',
  goldPale: '#FFDE9CCC',
  goldAmber: '#F5C25BCC',

  white88: '#FFFFFFE0',
  white70: '#FFFFFFB2',
  white52: '#FFFFFF85',
  white50: '#FFFFFF80',
  white30: '#FFFFFF4D',
  white15: '#FFFFFF26',
  white10: '#FFFFFF1A',
  white05: '#FFFFFF0D',

  black40: '#00000066',
  black32: '#00000052',
  black25: '#00000040',
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
} as const;

export { palette };

export type TextColor = keyof typeof colors.text;

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
