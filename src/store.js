import { createStore, compose } from 'redux';

// import reducer
import rootReducer from './reducer/index';

const defaultState = {
  header: {
    color: '#a3daff'
  },
  offers: {
    list: [],
    filter: []
  }
};

const store = createStore(rootReducer, defaultState);

export default store;
