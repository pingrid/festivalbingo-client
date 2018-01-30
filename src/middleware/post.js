import { CALL_API, createPostConfig } from '../utils/Utils';
import * as ActionTypes from './../actions';

export const postNewUserToCloud = (board = 'oya2018', name, email) => (
    {
        name,
        email,
        board,
        [CALL_API]: {
            types: ActionTypes.POST_NEW_USER,
            endpoint: '/api/register',
            config: createPostConfig({ name, email, board })
        }
    }
);


export const postArtistToCloud = (boardId = 'oya2018', name, tileId, artists) => (
    {
        boardId,
        name,
        artists,
        tileId,
        [CALL_API]: {
            types: ActionTypes.POST_ARTISTS,
            endpoint: `/api/board/${boardId}/${tileId}`,
            config: createPostConfig({ name, artists })
        }
    }
);
