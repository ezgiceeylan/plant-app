import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 11,
  },
  filler: {
    flexGrow: 1,
    flexBasis: '45%',
  },
  loader: {
    alignSelf: 'flex-start',
  },
});
