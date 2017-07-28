import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { addAge } from '../action/addAge';

interface AgeProps {
  age: number;
}

const Age: React.SFC<AgeProps & ReactRedux.DispatchProp<{}>> = (props) => {
  function onAddClick(): void {
    const dispatch: ReactRedux.Dispatch<{}> = props.dispatch;
    dispatch(addAge());
  }
  return (
    <div className="Age">
      <h1>{props.age}</h1>
      <button onClick={() => onAddClick()}>증가합니다.</button>
    </div>
  );
};

const mapStateToProps = (state: { age: number; }) => {
  return {
    age: state.age,
  };
};

const { connect } = ReactRedux;

const AgeContainer = connect(
  mapStateToProps
)(Age);

export default AgeContainer;