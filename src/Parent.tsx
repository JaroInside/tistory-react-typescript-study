import * as React from 'react';

interface ParentProps {
  name: string;
}

interface ParentState {
  age: number;
}

class Parent extends React.Component<ParentProps, ParentState> {

  constructor(props: {name: string}) {
    console.log('Parent constructor');
    super(props);
    this.state = {
      age: 31
    };
    this._addAge = this._addAge.bind(this);
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
    return false;
  }

  componentWillUpdate(nextProps: ParentProps, nextState: ParentState) {
    console.log(`Parent componentWillUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps: ParentProps, prevState: ParentState) {
    console.log(`Parent componentDidUpdate : ${JSON.stringify(prevProps)}, ${JSON.stringify(prevState)}`);
  }

  render() {
    console.log('Parent render');
    
    const {name} = this.props;
    const {age} = this.state;
    
    return (
      
      <div className="Parent">
        <h1>Hello {name}</h1>
        <h1>age : {age}</h1>          
        <button onClick={this._addAge}>나이 추가</button>
      </div>
    );
  }

  private _addAge(): void {
    this.setState({
      age: this.state.age + 1
    });
  }

}

export default Parent;
