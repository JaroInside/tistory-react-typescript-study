import * as types from '../action/actionType';

export function ageApp(state: { age: number; } = { age: 30 }, action: { type: string; }): { age: number } {
  switch (action.type) {
    case types.ADD_AGE:
        return { age: state.age + 1 };
    default:
        return state;
  }
}
