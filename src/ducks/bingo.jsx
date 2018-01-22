import { postNewUserToCloud } from './../middleware';
import * as ActionTypes from './../actions';

const OPEN_TILE_MODAL = 'OPEN_TILE_MODAL';
const CLOSE_TILE_MODAL = 'CLOSE_TILE_MODAL';

const initialState = {
    users: ['ingrid', 'line'],
    tileModalId: undefined,
    tile: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.POST_NEW_USER_SUCCESS:
            return { ...state, users: [...state.users, action.name] };
        case OPEN_TILE_MODAL:
            return { ...state, tileModalId: action.tileModalId, tile: action.tile };
        case CLOSE_TILE_MODAL:
            return { ...state, tileModalId: undefined, tile: undefined };
        default:
            return state;
    }
};

export const openTileModal = (tileModalId, tile) => ({ type: OPEN_TILE_MODAL, tileModalId, tile });
export const closeTileModal = () => ({ type: CLOSE_TILE_MODAL });

export const postNewUser = (name, email, board) =>
    dispatch =>
        dispatch(postNewUserToCloud(name, email, board));
