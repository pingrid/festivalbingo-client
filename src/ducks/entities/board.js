import { merge } from 'lodash';
import { getBoardFromCloud } from '../../middleware';

const initialState = {
    artists: {}
};

export const board = (state = initialState, action) => {
    switch (action.type) {
        /*
        case ActionTypes.POST_ARTISTS_SUCCESS: {
            const artistCount = { ...state.artists };
            const tileBeforeUpdate = state.tiles[action.tileId];

            if (tileBeforeUpdate.artists) {
                tileBeforeUpdate.artists.forEach((artist) => {
                    artistCount[artist] -= 1;
                });
            }

            action.artists.forEach((artist) => {
                if (artist && artistCount[artist]) {
                    artistCount[artist] += 1;
                } else if (artist) {
                    artistCount[artist] = 1;
                }
            });

            console.log('artistCount: ', artistCount);
            return {
                ...state,
                artists: artistCount
            };
        }
        */
        default:
            if (action.entities && action.entities.board) {
                return merge({}, state, action.entities.board);
            }
            return state;
    }
};

export const getBoard = (boardId = 'oya2018') =>
    dispatch =>
        dispatch(getBoardFromCloud(boardId));
