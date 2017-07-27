import * as types  from './actionType';
import { Dispatch } from 'redux';

export function imageShowHide(): { type: string; } {
  return {
    type: types.SHOW_HIDE_IMAGE
  };
}

export function delayImage() {
  return (dispatch: Dispatch<void>) => {
    setTimeout(
      () => {
        dispatch(imageShowHide()); 
      }, 
      1000
    ); 
  };
}