import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Password = {
  id: number;
  value: string;
};

type PasswordState = {
  passwords: Password[];
  selectedPassword: Password | null;
};

const initialState: PasswordState = {
  passwords: [],
  selectedPassword: null,
};

const passwordSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    addPassword(state, action: PayloadAction<{ id: number; value: string }>) {
        const { id, value } = action.payload;
        const newPassword: Password = {
          id: id,
          value: value,
        };
        state.passwords.push(newPassword);
      },
    editPassword(state, action: PayloadAction<{ id: number; value: string }>) {
        const { id, value } = action.payload;
        const index = state.passwords.findIndex(password => password.id === id);
        if (index !== -1) {
          state.passwords[index].value = value;
        }
      },
      deletePassword(state, action: PayloadAction<number>) {
        const idToDelete = action.payload;
        state.passwords = state.passwords.filter(password => password.id !== idToDelete);
        if (state.selectedPassword?.id === idToDelete) {
          state.selectedPassword = null;
        }
      },
  },
});

export const { addPassword, editPassword, deletePassword } = passwordSlice.actions;
export default passwordSlice.reducer;