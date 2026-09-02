import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';

import { completeOnboarding } from '@/features/onboarding/store/onboardingSlice';
import { useAppDispatch } from '@/store/hooks';

import { DEFAULT_PLAN_ID, SUBSCRIPTION_PLANS } from '../plans';

export function usePaywall() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedId, setSelectedId] = useState(DEFAULT_PLAN_ID);

  const finishOnboarding = useCallback(() => {
    dispatch(completeOnboarding());
    router.replace('/(tabs)');
  }, [dispatch, router]);

  return {
    plans: SUBSCRIPTION_PLANS,
    selectedId,
    select: setSelectedId,
    subscribe: finishOnboarding,
    dismiss: finishOnboarding,
  };
}
