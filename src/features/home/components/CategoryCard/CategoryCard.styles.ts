import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    flexBasis: '45%',
    borderRadius: 14,
    padding: 16,
    height: 152,
    borderWidth: 0.5,
    borderColor: '#3C3C431A',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 96,
  },
});
