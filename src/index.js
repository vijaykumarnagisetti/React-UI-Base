import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
//import configureStore, { sagaMiddleware } from './store'; 
import './index.css';
import * as serviceWorker from './serviceWorker';
import saga from './sagas/saga';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import { logger } from 'redux-logger';
import Routes from './utility/Routes';

const sagaMiddleware = createSagaMiddleware();    
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, logger)
  ),
);

sagaMiddleware.run(saga);

ReactDOM.render(
 <Provider store={store}>
      <Routes/>
 </Provider>,
 document.getElementById('root')
);

serviceWorker.unregister();
