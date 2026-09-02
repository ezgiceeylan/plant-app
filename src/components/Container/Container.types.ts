import type { PropsWithChildren } from 'react';
import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import type { Edge } from 'react-native-safe-area-context';

export interface ContainerProps extends PropsWithChildren {
  edges?: readonly Edge[];
  scroll?: boolean;
  padded?: boolean;
  background?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}
