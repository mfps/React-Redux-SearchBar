import { combineReducers } from 'redux';

import header from './header';
import offers from './offers';

const rootReducer = combineReducers({ header, offers });

export default rootReducer;
