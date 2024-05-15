import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from './passwordSlice';
import entryReducer from './entrySlice'; // Import the entries slice
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    passwords: passwordReducer,
    entries: entryReducer, // Add the entries slice to the reducer object
    auth: authReducer
  },
});

export default store;