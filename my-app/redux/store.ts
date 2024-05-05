import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from './passwordSlice';

const store = configureStore({
  reducer: {
    passwords: passwordReducer,
    // Add reducers for other slices if needed
  },
});

export default store;