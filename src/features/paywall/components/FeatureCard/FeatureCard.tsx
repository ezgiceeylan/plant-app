import { Image } from 'expo-image';
import { View } from 'react-native';

import { Text } from '@/components/Text';

import { styles } from './FeatureCard.styles';
import type { FeatureCardProps } from './FeatureCard.types';

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <Image source={feature.icon} style={styles.icon} contentFit="contain" />
      </View>
      <Text font="medium" size="lg" color="inverse">
        {feature.title}
      </Text>
      <Text font="regular" size="sm" style={styles.subtitle}>
        {feature.subtitle}
      </Text>
    </View>
  );
}
