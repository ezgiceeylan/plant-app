import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

import { styles } from './Container.styles';
import type { ContainerProps } from './Container.types';

export function Container({
  children,
  edges = ['top', 'bottom'],
  scroll = false,
  padded = true,
  background,
  style,
}: ContainerProps) {
  const { colors } = useTheme();
  const pad = padded && styles.padded;

  return (
    <View style={[styles.root, { backgroundColor: colors.background.screen }]}>
      {background ? (
        <Image
          source={background}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
          pointerEvents="none"
        />
      ) : null}

      <SafeAreaView edges={edges} style={styles.root}>
        {scroll ? (
          <ScrollView
            style={styles.content}
            contentContainerStyle={[styles.scrollContent, pad, style]}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View style={[styles.content, pad, style]}>{children}</View>
        )}
      </SafeAreaView>
    </View>
  );
}
