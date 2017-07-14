import * as React from 'react';
import { Child } from '.';

interface MeProps {
  toChild: string;
  changeFromChild(): void;
}

interface MeState {
}

class Me extends React.Component<MeProps, MeState> {

  constructor(props: MeProps) {
    console.log('Me constructor');
    super(props);
  }

  componentWillMount() {
    console.log('Me componentWillMount');
  }

  componentDidMount() {
    console.log('Me componentDidMount');
  }

  componentWillReceiveProps(nextProps: MeProps) {
    console.log(`Parent componentWillReceiveProps : ${JSON.stringify(nextProps)}`);
  }

  shouldComponentUpdate(nextProps: MeProps, nextState: MeState): boolean {
    console.log(`Me shouldComponentUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
    return true;
  }

  componentWillUpdate(nextProps: MeProps, nextState: MeState) {
    console.log(`Me componentWillUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps: MeProps, prevState: MeState) {
    console.log(`Me componentDidUpdate : ${JSON.stringify(prevProps)}, ${JSON.stringify(prevState)}`);
  }

  render() {

    console.log('Me render');

    return (
      <div className="Me">
        <h1>Me</h1>
        <Child {...this.props} />
      </div>
    );
  }

}

export default Me;
