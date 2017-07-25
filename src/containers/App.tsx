import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { addAge } from '../action/addAge';

const logo = require('./logo.svg');

interface AppProps {
  age: number;
  onAddClick(): void;
}

/*
class App extends React.Component<AppProps, {}> {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>{this.props.age}</h1>
        <button onClick={this.props.onAddClick}>증가합니다.</button>
      </div>
    );
  }
}
*/

const App: React.SFC<AppProps> = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <h1>{props.age}</h1>
      <button onClick={props.onAddClick}>증가합니다.</button>
    </div>
  );
};

const mapStateToProps = (state: { age: number; }) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onAddClick: (): void => {
      dispatch(addAge());
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
