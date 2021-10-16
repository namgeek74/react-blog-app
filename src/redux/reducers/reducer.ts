import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import loginReducer from './loginReducer';

const reducer = combineReducers({ loginReducer, articleReducer });
export default reducer;