import * as React from 'react';

import { AgeStore, Age2 } from '../stores';

import { observer } from 'mobx-react';

const ageState = new AgeStore(30);

@observer
class Age extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.addAge = this.addAge.bind(this);
    this.addNumber = this.addNumber.bind(this);
  }

  componentWillReact() {
    console.log('componentWillReact');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    return (
      <div className="Age">
        <h1>{ageState.getAge()}</h1>
        <button onClick={() => this.addAge()}>나이증가</button>
        <h1>{Age2.age}</h1>
        <button onClick={() => this.addNumber()}>나이증가</button>
      </div>
    );
  }
  addAge() {
    const age = ageState.getAge();
    ageState.setAge(age + 1);
  }
  addNumber() {
    Age2.age = Age2.age + 1;
  }
}

export default Age;

/*
const Age = observer(() => {
  function addAge(): void {
    const age = ageState.getAge();
    ageState.setAge(age + 1);
    console.log(ageState.getAge());
  }
  function addNumber(): void {
    Age2.age = Age2.age + 1;
  }
  return (
    <div className="Age">
      <h1>{ageState.getAge()}</h1>
      <button onClick={() => addAge()}>나이증가</button>
      <h1>{Age2.age}</h1>
      <button onClick={() => addNumber()}>나이증가</button>
    </div>
  );
});

export default Age;
*/