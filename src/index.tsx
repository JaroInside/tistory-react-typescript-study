import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { combine } from './reducer';
import { Provider } from 'react-redux';
import { middleware, middlewareB } from './middleware';

type StoreTypes = {
  age: number; 
  image: boolean; 
  async: { 
    status: string; 
    name: string; 
  };
};

const store = createStore<StoreTypes>(combine, applyMiddleware(middleware, middlewareB, thunk));

ReactDOM.render(
  <Provider store={store} >
    <AppContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
