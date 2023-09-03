/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    orderd: (state, action) => {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { orderd, restocked } = cakeSlice.actions;
