import { useFonts } from 'expo-font';

import { fonts } from '@/theme';

export function useAppFonts(): boolean {
  const [loaded, error] = useFonts({
    [fonts.rubikLight]: require('@/assets/fonts/Rubik-Light.ttf'),
    [fonts.rubikRegular]: require('@/assets/fonts/Rubik-Regular.ttf'),
    [fonts.rubikMedium]: require('@/assets/fonts/Rubik-Medium.ttf'),
    [fonts.rubikBold]: require('@/assets/fonts/Rubik-Bold.ttf'),
    [fonts.visbyExtraBold]: require('@/assets/fonts/VisbyCF-ExtraBold.ttf'),
  });

  return loaded || error != null;
}
