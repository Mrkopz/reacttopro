import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function countAge(state = 0, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(countAge);
store.subscribe(() => { console.log('subscribe', store.getState()) });
console.log('befor dispatch', store.getState());
store.dispatch({
    type: 'INCREMENT'
})

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