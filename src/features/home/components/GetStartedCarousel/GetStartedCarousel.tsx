import { useEffect } from 'react';
import { ActivityIndicator, FlatList, Pressable, View, type ListRenderItem } from 'react-native';

import { Text } from '@/components/Text';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import {
  fetchArticles,
  selectArticles,
  selectArticlesError,
  selectArticlesStatus,
} from '../../store/articlesSlice';
import type { Article } from '../../types';
import { ArticleCard } from '../ArticleCard';
import { styles } from './GetStartedCarousel.styles';

const keyExtractor = (item: Article) => String(item.id);
const renderItem: ListRenderItem<Article> = ({ item }) => <ArticleCard article={item} />;

export function GetStartedCarousel() {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);
  const status = useAppSelector(selectArticlesStatus);
  const error = useAppSelector(selectArticlesError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [status, dispatch]);

  const isEmpty = articles.length === 0;

  return (
    <View style={styles.section}>
      <Text font="medium" color="primary" style={styles.title}>
        Get Started
      </Text>

      {status === 'loading' && isEmpty && <ActivityIndicator style={styles.loader} />}

      {status === 'failed' && isEmpty && (
        <Pressable onPress={() => dispatch(fetchArticles())} style={styles.loader}>
          <Text font="regular" size="sm" color="secondary">
            {error ?? 'Couldn’t load'} — tap to retry
          </Text>
        </Pressable>
      )}

      {!isEmpty && (
        <FlatList
          data={articles}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}
