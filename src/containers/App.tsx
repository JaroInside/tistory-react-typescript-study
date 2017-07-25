import * as React from 'react';
import './App.css';

import { Store, Unsubscribe } from 'redux';

import { addAge } from '../action/addAge';

const logo = require('./logo.svg');

interface AppProps {
  store: Store<{ age: number; }>;
}

class App extends React.Component<AppProps, {}> {
  
  private _unsubscribe: Unsubscribe;
  
  constructor(props: AppProps) {
    super(props);
    this._addAge = this._addAge.bind(this);
  }

  componentDidMount() {
    const store = this.props.store;
    this._unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    if (this._unsubscribe !== null) {
      this._unsubscribe();
    }
  }

  render() {
    const state = this.props.store.getState();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>{state.age}</h1>
        <button onClick={this._addAge}>증가합니다.</button>
      </div>
    );
  }

  private _addAge() {
    this.props.store.dispatch(addAge());
  }
  
}

export default App;
