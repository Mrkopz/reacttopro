import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';


/*const store = createStore(countAge);
store.subscribe(() => { console.log('subscribe', store.getState()) });
console.log('befor dispatch', store.getState());
store.dispatch({
    type: 'INCREMENT'
})*/

const store = createStore(reducers, applyMiddleware(promiseMiddleware()));

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={browserHistory}
            routes={routes}
        />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();