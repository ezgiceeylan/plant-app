import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    borderRadius: 12,
    backgroundColor: '#24201A',
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
  title: {
    textShadowColor: '#00000052',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  chevron: {
    marginRight: 12,
    width: 24,
    height: 24,
  },
});
