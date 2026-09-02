import { configureStore } from '@reduxjs/toolkit';

import { articlesReducer } from '@/features/home/store/articlesSlice';
import { categoriesReducer } from '@/features/home/store/categoriesSlice';
import { onboardingReducer } from '@/features/onboarding/store/onboardingSlice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    articles: articlesReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
