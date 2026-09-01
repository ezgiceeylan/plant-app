import { StyleSheet } from 'react-native';

const FOOTER_PADDING_BOTTOM = 12.5;
const FOOTER_ROW_GAP = 32.5;
const DOTS_HEIGHT = 10;
const BUTTON_HEIGHT = 56;
const FADE_SOFT_MARGIN = 90;

export const BUTTON_BASELINE = FOOTER_PADDING_BOTTOM + DOTS_HEIGHT + FOOTER_ROW_GAP;
export const FADE_HEIGHT = BUTTON_BASELINE + BUTTON_HEIGHT + FADE_SOFT_MARGIN;

export const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingBottom: FOOTER_PADDING_BOTTOM,
    gap: FOOTER_ROW_GAP,
  },
});
