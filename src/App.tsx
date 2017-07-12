import * as React from 'react';
import './App.css';

import StatelessComponent from './Stateless';

const logo = require('./logo.svg');

interface AppProps {
  name: string;
}

interface AppState {
  age: number;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: {name: string}) {
    console.log('App constructor');
    super(props);
    this.state = {
      age: 31
    };
    this._addAge = this._addAge.bind(this);
  }

  render() {

    console.log('App render');

    const {name} = this.props;
    const {age} = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>Hello {name}</h1>
        <h1>age : {age}</h1>          
        <button onClick={this._addAge}>나이 추가</button>
        <StatelessComponent name="React-TS">Children</StatelessComponent>
      </div>
    );
  }

  private _addAge(): void {
    this.setState({
      age: this.state.age + 1
    });
  }

}

export default App;
