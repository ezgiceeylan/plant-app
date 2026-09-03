import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable } from 'react-native';

import { Text } from '@/components/Text';
import { palette } from '@/theme';

import type { Category } from '../../types';
import { styles } from './CategoryCard.styles';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Pressable style={styles.card} accessibilityRole="button" accessibilityLabel={category.title}>
      <LinearGradient
        colors={[palette.white, palette.mint50]}
        style={styles.background}
        pointerEvents="none"
      />
      <Text font="medium" size="md" color="primary">
        {category.title}
      </Text>
      <Image
        source={category.image.url}
        style={[styles.image, { aspectRatio: category.image.width / category.image.height }]}
        contentFit="contain"
      />
    </Pressable>
  );
}
