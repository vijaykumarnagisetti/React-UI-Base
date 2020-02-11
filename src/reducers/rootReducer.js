import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import loginReducer from './loginReducer';
const rootReducer = combineReducers({
 simpleReducer, loginReducer
});

export default rootReducer;