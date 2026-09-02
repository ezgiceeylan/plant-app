import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/store';

const STORAGE_KEY = 'onboarding.completed';

interface OnboardingState {
  completed: boolean;
  hydrated: boolean;
}

const initialState: OnboardingState = { completed: false, hydrated: false };

export const hydrateOnboarding = createAsyncThunk('onboarding/hydrate', () =>
  AsyncStorage.getItem(STORAGE_KEY).then((value) => value === 'true')
);

export const completeOnboarding = createAsyncThunk('onboarding/complete', () =>
  AsyncStorage.setItem(STORAGE_KEY, 'true')
);

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(hydrateOnboarding.fulfilled, (state, action) => {
        state.completed = action.payload;
        state.hydrated = true;
      })
      .addCase(hydrateOnboarding.rejected, (state) => {
        state.hydrated = true;
      })
      .addCase(completeOnboarding.fulfilled, (state) => {
        state.completed = true;
      });
  },
});

export const onboardingReducer = onboardingSlice.reducer;

export const selectOnboardingCompleted = (state: RootState) => state.onboarding.completed;
export const selectOnboardingHydrated = (state: RootState) => state.onboarding.hydrated;
