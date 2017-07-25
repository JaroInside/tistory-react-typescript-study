import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Store, createStore } from 'redux';
import { ageApp } from './reducer/ageApp';
import Provider from './components/Provider';

const store: Store<{ age: number; }> = createStore<{ age: number; }>(ageApp);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
