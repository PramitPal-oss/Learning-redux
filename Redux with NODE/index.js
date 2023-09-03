const redux = require('redux');

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combinereducers = redux.combineReducers;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOKE = 'CAKE_RESTOKE';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOKE = 'ICECREAM_RESTOKE';

//1. Declear initial State
const ICECREAM_STATE = {
  numOfIcreCream: 20,
};

const CAKE_STATE = {
  numOfCake: 10,
};

//2. Create an action creater

function orderCake(payload = 1) {
  return {
    type: CAKE_ORDERED,
    payload: payload,
  };
}

function restokeCake(qty = 1) {
  return {
    type: CAKE_RESTOKE,
    payload: qty,
  };
}

function restokeIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOKE,
    payload: qty,
  };
}

function orderIceCream(payload = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: payload,
  };
}

//reducer function is doing all the operation releated to the store.
const cakeReducer = (state = CAKE_STATE, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload,
      };
    case CAKE_RESTOKE:
      return {
        ...state,
        numOfCake: state.numOfCake + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = ICECREAM_STATE, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcreCream: state.numOfIcreCream - action.payload,
      };
    case ICECREAM_RESTOKE:
      return {
        ...state,
        numOfIcreCream: state.numOfIcreCream + action.payload,
      };
    default:
      return state;
  }
};

//3.Decleare an store which accpects the reducer as an callback

const combineStore = combinereducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(combineStore);

console.log('Initial State', store.getState());

//4. Subscribe to the store
const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())
);

//5. Dispatch an action to update the store.
// store.dispatch(restokeCake(25));
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(1));
// store.dispatch(orderCake(2));

const action = bindActionCreators(
  { orderCake, restokeCake, orderIceCream, restokeIceCream },
  store.dispatch
);

action.orderCake(2);
action.orderIceCream(5);
action.restokeCake(5);
action.restokeIceCream(30);

unsubscribe();
