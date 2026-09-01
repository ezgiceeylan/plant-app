import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  FlatList,
  useWindowDimensions,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

import { OnboardingSlide } from '../../components/OnboardingSlide';
import { PaginationDots } from '../../components/PaginationDots';
import { ONBOARDING_SLIDES } from './OnboardingStepsScreen.data';
import type { Slide } from '../../types';
import { BUTTON_BASELINE, FADE_HEIGHT, styles } from './OnboardingStepsScreen.styles';

export function OnboardingStepsScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList<Slide>>(null);
  const [page, setPage] = useState(0);

  const isLast = page === ONBOARDING_SLIDES.length - 1;

  const onContinue = () => {
    if (isLast) {
      router.push('/paywall');
    } else {
      listRef.current?.scrollToIndex({ index: page + 1 });
    }
  };

  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setPage(Math.round(e.nativeEvent.contentOffset.x / width));
  };

  return (
    <Container padded={false}>
      <FlatList
        ref={listRef}
        data={ONBOARDING_SLIDES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OnboardingSlide
            slide={item}
            width={width}
            bottomInset={BUTTON_BASELINE}
            fadeHeight={FADE_HEIGHT}
          />
        )}
        getItemLayout={(_, index) => ({ length: width, offset: width * index, index })}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
      />

      <View style={styles.footer}>
        <Button label="Continue" onPress={onContinue} />
        <PaginationDots count={3} activeIndex={page} />
      </View>
    </Container>
  );
}
