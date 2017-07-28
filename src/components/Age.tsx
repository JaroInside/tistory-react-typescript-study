import * as React from 'react';

import { AgeStore } from '../stores';

import { observer } from 'mobx-react';

const ageState = new AgeStore(30);

@observer
class Age extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.addAge = this.addAge.bind(this);
  }
  render() {
    return (
      <div className="Age">
        <h1>{ageState.getAge()}</h1>
        <button onClick={() => this.addAge()}>나이증가</button>
      </div>
    );
  }
  addAge() {
    const age = ageState.getAge();
    ageState.setAge(age + 1);
    console.log(ageState.getAge());
  }
}

export default Age;