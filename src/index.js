import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import createReduxStore from './store/store';
import registerServiceWorker from './utils/registerServiceWorker';

const store = createReduxStore();

render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app-container center-text text-sunglow pt-7">
                    <App />
                </div>
            </BrowserRouter>
        </Provider>
    ), document.getElementById('root')
);

registerServiceWorker();
