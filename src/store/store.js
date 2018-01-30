import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import storeAddon from './StoreAddon';
import { isDev } from '../utils/Utils';
import reducer from '../reducer';

const getDevStoreCompose = history => compose(
    applyMiddleware(thunk, storeAddon, routerMiddleware(history))
);

const getStoreCompose = history => compose(applyMiddleware(thunk, storeAddon, routerMiddleware(history)));

export default function create(history) {
    if (isDev()) {
        const composed = getDevStoreCompose(history);
        return composed(createStore)(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // eslint-disable-line
    }
    const composed = getStoreCompose(history);

    return composed(createStore)(reducer, {});
}
