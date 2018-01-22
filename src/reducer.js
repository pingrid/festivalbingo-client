import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import bingo from './ducks/bingo';

export default combineReducers({
    bingo,
    form,
    routing
});
