import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

import { styles } from './WelcomeScreen.styles';

const backgroundImage = require('@/assets/images/onboarding/welcome-background.png');
const heroImage = require('@/assets/images/onboarding/welcome-hero.png');

export function WelcomeScreen() {
  const router = useRouter();

  return (
    <Container padded={false} background={backgroundImage}>
      <View style={styles.header}>
        <Text font="regular" size="xxl">
          Welcome to{' '}
          <Text font="semiBold" size="xxl">
            PlantApp
          </Text>
        </Text>
        <Text color="secondary" style={styles.subtitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>

      <Image source={heroImage} style={styles.hero} contentFit="contain" />

      <Button
        label="Get Started"
        size="lg"
        style={styles.button}
        onPress={() => router.push('/steps')}
      />

      <View style={styles.legal}>
        <Text size="xs" font="regular" color="tertiary" style={styles.legalText}>
          By tapping next, you are agreeing to PlantID{'\n'}
          <Text size="xs" font="regular" color="tertiary" style={styles.link}>
            Terms of Use
          </Text>{' '}
          &{' '}
          <Text size="xs" font="regular" color="tertiary" style={styles.link}>
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </Container>
  );
}
