import { useFonts } from 'expo-font';

import { fonts } from '@/theme';

export function useAppFonts(): boolean {
  const [loaded, error] = useFonts({
    [fonts.rubikLight]: require('@/assets/fonts/Rubik-Light.ttf'),
    [fonts.rubikRegular]: require('@/assets/fonts/Rubik-Regular.ttf'),
    [fonts.rubikMedium]: require('@/assets/fonts/Rubik-Medium.ttf'),
    [fonts.rubikSemiBold]: require('@/assets/fonts/Rubik-SemiBold.ttf'),
    [fonts.rubikBold]: require('@/assets/fonts/Rubik-Bold.ttf'),
    [fonts.rubikExtraBold]: require('@/assets/fonts/Rubik-ExtraBold.ttf'),
    [fonts.visbyExtraBold]: require('@/assets/fonts/VisbyCF-ExtraBold.ttf'),
    [fonts.sfProSemibold]: require('@/assets/fonts/SFProText-Semibold.ttf'),
    [fonts.sfProBold]: require('@/assets/fonts/SFProText-Bold.ttf'),
    [fonts.sfProRegular]: require('@/assets/fonts/SFProText-Regular.ttf'),
  });

  return loaded || error != null;
}
