import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { Image } from '../components';

import { addAge } from '../action/addAge';

interface AppProps {
  age: number;
  onAddClick(): void;
}

const App: React.SFC<AppProps> = (props) => {
  return (
    <div className="App">
      <Image />
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
