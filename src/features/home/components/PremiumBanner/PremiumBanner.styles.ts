import { StyleSheet } from 'react-native';

import { palette } from '@/theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    borderRadius: 12,
    backgroundColor: palette.bark800,
  },
  leftIcon: {
    marginLeft: 14,
    width: 48,
    height: 48,
    transform: [{ translateY: 4 }],
  },
  texts: {
    flex: 1,
    marginLeft: 8,
    gap: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    textShadowColor: palette.black32,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  chevron: {
    marginRight: 12,
    width: 24,
    height: 24,
  },
});
