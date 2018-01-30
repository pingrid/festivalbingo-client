import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { bingo, entities } from './ducks';

export default combineReducers({
    bingo,
    entities,
    form,
    routing
});
