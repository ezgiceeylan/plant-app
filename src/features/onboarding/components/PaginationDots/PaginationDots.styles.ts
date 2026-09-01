import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    borderRadius: 999,
  },
  active: {
    width: 10,
    height: 10,
  },
  inactive: {
    width: 6,
    height: 6,
  },
});
