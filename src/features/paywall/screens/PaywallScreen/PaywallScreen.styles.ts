import { StyleSheet } from 'react-native';

import { palette } from '@/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    aspectRatio: 375 / 490,
  },
  close: {
    position: 'absolute',
    right: 16,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.black40,
    borderRadius: 15,
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 30,
  },
  subtitle: {
    color: palette.white70,
    fontSize: 17,
    lineHeight: 24,
  },
});
