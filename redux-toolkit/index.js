/** @format */

const store = require('./app/store');
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions;
const iceCreamActions =
  require('./app/features/icecream/icecreamSlice').iceCreamActions;
const fetchUsers = require('./app/features/user/userSlice').fetchUsers;

console.log('Initial Store', store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log('updated Store', store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(cakeActions.orderd(5));
// store.dispatch(cakeActions.restocked(10));
// store.dispatch(iceCreamActions.ordered(8));
// store.dispatch(iceCreamActions.restocked(50));

//unsubscribe();
