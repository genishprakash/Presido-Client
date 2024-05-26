
import { configureStore } from '@reduxjs/toolkit';
import baseUrlReducer from './baseUrlSlice';

const store = configureStore({
  reducer: {
    baseUrl: baseUrlReducer,
  },
});

export default store;