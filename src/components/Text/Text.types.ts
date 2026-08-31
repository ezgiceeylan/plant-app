import type { TextProps as RNTextProps } from 'react-native';

import type { TextColor } from '@/theme';

export type TextFont = 'light' | 'regular' | 'medium' | 'bold' | 'extraBold';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface TextProps extends RNTextProps {
  font?: TextFont;
  size?: TextSize;
  color?: TextColor;
}
