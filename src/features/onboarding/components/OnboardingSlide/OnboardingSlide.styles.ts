import { StyleSheet } from 'react-native';

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
    textShadowColor: '#00000040',
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    aspectRatio: 375 / 683,
  },
  heroDevice: {
    alignSelf: 'center',
    width: 261,
    aspectRatio: 261 / 540,
    marginTop: 'auto',
    marginBottom: 55,
  },
  badge: {
    position: 'absolute',
    top: 32,
    right: 28,
    width: 200,
    aspectRatio: 155 / 170,
  },
  fade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 220,
  },
});
