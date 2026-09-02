import { configureStore } from '@reduxjs/toolkit';

import { articlesReducer } from '@/features/home/store/articlesSlice';
import { categoriesReducer } from '@/features/home/store/categoriesSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
