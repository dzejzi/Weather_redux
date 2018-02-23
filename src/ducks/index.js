import { combineReducers } from 'redux';
import weather from './weather';
import city from './city';


const rootReducer = combineReducers({
   city
});

export default rootReducer;