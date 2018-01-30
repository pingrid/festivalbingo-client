import { postNewUserToCloud } from '../middleware/post';
import * as ActionTypes from './../actions';

const OPEN_TILE_MODAL = 'OPEN_TILE_MODAL';
const CLOSE_TILE_MODAL = 'CLOSE_TILE_MODAL';


const initialState = {
    users: ['ingrid', 'line'],
    tileModalId: undefined,
    booked: ['cezinando', 'ingrid']
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.POST_NEW_USER_SUCCESS:
            return { ...state, users: [...state.users, action.name] };
        case OPEN_TILE_MODAL:
            return { ...state, tileModalId: action.tileModalId };
        case CLOSE_TILE_MODAL:
            return { ...state, tileModalId: undefined };

        default:
            return state;
    }
};

export const openTileModal = tileModalId => ({ type: OPEN_TILE_MODAL, tileModalId });
export const closeTileModal = () => ({ type: CLOSE_TILE_MODAL });

export const postNewUser = (board, name, email) =>
    dispatch =>
        dispatch(postNewUserToCloud(board, name, email));

