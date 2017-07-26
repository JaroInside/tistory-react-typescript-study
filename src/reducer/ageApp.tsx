import * as types from '../action/actionType';

type State = {
  readonly age: number
};

const initialState: State = {
  age: 30
};

type Action = { type: typeof types.ADD_AGE };

export function ageApp(state: State = initialState, action: Action): State {
  switch (action.type) {
    case types.ADD_AGE:
        return {
          ...state, age: state.age + 1,
        };
    default:
        return state;
  }
}
