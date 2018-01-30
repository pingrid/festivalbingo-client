import { CALL_API, createGetConfig } from '../utils/Utils';
import * as ActionTypes from './../actions';
import SCHEMA from './utils';

// eslint-disable-next-line import/prefer-default-export
export const getBoardFromCloud = (boardId = 'oya2018') => (
    {
        [CALL_API]: {
            types: ActionTypes.GET_BOARD,
            endpoint: `/api/board/${boardId}`,
            schema: SCHEMA.BOARD,
            config: createGetConfig()
        }
    }
);
