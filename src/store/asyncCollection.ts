import type { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';

export type FetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface CollectionState<T> {
  items: T[];
  status: FetchStatus;
  error: string | null;
}

export function collectionInitialState<T>(): CollectionState<T> {
  return { items: [], status: 'idle', error: null };
}

export function addFetchCases<T>(
  builder: ActionReducerMapBuilder<CollectionState<T>>,
  thunk: AsyncThunk<T[], void, object>
): void {
  builder
    .addCase(thunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload as typeof state.items;
    })
    .addCase(thunk.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong';
    });
}
