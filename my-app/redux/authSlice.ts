// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  email: string;
  password: string;
  username: string;
}

interface AuthState {
  isLoggedIn: boolean;
  users: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  users: [],
  isLoading: false,
  error: null,
};

const saveUsersToStorage = async (users: User[]) => {
  try {
    await AsyncStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error('Failed to save users to storage', error);
  }
};

export const loadUsersFromStorage = async () => {
  try {
    const storedUsers = await AsyncStorage.getItem('users');
    if (storedUsers) {
      return JSON.parse(storedUsers);
    }
  } catch (error) {
    console.error('Failed to load users from storage', error);
  }
  return []; // if loading fails, return empty array
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
      saveUsersToStorage(state.users); // Save to AsyncStorage
    },
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { addUser, setUsers, loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
