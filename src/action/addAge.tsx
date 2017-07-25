import * as types  from './actionType';

export function addAge(): { type: string; } {
  return {
    type: types.ADD_AGE
  };
}
