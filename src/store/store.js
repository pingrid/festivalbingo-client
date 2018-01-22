import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import storeAddon from './StoreAddon';
import { isDev } from '../utils/Utils';
import DevTools from '../utils/Devtools';
import reducer from '../reducer';

const getDevStoreCompose = history => compose(
    applyMiddleware(thunk, storeAddon, routerMiddleware(history)),
    DevTools.instrument()
);

const getStoreCompose = history => compose(applyMiddleware(thunk, storeAddon, routerMiddleware(history)));

export default function create(history) {
    console.log('isDev(): ', isDev());
    const composed = isDev() ? getDevStoreCompose(history) : getStoreCompose(history);

    return composed(createStore)(reducer, {});
}
