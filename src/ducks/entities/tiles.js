import { merge } from 'lodash';
import { postArtistToCloud } from '../../middleware/post';
import * as ActionTypes from '../../actions';

const initialState = {};

export const tiles = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.POST_ARTISTS_SUCCESS:
            return { ...state };
        default:
            if (action.entities && action.entities.tiles) {
                return merge({}, state, action.entities.tiles);
            }
            return state;
    }
};

export const postArtist = (board, name, tileId, artists) =>
    dispatch =>
        dispatch(postArtistToCloud(board, name, tileId, artists));
