import { StyleSheet } from 'react-native';

export const HEADER_BODY = 131;

export const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
  band: {
    paddingHorizontal: 24,
    paddingBottom: 14,
    justifyContent: 'space-between',
  },
  greeting: {
    gap: 6,
  },
  salutation: {
    marginBottom: 16,
  },
});
