import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  hydrateOnboarding,
  selectOnboardingHydrated,
} from '@/features/onboarding/store/onboardingSlice';
import { useAppFonts } from '@/hooks/useAppFonts';
import { store } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

function RootNavigator() {
  const dispatch = useAppDispatch();
  const fontsReady = useAppFonts();
  const onboardingHydrated = useAppSelector(selectOnboardingHydrated);
  const ready = fontsReady && onboardingHydrated;

  useEffect(() => {
    dispatch(hydrateOnboarding());
  }, [dispatch]);

  useEffect(() => {
    if (ready) SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="paywall"
        options={{ presentation: 'fullScreenModal', animation: 'simple_push' }}
      />
    </Stack>
  );
}
