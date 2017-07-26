import * as types from '../action/actionType';

type State = {
  status: string;
  name: string;
};

const initialState: State = {
  status: 'INIT',
  name: 'Jaro'
};

type Action = {
  type: string;
  name: string;
};

export function async(state: State = initialState, action: Action): State {
  switch (action.type) {
    case types.START_GITHUB_API:
        return Object.assign({}, state, {
          status: 'START'
        });
    case types.END_GITHUB_API:
        return Object.assign({}, state, {
          status: 'END',
          name: action.name
        });
    case types.ERROR_GITHUB_API:
        return Object.assign({}, state, {
          status: 'ERROR'
        });
    default:
        return state;
  }
}