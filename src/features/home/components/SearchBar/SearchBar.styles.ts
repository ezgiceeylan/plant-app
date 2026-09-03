import { StyleSheet } from 'react-native';

import { fonts, palette } from '@/theme';

export const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: palette.white88,
    borderWidth: 0.2,
    borderColor: palette.systemGray25,
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
