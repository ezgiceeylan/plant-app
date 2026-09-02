import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bar: {
    paddingTop: 6,
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFFEB',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 10,
  },
  centerSlot: {
    width: 72,
  },
  centerWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    alignItems: 'center',
  },
  centerImage: {
    width: 74,
    height: 64,
    marginTop: -23,
  },
});
