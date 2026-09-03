import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, View } from 'react-native';

import { Text } from '@/components/Text';
import { palette } from '@/theme';

import { styles } from './PlanOption.styles';
import type { PlanOptionProps } from './PlanOption.types';

export function PlanOption({ plan, selected, onPress }: PlanOptionProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      style={[styles.card, selected && styles.cardSelected]}
    >
      {selected ? (
        <LinearGradient
          colors={[palette.green500Fade, palette.green500Clear]}
          locations={[0, 0.6851]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
          pointerEvents="none"
        />
      ) : null}

      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected ? <View style={styles.radioDot} /> : null}
      </View>

      <View style={styles.texts}>
        <Text font="medium" size="md" color="inverse">
          {plan.title}
        </Text>
        <Text font={selected ? 'regular' : 'light'} size="sm" style={styles.subtitle}>
          {plan.priceLabel}
          {plan.priceNote ? (
            <Text font="regular" size="sm" style={styles.subtitle}>
              {' '}
              {plan.priceNote}
            </Text>
          ) : null}
        </Text>
      </View>

      {plan.badge ? (
        <View style={[styles.badge, selected && styles.badgeSelected]}>
          <Text font="medium" color="inverse" style={styles.badgeContainer}>
            {plan.badge}
          </Text>
        </View>
      ) : null}
    </Pressable>
  );
}
