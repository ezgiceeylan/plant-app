import type { LinearGradient } from 'expo-linear-gradient';
import type { ComponentProps } from 'react';

import type { Text } from '@/components/Text';

type LinearGradientProps = ComponentProps<typeof LinearGradient>;

export interface GradientTextProps extends ComponentProps<typeof Text> {
  colors: LinearGradientProps['colors'];
  locations?: LinearGradientProps['locations'];
  start?: LinearGradientProps['start'];
  end?: LinearGradientProps['end'];
}
