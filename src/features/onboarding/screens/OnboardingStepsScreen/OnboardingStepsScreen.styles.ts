import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    marginVertical: 12,
    marginLeft: 24,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  brush: {
    position: 'absolute',
    left: -12,
    width: 138,
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
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingBottom: 12.5,
    gap: 32.5,
  },
});
