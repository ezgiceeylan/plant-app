import type { ImageSourcePropType } from 'react-native';

export interface FeatureItem {
  id: string;
  icon: ImageSourcePropType;
  title: string;
  subtitle: string;
}

export interface FeatureCardProps {
  feature: FeatureItem;
}
