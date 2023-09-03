/** @format */

const reduxLogger = require('redux-logger');
const createStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('./features/cake/cakeSlice');
const iceCreamReducer = require('./features/icecream/icecreamSlice');
const userRedcer = require('./features/user/userSlice');

const logger = reduxLogger.createLogger();

const store = createStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userRedcer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
module.exports = store;
