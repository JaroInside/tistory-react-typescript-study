import * as React from 'react';
import { HelloForm, HelloContent, Text } from '../components';

interface AppProps {
}

interface AppState {
  name: string;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    console.log('App constructor');
    super(props);
    this.state = { 
      name: 'Jaro'
    };
    this.handleChange = this.handleChange.bind(this);
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
        <h1>Composition Test</h1>
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
}

export default App;
