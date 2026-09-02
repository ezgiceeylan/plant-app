import { Image } from 'expo-image';
import * as WebBrowser from 'expo-web-browser';
import { Pressable } from 'react-native';

import { Text } from '@/components/Text';

import type { Article } from '../../types';
import { styles } from './ArticleCard.styles';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Pressable
      style={styles.card}
      accessibilityRole="link"
      accessibilityLabel={article.title}
      onPress={() => WebBrowser.openBrowserAsync(article.uri)}
    >
      <Image source={article.image_uri} style={styles.image} contentFit="cover" />
      <Text font="regular" size="md" color="inverse" numberOfLines={2} style={styles.title}>
        {article.title}
      </Text>
    </Pressable>
  );
}
