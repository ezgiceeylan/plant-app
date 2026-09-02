import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/store';
import { addFetchCases, collectionInitialState } from '@/store/asyncCollection';

import { getCategories } from '../api';
import type { Category } from '../types';

export const fetchCategories = createAsyncThunk<Category[], void, { state: RootState }>(
  'categories/fetch',
  getCategories,
  {
    condition: (_arg, { getState }) => getState().categories.status !== 'loading',
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: collectionInitialState<Category>(),
  reducers: {},
  extraReducers: (builder) => addFetchCases(builder, fetchCategories),
});

export const categoriesReducer = categoriesSlice.reducer;

export const selectCategories = (state: RootState) => state.categories.items;
export const selectCategoriesStatus = (state: RootState) => state.categories.status;
export const selectCategoriesError = (state: RootState) => state.categories.error;
