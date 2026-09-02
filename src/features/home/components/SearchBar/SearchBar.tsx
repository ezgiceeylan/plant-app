import { TextInput, View, ViewProps } from 'react-native';

import { Image } from 'expo-image';
import { styles } from './SearchBar.styles';

interface SearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  style?: ViewProps['style'];
}

export function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search for plants',
  style,
}: SearchBarProps) {
  return (
    <View style={[styles.bar, style]}>
      <Image source={require('@/assets/images/home/search-outline.png')} style={styles.leftIcon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'#AFAFAF'}
        style={styles.input}
      />
    </View>
  );
}
