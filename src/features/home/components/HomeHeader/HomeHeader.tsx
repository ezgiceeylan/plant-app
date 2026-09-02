import { Image } from 'expo-image';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/components/Text';

import { SearchBar } from '../SearchBar';
import { HEADER_BODY, styles } from './HomeHeader.styles';

const background = require('@/assets/images/home/background.png');

export function HomeHeader() {
  const insets = useSafeAreaInsets();
  const bandHeight = insets.top + HEADER_BODY;

  return (
    <View>
      <Image
        source={background}
        style={[styles.background, { height: bandHeight }]}
        contentFit="cover"
        contentPosition="bottom"
        pointerEvents="none"
      />

      <View style={[styles.band, { height: bandHeight, paddingTop: insets.top + 4 }]}>
        <View style={styles.greeting}>
          <Text font="regular" size="md" color="primary">
            Hi, plant lover!
          </Text>
          <Text font="medium" size="xl" color="primary" style={styles.salutation}>
            Good Afternoon! ⛅
          </Text>
        </View>

        <SearchBar />
      </View>
    </View>
  );
}
