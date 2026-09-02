import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';

import { completeOnboarding, hydrateOnboarding, onboardingReducer } from './onboardingSlice';

const STORAGE_KEY = 'onboarding.completed';

const makeStore = () => configureStore({ reducer: { onboarding: onboardingReducer } });

describe('onboarding slice', () => {
  beforeEach(() => AsyncStorage.clear());

  it('starts unresolved and not completed', () => {
    expect(makeStore().getState().onboarding).toEqual({ completed: false, hydrated: false });
  });

  it('hydrates as completed when the flag was persisted', async () => {
    await AsyncStorage.setItem(STORAGE_KEY, 'true');
    const store = makeStore();

    await store.dispatch(hydrateOnboarding());

    expect(store.getState().onboarding).toEqual({ completed: true, hydrated: true });
  });

  it('hydrates as not completed when nothing was persisted', async () => {
    const store = makeStore();

    await store.dispatch(hydrateOnboarding());

    expect(store.getState().onboarding).toEqual({ completed: false, hydrated: true });
  });

  it('still resolves hydration when storage is unavailable', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockRejectedValueOnce(new Error('unavailable'));
    const store = makeStore();

    await store.dispatch(hydrateOnboarding());

    expect(store.getState().onboarding.hydrated).toBe(true);
  });

  it('persists completion so the flow is not shown again', async () => {
    const store = makeStore();

    await store.dispatch(completeOnboarding());

    expect(store.getState().onboarding.completed).toBe(true);
    expect(await AsyncStorage.getItem(STORAGE_KEY)).toBe('true');
  });
});
