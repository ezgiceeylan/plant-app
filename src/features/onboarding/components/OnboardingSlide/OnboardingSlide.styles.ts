import { StyleSheet } from 'react-native';

import { palette } from '@/theme';

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  leavesAnchor: {
    height: 0,
  },
  leaves: {
    position: 'absolute',
    top: 8,
    width: '100%',
    aspectRatio: 375 / 517,
  },
  title: {
    marginTop: 12,
    marginLeft: 24,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  titleShadow: {
    textShadowColor: palette.black25,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  brush: {
    position: 'absolute',
    left: -12,
    right: 0,
    bottom: -12,
    height: 12,
  },
  body: {
    flex: 1,
    overflow: 'hidden',
  },
  hero: {
    flex: 1,
    width: '100%',
  },
  deviceWrap: {
    alignSelf: 'center',
    height: '80%',
    aspectRatio: 261 / 540,
    maxWidth: '70%',
    marginTop: 'auto',
  },
  deviceHero: {
    flex: 1,
  },

  badge: {
    position: 'absolute',
    width: '59%',
    aspectRatio: 155 / 170,
    top: '-11%',
    right: '-12%',
  },
  fade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
});
