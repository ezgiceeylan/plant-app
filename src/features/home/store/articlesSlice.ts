import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/store';
import { addFetchCases, collectionInitialState } from '@/store/asyncCollection';

import { getQuestions } from '../api';
import type { Article } from '../types';

export const fetchArticles = createAsyncThunk<Article[], void, { state: RootState }>(
  'articles/fetch',
  getQuestions,
  {
    condition: (_arg, { getState }) => getState().articles.status !== 'loading',
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: collectionInitialState<Article>(),
  reducers: {},
  extraReducers: (builder) => addFetchCases(builder, fetchArticles),
});

export const articlesReducer = articlesSlice.reducer;

export const selectArticles = (state: RootState) => state.articles.items;
export const selectArticlesStatus = (state: RootState) => state.articles.status;
export const selectArticlesError = (state: RootState) => state.articles.error;
