import { useRouter } from 'expo-router';
import { useState } from 'react';

import { DEFAULT_PLAN_ID, SUBSCRIPTION_PLANS } from '../plans';

export function usePaywall() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(DEFAULT_PLAN_ID);

  const subscribe = () => {
    router.replace('/(tabs)');
  };

  return {
    plans: SUBSCRIPTION_PLANS,
    selectedId,
    select: setSelectedId,
    subscribe,
  };
}
