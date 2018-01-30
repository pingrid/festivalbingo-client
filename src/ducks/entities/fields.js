import { merge } from 'lodash';
import * as ActionTypes from '../../actions';

export const fields = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.POST_ARTISTS_SUCCESS: {
            const newState = { ...state };
            action.artists.forEach(artist => {
            });
            return {
                ...state,
                [action.tileId]: {
                    ...state[action.tileId],
                }
            };
        }
        default:
            if (action.entities && action.entities.fields) {
                return merge({}, state, action.entities.fields);
            }
            return state;
    }
};
