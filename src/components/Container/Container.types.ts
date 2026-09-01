import type { PropsWithChildren } from 'react';
import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import type { Edge } from 'react-native-safe-area-context';

export interface ContainerProps extends PropsWithChildren {
  edges?: readonly Edge[]; // default ['top', 'bottom']
  scroll?: boolean; // render content in a ScrollView
  padded?: boolean; // horizontal 24 padding, default true
  background?: ImageSourcePropType; // full-bleed image behind everything
  style?: StyleProp<ViewStyle>; // extra style on the content container
}
