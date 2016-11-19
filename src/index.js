import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import createLogger from 'redux-logger';

import reducers from './reducers';
import routes from './routes';

const logger = createLogger();
const store = createStore(
	reducers,
	applyMiddleware(promise, logger)
);

ReactDom.render( 
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>
	, document.querySelector('.main')
);