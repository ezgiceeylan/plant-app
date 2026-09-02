import type { ImageSourcePropType } from 'react-native';

export interface Slide {
  id: string;
  titleLead: string;
  titleHighlight: string;
  titleTrail?: string;
  titleShadow?: boolean;
  hero: ImageSourcePropType;
  heroLayout?: 'bleed' | 'device';
  background: ImageSourcePropType;
  leaves?: ImageSourcePropType;
  badge?: ImageSourcePropType;

  fadeBottom?: boolean;
}
