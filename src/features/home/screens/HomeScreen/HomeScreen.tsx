import { View } from 'react-native';

import { Container } from '@/components/Container';
import { palette } from '@/theme';

import { CategoryGrid } from '../../components/CategoryGrid';
import { GetStartedCarousel } from '../../components/GetStartedCarousel';
import { HomeHeader } from '../../components/HomeHeader';
import { PremiumBanner } from '../../components/PremiumBanner';
import { styles } from './HomeScreen.styles';

export function HomeScreen() {
  return (
    <Container
      scroll
      padded={false}
      edges={['bottom']}
      style={{ paddingBottom: 56, backgroundColor: palette.gray150 }}
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
