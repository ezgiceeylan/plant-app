import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  /** Sizes the gradient to the glyphs without painting them. */
  sizer: { opacity: 0 },
  /** Behind layer: transparent glyphs that carry only the textShadow from `style`. */
  shadow: { color: 'transparent' },
});
