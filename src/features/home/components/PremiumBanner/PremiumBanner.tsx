import { Image } from 'expo-image';
import { View } from 'react-native';

import { GradientText } from '@/components/GradientText';

import { styles } from './PremiumBanner.styles';

const leftIcon = require('@/assets/images/home/banner-left.png');
const chevron = require('@/assets/images/home/banner-right.png');

export function PremiumBanner() {
  return (
    <View style={styles.card}>
      <Image source={leftIcon} style={styles.leftIcon} contentFit="contain" />

      <View style={styles.texts}>
        <GradientText
          font="medium"
          size="md"
          colors={['#E5C990', '#E4B046']}
          locations={[0.4935, 1]}
          style={styles.title}
        >
          FREE Premium Available
        </GradientText>
        <GradientText
          font="regular"
          size="xs"
          colors={['#FFDE9CCC', '#F5C25BCC']}
          locations={[0.4924, 1]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
        >
          Tap to upgrade your account!
        </GradientText>
      </View>

      <Image source={chevron} style={styles.chevron} contentFit="contain" />
    </View>
  );
}
