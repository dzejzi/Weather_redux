import { combineReducers } from 'redux';
import weather from './weather';
import color from './color';


const rootReducer = combineReducers({
    weather,
    color
});

export default rootReducer;