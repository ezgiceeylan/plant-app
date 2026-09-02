import { StyleSheet } from 'react-native';

import { fonts } from '@/theme';

export const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFFE0',
    borderWidth: 0.2,
    borderColor: '#3C3C4340',
  },
  input: {
    flex: 1,
    fontFamily: fonts.rubikRegular,
    fontSize: 15.5,
  },
  leftIcon: {
    width: 20,
    height: 20,
  },
});
