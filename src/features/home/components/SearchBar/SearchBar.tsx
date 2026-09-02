import { Image } from 'expo-image';
import { TextInput, View, type ViewProps } from 'react-native';

import { styles } from './SearchBar.styles';

const searchIcon = require('@/assets/images/home/search-outline.png');

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
      <Image source={searchIcon} style={styles.leftIcon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#AFAFAF"
        style={styles.input}
      />
    </View>
  );
}
