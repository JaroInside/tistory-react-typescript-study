import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Store } from 'redux';

export default class Provider extends React.Component<{ store: Store<{ age: number; }>; children: JSX.Element; }, {}> {

  public static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() {
    return {
      store: this.props.store
    }; 
  }
  render() {
    return this.props.children;
  }
}