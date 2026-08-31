import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';

export function WelcomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 24, paddingBottom: 16 }}>
        <View style={{ flex: 1 }} />
        <Text font="extraBold" size="xl">
          dödödö
        </Text>
        <Button label="Get Started" size="sm" />
      </View>
    </SafeAreaView>
  );
}
