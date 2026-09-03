import { StyleSheet } from 'react-native';

import { palette } from '@/theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 60,
    borderRadius: 14,
    borderWidth: 0.5,
    paddingLeft: 16,
    borderColor: palette.white30,
    backgroundColor: palette.white05,
  },
  cardSelected: {
    borderColor: palette.green500,
    borderWidth: 1.5,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 14,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: palette.white15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    backgroundColor: palette.green500,
  },
  radioDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: palette.white,
  },
  texts: {
    flex: 1,
    gap: 2,
  },
  subtitle: {
    color: palette.white70,
    fontSize: 12,
  },
  badgeContainer: {
    fontSize: 12,
    lineHeight: 18,
    paddingVertical: 4,
    paddingLeft: 12,
    paddingRight: 9,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
    backgroundColor: palette.green500,
  },
  badgeSelected: {
    top: -1,
    right: -1,
  },
});
