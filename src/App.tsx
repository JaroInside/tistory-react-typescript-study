import * as React from 'react';
import './App.css';

import Parent from './Parent';
import StatelessComponent from './Stateless';

const logo = require('./logo.svg');

interface AppProps {
}

interface AppState {
  name: string;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: {name: string}) {
    console.log('App constructor');
    super(props);
    this.state = {
      name: 'jaro'
    };
    this._changeName = this._changeName.bind(this);
  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {

    console.log('App render');

    const { name } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this._changeName}>이름 변경</button>
        <Parent name={name}/>
        <StatelessComponent name="React-TS">Children</StatelessComponent>
      </div>
    );
  }

  private _changeName(): void {
    const name = (this.state.name === 'jaro') ? 'react' : 'jaro';
    this.setState({
      name: name
    });
  }

}

export default App;
