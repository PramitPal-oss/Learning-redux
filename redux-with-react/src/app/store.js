/** @format */

import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './features/cake/cakeSlice';
import iceCreamReducer from './features/icecream/icecreamSlice';
import userRedcer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userRedcer,
  },
});

export default store;
