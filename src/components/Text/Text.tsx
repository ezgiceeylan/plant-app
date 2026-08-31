import { Text as RNText } from 'react-native';

import { useTheme } from '@/theme';

import { fontMap, sizeMap } from './Text.styles';
import type { TextProps } from './Text.types';

export function Text({
  font = 'regular',
  size = 'md',
  color = 'primary',
  style,
  ...rest
}: TextProps) {
  const { colors } = useTheme();
  return (
    <RNText
      style={[
        { fontFamily: fontMap[font], fontSize: sizeMap[size], color: colors.text[color] },
        style,
      ]}
      {...rest}
    />
  );
}
