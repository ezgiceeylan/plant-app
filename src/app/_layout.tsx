import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useAppFonts } from '@/hooks/useAppFonts';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const ready = useAppFonts();

  useEffect(() => {
    if (ready) SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) return null;

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="paywall"
          options={{ presentation: 'fullScreenModal', animation: 'simple_push' }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
