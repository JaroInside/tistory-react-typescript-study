import * as React from 'react';
import { HelloForm, HelloContent, Text } from '../components';

interface AppProps {
}

interface AppState {
  name: string;
  array: number[];
}

class App extends React.PureComponent<AppProps, AppState> {

  constructor(props: AppProps) {
    console.log('App constructor');
    super(props);
    this.state = { 
      name: 'Jaro',
      array: [1]
    };
    this.handleChange = this.handleChange.bind(this);
    this._Click = this._Click.bind(this);
  }
  public handleChange(event: React.FormEvent<HTMLSelectElement>): void {
    this.setState({ name: event.currentTarget.value });
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
  /*
  shouldComponentUpdate(nextProps: AppProps, nextState: AppState): boolean {
    console.log(`App shouldComponentUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
    return true;
  }
  */

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
        <h1>Composition Test</h1>
        <h1>{this.state.array.join(', ')}</h1>
        <button onClick={this._Click}>추가</button>
        <HelloForm
          name = {this.state.name}
          handleChange = {this.handleChange} 
        />
        <HelloContent 
          Test = {<Text name={this.state.name}/>}
        />
      </div>
    );
  }

  private _Click() {
    const next: number[] = this.state.array;
    next.push(this.state.array[this.state.array.length - 1] + 1);
    this.setState({
      array: next
    });
  }
}

export default App;
