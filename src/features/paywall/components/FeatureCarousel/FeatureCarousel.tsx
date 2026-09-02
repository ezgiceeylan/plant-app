import { FlatList, type ListRenderItem } from 'react-native';

import { PREMIUM_FEATURES } from '../../premiumFeatures';
import { FeatureCard, type FeatureItem } from '../FeatureCard';
import { styles } from './FeatureCarousel.styles';

const keyExtractor = (item: FeatureItem) => item.id;
const renderItem: ListRenderItem<FeatureItem> = ({ item }) => <FeatureCard feature={item} />;

export function FeatureCarousel() {
  return (
    <FlatList
      data={PREMIUM_FEATURES}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
}
