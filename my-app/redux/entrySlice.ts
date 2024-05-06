// entrySlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Entry {
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
    updateEntryTitle(state, action: PayloadAction<{ id: string, title: string }>) {
        const entry = state.entries.find(entry => entry.id === action.payload.id);
        if (entry) {
          entry.title = action.payload.title;
        }
      },
      updateEntryEmail(state, action: PayloadAction<{ id: string, email: string }>) {
        const entry = state.entries.find(entry => entry.id === action.payload.id);
        if (entry) {
          entry.email = action.payload.email;
        }
      },
      updateEntryPassword(state, action: PayloadAction<{ id: string, password: string }>) {
        const entry = state.entries.find(entry => entry.id === action.payload.id);
        if (entry) {
          entry.password = action.payload.password;
        }
      },
  },
});

export const { addEntry, selectEntry, updateEntryTitle, updateEntryEmail, updateEntryPassword } = entrySlice.actions;
export default entrySlice.reducer;