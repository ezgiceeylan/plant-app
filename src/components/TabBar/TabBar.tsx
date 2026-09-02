import { Image } from 'expo-image';
import { Fragment } from 'react';
import { Pressable, View } from 'react-native';

import { Text } from '@/components/Text';
import { useTheme } from '@/theme';

import { styles } from './TabBar.styles';
import type { TabBarProps } from './TabBar.types';

const centerButton = require('@/assets/images/home/tab-bar-button.png');

const TAB_ICON: Record<string, number> = {
  index: require('@/assets/images/home/tab-bar-home.png'),
  diagnose: require('@/assets/images/home/tab-bar-healthcare.png'),
  'my-garden': require('@/assets/images/home/tab-bar-garden.png'),
  profile: require('@/assets/images/home/tab-bar-profile.png'),
};

const CENTER_INDEX = 2;

export function TabBar({ state, descriptors, navigation, insets }: TabBarProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.bar,
        { backgroundColor: colors.background.primary, paddingBottom: insets.bottom + 8 },
      ]}
    >
      <View style={styles.row}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;
          const color = isFocused ? colors.brand.default : '#979798';
          const icon = TAB_ICON[route.name];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Fragment key={route.key}>
              {index === CENTER_INDEX ? <View style={styles.centerSlot} /> : null}
              <Pressable
                onPress={onPress}
                accessibilityRole="button"
                accessibilityState={{ selected: isFocused }}
                accessibilityLabel={options.title}
                style={styles.tab}
              >
                {icon ? (
                  <Image source={icon} style={styles.icon} contentFit="contain" tintColor={color} />
                ) : null}
                <Text font="regular" style={[styles.label, { color }]}>
                  {options.title}
                </Text>
              </Pressable>
            </Fragment>
          );
        })}
      </View>

      <View pointerEvents="box-none" style={styles.centerWrap}>
        <Image source={centerButton} style={styles.centerImage} contentFit="contain" />
      </View>
    </View>
  );
}
