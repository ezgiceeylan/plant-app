import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

import { Container } from '@/components/Container';
import { useTheme } from '@/theme';

import { styles } from './PaywallScreen.styles';

const backgroundImage = require('@/assets/images/paywall/paywall-background.png');

export function PaywallScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <Container padded={false} background={backgroundImage}>
      <Pressable
        onPress={() => router.back()}
        accessibilityRole="button"
        accessibilityLabel="Close"
        hitSlop={16}
        style={styles.close}
      >
        <Ionicons name="close" size={16} color={colors.text.inverse} />
      </Pressable>
    </Container>
  );
}
