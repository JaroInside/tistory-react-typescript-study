import * as React from 'react';

interface SecretProps {
}

interface SecretState {
}

class Secret extends React.Component<SecretProps, SecretState> {

  constructor(props: {name: string}) {
    console.log('Secret constructor');
    super(props);
  }

  componentWillMount() {
    console.log('Secret componentWillMount');
  }

  componentDidMount() {
    console.log('Secret componentDidMount');
  }

  componentWillReceiveProps(nextProps: SecretProps) {
    console.log(`Secret componentWillReceiveProps : ${JSON.stringify(nextProps)}`);
  }

  shouldComponentUpdate(nextProps: SecretProps, nextState: SecretState): boolean {
    console.log(`Secret shouldComponentUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
    return true;
  }

  componentWillUpdate(nextProps: SecretProps, nextState: SecretState) {
    console.log(`Secret componentWillUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps: SecretProps, prevState: SecretState) {
    console.log(`Secret componentDidUpdate : ${JSON.stringify(prevProps)}, ${JSON.stringify(prevState)}`);
  }

  componentWillUnmount() {
    console.log('Secret componentWillUnmount');
  }

  render() {
    console.log('Secret render');
    
    return (
      
      <div className="Secret">
        <h1>Secret</h1>
      </div>
    );
  }
}

export default Secret;
