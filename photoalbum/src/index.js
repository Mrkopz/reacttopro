import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('root'));
registerServiceWorker();
