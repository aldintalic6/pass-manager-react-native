// entrySlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Entry {
  id: string;
  title: string;
  image: any;
  email: string;
  password: string;
}

interface EntryState {
  entries: Entry[];
  selectedEntry: Entry | null;
}

const initialState: EntryState = {
  entries: [],
  selectedEntry: null,
};

const entrySlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry(state, action: PayloadAction<Entry>) {
      state.entries.push(action.payload);
    },
    selectEntry(state, action: PayloadAction<Entry>) {
      state.selectedEntry = action.payload;
    },
    // Add other reducers for updating and deleting entries as needed
  },
});

export const { addEntry, selectEntry } = entrySlice.actions;
export default entrySlice.reducer;