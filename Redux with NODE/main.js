const redux = require('redux');
const produce = require('immer').produce;
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const ADDRESS = 'ADDRESS';
const FAVORITE = 'FAVORITE';

const INITIALSTATE = {
  name: 'Pramit',
  personalDetails: {
    birthYear: '11/01/1997',
    age: 26,
    address: 'Kolkata',
  },
  favorites: ['Mod', 'Magi'],
  occupation: {
    work: 'TRP GLOBAL',
  },
};

const chnageAddress = (address) => {
  return {
    type: ADDRESS,
    payload: address,
  };
};

const chnageFavorites = (fav) => {
  return {
    type: FAVORITE,
    payload: fav,
  };
};

const reducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ADDRESS:
      return produce(state, (draft) => {
        draft.personalDetails.address = action.payload;
      });

    case FAVORITE:
      return produce(state, (draft) => {
        draft.favorites.push(action.payload);
      });

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log('Initialstate', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('updated', store.getState())
);

const action = bindActionCreators(
  { chnageAddress, chnageFavorites },
  store.dispatch
);

action.chnageAddress('40/b bachespati para Road Dakshineswar Kolkata 700076');
action.chnageFavorites('dudu');

unsubscribe();
