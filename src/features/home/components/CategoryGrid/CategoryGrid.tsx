import { useEffect } from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';

import { Text } from '@/components/Text';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import {
  fetchCategories,
  selectCategories,
  selectCategoriesError,
  selectCategoriesStatus,
} from '../../store/categoriesSlice';
import { CategoryCard } from '../CategoryCard';
import { styles } from './CategoryGrid.styles';

export function CategoryGrid() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const status = useAppSelector(selectCategoriesStatus);
  const error = useAppSelector(selectCategoriesError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  if (status === 'loading' && categories.length === 0) {
    return <ActivityIndicator style={styles.loader} />;
  }

  if (status === 'failed' && categories.length === 0) {
    return (
      <Pressable onPress={() => dispatch(fetchCategories())} style={styles.loader}>
        <Text font="regular" size="sm" color="secondary">
          {error ?? 'Couldn’t load'} — tap to retry
        </Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.grid}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
      {categories.length % 2 === 1 ? <View style={styles.filler} /> : null}
    </View>
  );
}
