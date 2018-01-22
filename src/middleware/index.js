import { CALL_API, createGetConfig, createPostConfig } from '../utils/Utils';
import * as ActionTypes from './../actions';

export const getCurrentBudget = () => (
    {
        ingrid: 220,
        common: 400
    }
);


export const getBudgetInfoFromCloud = () => (
    {
        [CALL_API]: {
            types: 'POST_VALUE',
            endpoint: '/api/budget/info/ingrid',
            config: createGetConfig()
        }
    }
);


export const postNewUserToCloud = (name, email, board = 'oya2018') => (
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
