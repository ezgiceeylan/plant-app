import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/components/Text';
import { useTheme } from '@/theme';

import { FeatureCarousel } from '../../components/FeatureCarousel';
import { styles } from './PaywallScreen.styles';

const backgroundImage = require('@/assets/images/paywall/paywall-background.png');

export function PaywallScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { backgroundColor: '#101e17' }]}>
      <Image
        source={backgroundImage}
        style={styles.background}
        contentFit="cover"
        pointerEvents="none"
      />

      <Pressable
        onPress={() => router.back()}
        accessibilityRole="button"
        accessibilityLabel="Close"
        hitSlop={16}
        style={[styles.close, { top: insets.top + 8 }]}
      >
        <Ionicons name="close" size={16} color={colors.text.inverse} />
      </Pressable>
      <View style={[styles.content, { paddingBottom: insets.bottom + 16 }]}>
        <View>
          <Text font="display" color="inverse" style={styles.title}>
            PlantApp{' '}
            <Text font="light" size="xl" color="inverse">
              Premium
            </Text>
          </Text>
          <Text font="light" color="inverse" style={styles.subtitle}>
            Access All Features
          </Text>
        </View>

        <FeatureCarousel />
      </View>
    </View>
  );
}
