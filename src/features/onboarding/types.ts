import type { ImageSourcePropType } from 'react-native';

export interface Slide {
  id: string;
  titleLead: string;
  titleHighlight: string;
  titleTrail?: string;
  titleShadow?: boolean;
  hero: ImageSourcePropType;
  /** 'bleed' = hero fills the frame edge-to-edge; 'device' = centered device mockup. */
  heroLayout?: 'bleed' | 'device';
  background: ImageSourcePropType;
  /** Optional foliage pattern rendered above the background, behind the content. */
  leaves?: ImageSourcePropType;
  /** Optional decorative cluster pinned to the top-right of the hero. */
  badge?: ImageSourcePropType;
  /** Fades the hero into the page bottom so the footer sits over a clean gradient. */
  fadeBottom?: boolean;
}
