import * as React from 'react';
import './App.css';

import Parent from './Parent';
import Secret from './Secret';
import StatelessComponent from './Stateless';

const logo = require('./logo.svg');

interface AppProps {
}

interface AppState {
  name: string;
  secret: boolean;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: {name: string}) {
    console.log('App constructor');
    super(props);
    this.state = {
      name: 'jaro',
      secret: true
    };
    this._changeName = this._changeName.bind(this);
    this._changeSecret = this._changeSecret.bind(this);
  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  componentWillReceiveProps(nextProps: AppProps) {
    console.log(`Parent componentWillReceiveProps : ${JSON.stringify(nextProps)}`);
  }

  shouldComponentUpdate(nextProps: AppProps, nextState: AppState): boolean {
    console.log(`App shouldComponentUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
    return true;
  }

  componentWillUpdate(nextProps: AppProps, nextState: AppState) {
    console.log(`App componentWillUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps: AppProps, prevState: AppState) {
    console.log(`App componentDidUpdate : ${JSON.stringify(prevProps)}, ${JSON.stringify(prevState)}`);
  }

  render() {

    console.log('App render');

    const { name, secret } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this._changeName}>이름 변경</button>
        <Parent name={name}/>
        <StatelessComponent name="React-TS">Children</StatelessComponent>
        { secret ?
          <Secret /> :
          <h1 />
        }
        <button onClick={this._changeSecret}>비밀</button>
      </div>
    );
  }

  private _changeName(): void {
    const name = (this.state.name === 'jaro') ? 'react' : 'jaro';
    this.setState({
      name: name
    });
  }

  private _changeSecret(): void {
    const secret = (this.state.secret) ? false : true;
    this.setState({
      secret: secret
    });
  }

}

export default App;
