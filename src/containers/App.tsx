import * as React from 'react';
import './App.css';

import { Age } from '../components';

const App: React.SFC<{}> = (props) => {
  return (
    <div className="App">
      <Age />
    </div>
  );
};

export default App;
