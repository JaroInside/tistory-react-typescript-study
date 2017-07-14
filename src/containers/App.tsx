import * as React from 'react';
import { Parent } from '../components';

interface AppProps {
}

interface AppState {
  toChild: string;
  fromChild: string;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    console.log('App constructor');
    super(props);
    this.state = {
      toChild: '이건 App에서 Child로 보내주는 값',
      fromChild: '이건 App의 state에 있는 값'
    };
    this._changeToChild = this._changeToChild.bind(this);
    this._changeFromChild = this._changeFromChild.bind(this);
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

    return (
      <div className="App">
        <h1>App</h1>
        <h2>{this.state.fromChild}</h2>
        <Parent {...this.state} changeFromChild={this._changeFromChild}/>
        <button onClick={this._changeToChild}>App에서 Child값 변경</button>
      </div>
    );
  }

  private _changeToChild(): void {
    this.setState({
      toChild: 'App에서 Child로 보내주는 값 변경 변경 변경 변경!!!!!!'
    });
  }

  private _changeFromChild(): void {
    this.setState({
      fromChild: 'Child에서 App에 있는 state값 변경 변경 변경 변경!!!!!!'
    });
  }

}

export default App;
