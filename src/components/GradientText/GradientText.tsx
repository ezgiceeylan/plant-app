import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/Text';

import { styles } from './GradientText.styles';
import type { GradientTextProps } from './GradientText.types';

export function GradientText({
  colors,
  locations,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style,
  ...textProps
}: GradientTextProps) {
  return (
    <View>
      <Text {...textProps} style={[style, styles.shadow]} />
      <MaskedView
        style={StyleSheet.absoluteFill}
        maskElement={<Text {...textProps} style={style} />}
      >
        <LinearGradient colors={colors} locations={locations} start={start} end={end}>
          <Text {...textProps} style={[style, styles.sizer]} />
        </LinearGradient>
      </MaskedView>
    </View>
  );
}
