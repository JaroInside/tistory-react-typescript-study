
// 컴바인 리듀서 안쓰고 시도해 본 결과 -> 오류발생

/*
import * as types from '../action/actionType';

import { ageApp } from './ageApp';
import { image } from './image';

type State = {
  readonly age: number,
  readonly imageShow: boolean
};

const initialState: State = {
  age: 30,
  imageShow: true
};

type Action = { type: typeof types.ADD_AGE } | { type: typeof types.SHOW_HIDE_IMAGE };

export function combine(state: State = initialState, action: Action): State {
  return {
    ageApp: ageApp(state.age, action),
    image: image(state.imageShow, action),
  };
  
}
*/

// 컴바인 리듀서 쓰고 시도해 본 결과 -> 컴파일 오류는 없지만 작동하지 않음

/*
import { combineReducers } from 'redux';

import { ageApp } from './ageApp';
import { image } from './image';

export const combine = combineReducers<{ age: number; imageShow: boolean; }>({
  ageApp,
  image
});
*/

// 컴바인 리듀서 안쓰고 시도해 본 결과 -> 작동함

import * as types from '../action/actionType';

export function combine(state: { age: number, imageShow: boolean } = { age: 30, imageShow: true }, action: { type: string; }): { age: number, imageShow: boolean } {
  switch (action.type) {
    case types.ADD_AGE:
        return {
          ...state, age: state.age + 1,
        };
    case types.SHOW_HIDE_IMAGE:
        return {
          ...state, imageShow: !state.imageShow,
        };
    default:
        return state;
  }
}
