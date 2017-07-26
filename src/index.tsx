import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Store, createStore } from 'redux';
import { combine } from './reducer/combine';
import { Provider } from 'react-redux';

const store: Store<{ age: number; imageShow: boolean; }> = createStore<{ age: number; imageShow: boolean; }>(combine);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
