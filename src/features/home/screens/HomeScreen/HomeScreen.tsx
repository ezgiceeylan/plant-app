import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container } from '@/components/Container';

import { CategoryGrid } from '../../components/CategoryGrid';
import { GetStartedCarousel } from '../../components/GetStartedCarousel';
import { HomeHeader } from '../../components/HomeHeader';
import { PremiumBanner } from '../../components/PremiumBanner';
import { styles } from './HomeScreen.styles';

export function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <Container
      scroll
      padded={false}
      style={{ paddingBottom: insets.bottom + 56, backgroundColor: '#FBFAFA' }}
    >
      <HomeHeader />
      <View style={styles.body}>
        <PremiumBanner />
        <GetStartedCarousel />
        <CategoryGrid />
      </View>
    </Container>
  );
}
