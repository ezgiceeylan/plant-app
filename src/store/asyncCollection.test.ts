import { createAsyncThunk, createSlice, type UnknownAction } from '@reduxjs/toolkit';

import { addFetchCases, collectionInitialState } from './asyncCollection';

const fetchItems = createAsyncThunk<string[], void>('items/fetch', () =>
  Promise.resolve(['first', 'second'])
);

const itemsReducer = createSlice({
  name: 'items',
  initialState: collectionInitialState<string>(),
  reducers: {},
  extraReducers: (builder) => addFetchCases(builder, fetchItems),
}).reducer;

describe('asyncCollection', () => {
  it('builds an empty idle collection', () => {
    expect(collectionInitialState<string>()).toEqual({ items: [], status: 'idle', error: null });
  });

  it('marks loading and clears a stale error while pending', () => {
    const next = itemsReducer(
      { items: [], status: 'failed', error: 'old failure' },
      fetchItems.pending('req-1', undefined)
    );

    expect(next.status).toBe('loading');
    expect(next.error).toBeNull();
  });

  it('stores the payload once fulfilled', () => {
    const next = itemsReducer(
      undefined,
      fetchItems.fulfilled(['first', 'second'], 'req-1', undefined)
    );

    expect(next).toEqual({ items: ['first', 'second'], status: 'succeeded', error: null });
  });

  it('keeps the rejection message on failure', () => {
    const next = itemsReducer(
      undefined,
      fetchItems.rejected(new Error('network down'), 'req-1', undefined)
    );

    expect(next.status).toBe('failed');
    expect(next.error).toBe('network down');
  });

  it('falls back to a generic message when the rejection carries none', () => {
    const rejectedWithoutMessage: UnknownAction = { type: fetchItems.rejected.type, error: {} };

    expect(itemsReducer(undefined, rejectedWithoutMessage).error).toBe('Something went wrong');
  });
});
