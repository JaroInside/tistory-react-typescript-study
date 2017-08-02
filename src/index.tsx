import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { AgeStore } from './stores';

useStrict(true);

const ageState = new AgeStore(30);

ReactDOM.render(
  <Provider store = {ageState}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();