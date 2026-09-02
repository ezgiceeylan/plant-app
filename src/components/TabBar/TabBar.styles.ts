import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 6,
    borderWidth: 0.5,
    borderColor: '#13231B1A',
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
