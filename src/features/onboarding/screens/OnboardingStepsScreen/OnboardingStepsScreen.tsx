import { Image } from 'expo-image';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

import { PaginationDots } from '../../components/PaginationDots';
import { styles } from './OnboardingStepsScreen.styles';

const brush = require('@/assets/images/onboarding/step-brush.png');
const backgroundImage = require('@/assets/images/onboarding/onboarding-step1-background.png');
const heroImage = require('@/assets/images/onboarding/onboarding-step1-hero.png');

export function OnboardingStepsScreen() {
  return (
    <Container padded={false} background={backgroundImage}>
      <View style={styles.title}>
        <View style={styles.line}>
          <Text font="medium" size="xxl">
            Take a photo to{' '}
          </Text>
          <View>
            <Text font="extraBold" size="xxl">
              identify
            </Text>
            <Image source={brush} style={styles.brush} contentFit="contain" />
          </View>
        </View>
        <Text font="medium" size="xxl">
          the plant!
        </Text>
      </View>

      <View style={styles.body}>
        <Image source={heroImage} style={styles.hero} contentFit="contain" />

        <View style={styles.footer}>
          <Button label="Continue" />
          <PaginationDots count={3} activeIndex={0} />
        </View>
      </View>
    </Container>
  );
}
