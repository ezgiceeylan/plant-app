import type { TouchableOpacityProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'lg';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}
