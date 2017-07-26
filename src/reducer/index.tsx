/*
import { age } from './age';
import { image } from './image';

type CombinedState = {
  age: number;
  image: boolean;
};

const initialCombinedState: CombinedState = {
  age: 30,
  image: true
};

type Action = {
  type: string;
};

export function combine(state: CombinedState = initialCombinedState, action: Action): CombinedState {
  return {
    age: age(state.age, action),
    image: image(state.image, action)
  };
}
*/

import { combineReducers } from 'redux';
import { age } from './age';
import { image } from './image';
import { async } from './async';

type CombinedState = {
  age: number;
  image: boolean;
  async: { status: string; name: string; };
};

export const combine = combineReducers<CombinedState>({
  age: age,
  image: image,
  async: async
});
