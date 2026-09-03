import { StyleSheet } from 'react-native';

import { palette } from '@/theme';

export const styles = StyleSheet.create({
  footer: {
    gap: 10,
    marginTop: 8,
  },
  note: {
    color: palette.white52,
    textAlign: 'center',
    fontSize: 9,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: palette.white50,
  },
});
