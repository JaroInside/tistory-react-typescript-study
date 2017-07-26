import * as types from '../action/actionType';

type State = {
  readonly imageShow: boolean
};

const initialState: State = {
  imageShow: true
};

type Action = { type: typeof types.SHOW_HIDE_IMAGE };

export function image(state: State = initialState, action: Action): State {
  switch (action.type) {
    case types.SHOW_HIDE_IMAGE:
        return {
          ...state, imageShow: !state.imageShow,
        };
    default:
        return state;
  }
}