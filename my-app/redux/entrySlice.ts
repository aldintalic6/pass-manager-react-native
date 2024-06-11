// entrySlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const saveEntriesToStorage = async (entries: Entry[], currentId: number) => {
  try {
    await AsyncStorage.setItem('entries', JSON.stringify(entries));
    await AsyncStorage.setItem('currentId', JSON.stringify(currentId));
  } catch (error) {
    console.error('Failed to save entries to storage', error);
  }
};

const clearEntriesFromStorage = async () => {
  try {
    await AsyncStorage.removeItem('entries');
    await AsyncStorage.removeItem('currentId');
  } catch (error) {
    console.error('Failed to clear entries from storage', error);
  }
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
      saveEntriesToStorage(state.entries, state.currentId); // Save to AsyncStorage 
    },
    selectEntry(state, action: PayloadAction<Entry>) {
      state.selectedEntry = action.payload;
    },
    updateEntryTitle(state, action: PayloadAction<{ id: string, title: string }>) {
      const entry = state.entries.find(entry => entry.id === action.payload.id);
      if (entry) {
        entry.title = action.payload.title;
        saveEntriesToStorage(state.entries, state.currentId); // Save to AsyncStorage
      }
    },
      updateEntryEmail(state, action: PayloadAction<{ id: string, email: string }>) {
        const entry = state.entries.find(entry => entry.id === action.payload.id);
        if (entry) {
          entry.email = action.payload.email;
          saveEntriesToStorage(state.entries, state.currentId); // Save to AsyncStorage
        }
      },
      updateEntryPassword(state, action: PayloadAction<{ id: string, password: string }>) {
        const entry = state.entries.find(entry => entry.id === action.payload.id);
        if (entry) {
          entry.password = action.payload.password;
          saveEntriesToStorage(state.entries, state.currentId); // Save to AsyncStorage
        }
      },
      updateEntryImage(state, action: PayloadAction<{ id: string, image: any }>) {
        const entry = state.entries.find(entry => entry.id === action.payload.id);
        if (entry) {
          entry.image = action.payload.image;
          saveEntriesToStorage(state.entries, state.currentId);
        }
      },
      deleteEntry(state, action: PayloadAction<string>) {
        state.entries = state.entries.filter(entry => entry.id !== action.payload);
        if (state.selectedEntry?.id === action.payload) {
          state.selectedEntry = null;
        }
        saveEntriesToStorage(state.entries, state.currentId); // Save to AsyncStorage
      },
      getEntriesFromAsyncStorage(state, action: PayloadAction<{ entries: Entry[], currentId: number }>) {
        state.entries = action.payload.entries;
        state.currentId = action.payload.currentId;
      },
      clearEntries(state) {
        state.entries = [];
        state.currentId = 1;
        clearEntriesFromStorage(); // Clear from AsyncStorage
      },
  },
});

export const { addEntry, selectEntry, updateEntryTitle, updateEntryEmail, updateEntryPassword, updateEntryImage, deleteEntry, getEntriesFromAsyncStorage, clearEntries } = entrySlice.actions;
export default entrySlice.reducer;