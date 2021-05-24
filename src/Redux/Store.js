import {createStore,combineReducers} from 'redux';
import DataReducer from './Reducer/DataReducer'
import ListType from './Reducer/ListTypeReducer.js';
import UserReducer from './Reducer/UserReducer'
import SearchReducer from './Reducer/SearchReducer'
import ThemeReducer from './Reducer/ThemeReducer'

const Store = createStore(combineReducers({ 
    type: ListType,
    uinfo: UserReducer,
    datalist: DataReducer,
    searchQuery: SearchReducer,
    theme: ThemeReducer,
}));

export default Store;