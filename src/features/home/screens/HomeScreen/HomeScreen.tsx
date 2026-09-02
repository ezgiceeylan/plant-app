import { Container } from '@/components/Container';

import { HomeHeader } from '../../components/HomeHeader';

export function HomeScreen() {
  return (
    <Container scroll padded={false} edges={['bottom']}>
      <HomeHeader />
      {/* Get Started carousel, category grid, articles… */}
    </Container>
  );
}
