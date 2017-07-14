import * as React from 'react';
import { Me } from '.';

interface ParentProps {
  toChild: string;
  changeFromChild(): void;
}

interface ParentState {
}

class Parent extends React.Component<ParentProps, ParentState> {

  constructor(props: ParentProps) {
    console.log('Parent constructor');
    super(props);
  }

  componentWillMount() {
    console.log('Parent componentWillMount');
  }

  componentDidMount() {
    console.log('Parent componentDidMount');
  }

  componentWillReceiveProps(nextProps: ParentProps) {
    console.log(`Parent componentWillReceiveProps : ${JSON.stringify(nextProps)}`);
  }

  shouldComponentUpdate(nextProps: ParentProps, nextState: ParentState): boolean {
    console.log(`Parent shouldComponentUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
    return true;
  }

  componentWillUpdate(nextProps: ParentProps, nextState: ParentState) {
    console.log(`Parent componentWillUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps: ParentProps, prevState: ParentState) {
    console.log(`Parent componentDidUpdate : ${JSON.stringify(prevProps)}, ${JSON.stringify(prevState)}`);
  }

  render() {

    console.log('Parent render');

    return (
      <div className="Parent">
        <h1>Parent</h1>
        <Me {...this.props} />
      </div>
    );
  }

}

export default Parent;
