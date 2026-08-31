import type { ImageSourcePropType } from 'react-native';

export interface TitleSegment {
  text: string;
  bold?: boolean;
  underline?: boolean;
}

export interface Slide {
  id: string;
  title: TitleSegment[];
  subtitle?: string;
  image: ImageSourcePropType;
  cta: string;
}
