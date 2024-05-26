import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseUrl: '',
};

const baseUrlSlice = createSlice({
  name: 'baseUrl',
  initialState,
  reducers: {
    setBaseUrl: (state, action) => {
      state.baseUrl = action.payload;
    },
  },
});

export const { setBaseUrl } = baseUrlSlice.actions;

export default baseUrlSlice.reducer;