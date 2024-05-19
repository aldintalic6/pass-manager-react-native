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
  currentId: number;
}

const initialState: EntryState = {
  entries: [],
  selectedEntry: null,
  currentId: 1,
};

const entrySlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry(state, action: PayloadAction<Omit<Entry, 'id'>>) {
      const newEntry = {
        ...action.payload,
        id: state.currentId.toString(), 
      };
      state.entries.push(newEntry);
      state.currentId = state.currentId + 1; 
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
      deleteEntry(state, action: PayloadAction<string>) {
        state.entries = state.entries.filter(entry => entry.id !== action.payload);
        if (state.selectedEntry?.id === action.payload) {
          state.selectedEntry = null;
        }
      },
  },
});

export const { addEntry, selectEntry, updateEntryTitle, updateEntryEmail, updateEntryPassword, deleteEntry } = entrySlice.actions;
export default entrySlice.reducer;