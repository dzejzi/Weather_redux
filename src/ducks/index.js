import { combineReducers } from 'redux';
import city from './city';
import authenticate from './authenticate';


const rootReducer = combineReducers({
   city, 
   authenticate
});

export default rootReducer;