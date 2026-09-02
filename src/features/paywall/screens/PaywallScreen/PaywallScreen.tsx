import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { useTheme } from '@/theme';

import { FeatureCarousel } from '../../components/FeatureCarousel';
import { PaywallFooter } from '../../components/PaywallFooter';
import { PlanSelector } from '../../components/PlanSelector';
import { usePaywall } from '../../hooks/usePaywall';
import { styles } from './PaywallScreen.styles';

const backgroundImage = require('@/assets/images/paywall/paywall-background.png');

export function PaywallScreen() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const { plans, selectedId, select, subscribe, dismiss } = usePaywall();

  return (
    <View style={[styles.root, { backgroundColor: '#101e17' }]}>
      <Image
        source={backgroundImage}
        style={styles.background}
        contentFit="cover"
        pointerEvents="none"
      />

      <Pressable
        onPress={dismiss}
        accessibilityRole="button"
        accessibilityLabel="Close"
        hitSlop={16}
        style={[styles.close, { top: insets.top + 8 }]}
      >
        <Ionicons name="close" size={16} color={colors.text.inverse} />
      </Pressable>
      <View style={[styles.content, { paddingBottom: insets.bottom + 8 }]}>
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
        <PlanSelector plans={plans} selectedId={selectedId} onSelect={select} />
        <Button size="sm" label="Try free for 3 days" onPress={subscribe} />
        <PaywallFooter />
      </View>
    </View>
  );
}
