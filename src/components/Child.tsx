import * as React from 'react';

interface ChildProps {
  toChild: string;
  changeFromChild(): void;
}

interface ChildState {
}

class Child extends React.Component<ChildProps, ChildState> {

  constructor(props: ChildProps) {
    console.log('Child constructor');
    super(props);
  }

  componentWillMount() {
    console.log('Child componentWillMount');
  }

  componentDidMount() {
    console.log('Child componentDidMount');
  }

  componentWillReceiveProps(nextProps: ChildProps) {
    console.log(`Parent componentWillReceiveProps : ${JSON.stringify(nextProps)}`);
  }

  shouldComponentUpdate(nextProps: ChildProps, nextState: ChildState): boolean {
    console.log(`Child shouldComponentUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
    return true;
  }

  componentWillUpdate(nextProps: ChildProps, nextState: ChildState) {
    console.log(`Child componentWillUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps: ChildProps, prevState: ChildState) {
    console.log(`Child componentDidUpdate : ${JSON.stringify(prevProps)}, ${JSON.stringify(prevState)}`);
  }

  render() {

    console.log('Child render');

    return (
      <div className="Child">
        <h1>Child</h1>
        <button onClick={this.props.changeFromChild}>Child에서 App의 값 변경</button>
        <h2>{this.props.toChild}</h2>
      </div>
    );
  }

}

export default Child;
