import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { useTheme } from '@/theme';

import { getVariantSpecs, sizeSpecs, styles } from './Button.styles';
import type { ButtonProps } from './Button.types';

export function Button({
  label,
  variant = 'primary',
  size = 'lg',
  loading = false,
  disabled = false,
  fullWidth = true,
  style,
  ...props
}: ButtonProps) {
  const { colors } = useTheme();
  const variantSpec = getVariantSpecs(colors)[variant];
  const sizeSpec = sizeSpecs[size];
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      style={[
        styles.base,
        fullWidth ? styles.fullWidth : styles.auto,
        { height: sizeSpec.height, borderRadius: sizeSpec.radius },
        variantSpec.container,
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variantSpec.label.color as string} />
      ) : (
        <Text numberOfLines={1} style={[styles.label, sizeSpec.label, variantSpec.label]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}
