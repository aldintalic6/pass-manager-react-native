import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from './passwordSlice';
import entryReducer from './entrySlice'; // Import the entries slice

const store = configureStore({
  reducer: {
    passwords: passwordReducer,
    entries: entryReducer, // Add the entries slice to the reducer object
    // Add reducers for other slices if needed
  },
});

export default store;