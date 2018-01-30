import { combineReducers } from 'redux';
import { board } from './board';
import { tiles } from './tiles';

const entities = combineReducers({
    board,
    tiles
});

export default entities;
