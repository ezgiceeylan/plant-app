import { View, type StyleProp, type ViewStyle } from 'react-native';

import { useTheme } from '@/theme';

import { styles } from './PaginationDots.styles';

interface PaginationDotsProps {
  count: number;
  activeIndex: number;
  style?: StyleProp<ViewStyle>;
}

export function PaginationDots({ count, activeIndex, style }: PaginationDotsProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.row, style]}>
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <View
            key={i}
            style={[
              styles.dot,
              isActive ? styles.active : styles.inactive,
              { backgroundColor: isActive ? colors.text.primary : colors.text.faint },
            ]}
          />
        );
      })}
    </View>
  );
}
