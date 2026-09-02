import { View } from 'react-native';

import { Container } from '@/components/Container';

import { HomeHeader } from '../../components/HomeHeader';
import { PremiumBanner } from '../../components/PremiumBanner';
import { styles } from './HomeScreen.styles';

export function HomeScreen() {
  return (
    <Container scroll padded={false} edges={['bottom']}>
      <HomeHeader />

      <View style={styles.body}>
        <PremiumBanner />
      </View>
    </Container>
  );
}
