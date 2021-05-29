import {createStore,combineReducers} from 'redux';

import ListType from './Reducer/ListTypeReducer.js';
import UserReducer from './Reducer/UserReducer'
import SearchReducer from './Reducer/SearchReducer'
import ThemeReducer from './Reducer/ThemeReducer'

const Store = createStore(combineReducers({ 
    type: ListType,
    uinfo: UserReducer,
    searchQuery: SearchReducer,
    theme: ThemeReducer,
}));

export default Store;