// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  email: string;
  password: string;
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
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

export const { addUser, loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
