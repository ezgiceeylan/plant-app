import { View } from 'react-native';

import { Text } from '@/components/Text';

import { styles } from './PaywallFooter.styles';

export function PaywallFooter() {
  return (
    <View style={styles.footer}>
      <Text font="light" size="xs" style={styles.note}>
        After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel
        before the trial expires. Yearly Subscription is Auto-Renewable
      </Text>

      <View style={styles.links}>
        <Text font="regular" size="xs" style={styles.link}>
          Terms • Privacy • Restore
        </Text>
      </View>
    </View>
  );
}
