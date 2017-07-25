import * as React from 'react';
import './App.css';

import { Unsubscribe } from 'redux';
import * as PropTypes from 'prop-types';

import { addAge } from '../action/addAge';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {

  public static contextTypes = {
    store: PropTypes.object
  };

  private _unsubscribe: Unsubscribe;
  
  constructor(props: {}) {
    super(props);
    this._addAge = this._addAge.bind(this);
  }

  componentDidMount() {
    const store = this.context.store;
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
    const state = this.context.store.getState();
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

  private _addAge(): void {
    const store = this.context.store;
    const action = addAge();
    store.dispatch(action);
  }
  
}

export default App;
