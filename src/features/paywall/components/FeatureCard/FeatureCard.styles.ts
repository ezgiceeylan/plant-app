import { StyleSheet } from 'react-native';

import { palette } from '@/theme';

export const styles = StyleSheet.create({
  card: {
    width: 156,
    padding: 16,
    borderRadius: 14,
    gap: 6,
    backgroundColor: palette.forest800,
    height: 130,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 6,
  },
  icon: {
    width: 36,
    height: 36,
  },
  subtitle: {
    color: palette.white70,
  },
});
