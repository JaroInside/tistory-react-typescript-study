import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import { combine } from './reducer';
import { Provider } from 'react-redux';

type StoreTypes = {
  age: number; 
  image: boolean; 
  async: { 
    status: string; 
    name: string; 
  };
};

const store = createStore<StoreTypes>(combine);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
