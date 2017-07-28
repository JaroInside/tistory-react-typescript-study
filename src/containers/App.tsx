import * as React from 'react';
import './App.css';

import { ImageContainer, AsyncContainer, AgeContainer } from '../components';

const App: React.SFC<{}> = (props) => {
  return (
    <div className="App">
      <ImageContainer />
      <AgeContainer />
      <AsyncContainer />
    </div>
  );
};

export default App;