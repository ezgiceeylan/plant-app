import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useAppFonts } from '@/hooks/useAppFonts';
import { store } from '@/store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const ready = useAppFonts();

  useEffect(() => {
    if (ready) SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) return null;

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="paywall"
            options={{ presentation: 'fullScreenModal', animation: 'simple_push' }}
          />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  );
}
