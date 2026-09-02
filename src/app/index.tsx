import { Redirect } from 'expo-router';

import { selectOnboardingCompleted } from '@/features/onboarding/store/onboardingSlice';
import { useAppSelector } from '@/store/hooks';

export default function Index() {
  const onboardingCompleted = useAppSelector(selectOnboardingCompleted);

  return <Redirect href={onboardingCompleted ? '/(tabs)' : '/(onboarding)'} />;
}
