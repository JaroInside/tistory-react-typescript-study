import * as types from '../action/actionType';

type State = number;

const initialState: State = 30;

type Action = {
  type: string;
};

export function age(state: State = initialState, action: Action): State {
  switch (action.type) {
    case types.ADD_AGE:
        return state + 1;
    default:
        return state;
  }
}