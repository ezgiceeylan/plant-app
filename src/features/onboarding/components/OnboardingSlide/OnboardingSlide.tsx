import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

import { Text } from '@/components/Text';
import { useTheme } from '@/theme';

import type { Slide } from '../../types';
import { styles } from './OnboardingSlide.styles';

const brush = require('@/assets/images/onboarding/step-brush.png');

interface OnboardingSlideProps {
  slide: Slide;
  width: number;
}

export function OnboardingSlide({ slide, width }: OnboardingSlideProps) {
  const { colors } = useTheme();
  const shadow = slide.titleShadow ? styles.titleShadow : undefined;
  const isDevice = slide.heroLayout === 'device';

  return (
    <View style={[styles.slide, { width }]}>
      <Image
        source={slide.background}
        style={styles.background}
        contentFit="cover"
        pointerEvents="none"
      />
      <View style={styles.title}>
        <View style={styles.line}>
          <Text font="medium" size="xxl" style={shadow}>
            {slide.titleLead}
          </Text>
          <View>
            <Text font="extraBold" size="xxl" style={shadow}>
              {slide.titleHighlight}
            </Text>
            <Image source={brush} style={styles.brush} contentFit="contain" />
          </View>
        </View>
        {slide.titleTrail ? (
          <Text font="medium" size="xxl" style={shadow}>
            {slide.titleTrail}
          </Text>
        ) : null}
      </View>

      {slide.leaves ? (
        <View style={styles.leavesAnchor} pointerEvents="none">
          <Image source={slide.leaves} style={styles.leaves} contentFit="contain" />
        </View>
      ) : null}

      <View style={styles.body}>
        <Image
          source={slide.hero}
          style={isDevice ? styles.heroDevice : styles.hero}
          contentFit="contain"
          pointerEvents="none"
        />
        {slide.badge ? (
          <Image
            source={slide.badge}
            style={styles.badge}
            contentFit="contain"
            pointerEvents="none"
          />
        ) : null}
        {slide.fadeBottom ? (
          <LinearGradient
            colors={[`${colors.background.primary}00`, colors.background.primary]}
            style={styles.fade}
            pointerEvents="none"
          />
        ) : null}
      </View>
    </View>
  );
}
