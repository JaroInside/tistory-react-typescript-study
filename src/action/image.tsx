import * as types  from './actionType';

export function imageShowHide(): { type: string; } {
  return {
    type: types.SHOW_HIDE_IMAGE
  };
}