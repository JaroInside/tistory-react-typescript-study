import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Store, createStore } from 'redux';
import { ageApp } from './reducer/ageApp';

const store: Store<{ age: number; }> = createStore<{ age: number; }>(ageApp);

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
