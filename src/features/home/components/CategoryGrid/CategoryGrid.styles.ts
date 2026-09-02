import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 11,
  },
  // keeps a lone last card at half width instead of stretching across the row
  filler: {
    flexGrow: 1,
    flexBasis: '45%',
  },
  loader: {
    alignSelf: 'flex-start',
  },
});
