import * as types from '../action/actionType';

type State = boolean;

const initialState: State = true;

type Action = {
  type: string;
};

export function image(state: State = initialState, action: Action): State {
  switch (action.type) {
    case types.SHOW_HIDE_IMAGE:
        return !state;
    default:
        return state;
  }
}