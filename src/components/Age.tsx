import * as React from 'react';

import { observer, inject } from 'mobx-react';

import { AgeStore } from '../stores';

@inject('store')
@observer
class Age extends React.Component<{ store?: AgeStore; }, {}> {

  private store = this.props.store as AgeStore;

  constructor(props: {}) {
    super(props);
    this.store.ageLog();
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
        <h1>{this.store.age}</h1>
        <button onClick={() => this.store.addAge()}>나이증가</button>
      </div>
    );
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