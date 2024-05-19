import { configureStore } from '@reduxjs/toolkit';
import entryReducer from './entrySlice'; // Import the entries slice
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    entries: entryReducer, // Add the entries slice to the reducer object
    auth: authReducer
  },
});

export default store;