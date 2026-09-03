import { Image } from 'expo-image';
import { View } from 'react-native';

import { GradientText } from '@/components/GradientText';
import { palette } from '@/theme';

import { styles } from './PremiumBanner.styles';

const leftIcon = require('@/assets/images/home/banner-left.png');
const chevron = require('@/assets/images/home/banner-right.png');

export function PremiumBanner() {
  return (
    <View style={styles.card}>
      <Image source={leftIcon} style={styles.leftIcon} contentFit="contain" />

      <View style={styles.texts}>
        <View style={styles.titleRow}>
          <GradientText
            font="sfProBold"
            size="md"
            colors={[palette.goldLight, palette.goldDeep]}
            locations={[0.4935, 1]}
            style={styles.title}
          >
            FREE
          </GradientText>
          <GradientText
            font="sfProSemibold"
            size="md"
            colors={[palette.goldLight, palette.goldDeep]}
            locations={[0.4935, 1]}
            style={styles.title}
          >
            Premium Available
          </GradientText>
        </View>
        <GradientText
          font="sfProRegular"
          size="xs"
          colors={[palette.goldPale, palette.goldAmber]}
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
