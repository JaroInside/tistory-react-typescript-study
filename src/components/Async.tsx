import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as request from 'superagent';

import { startGithubApi, errorGithubApi, endGithubApi } from '../action/async';

interface AsyncProps {
  status: string;
  name: string;
}

const Async: React.SFC<AsyncProps & ReactRedux.DispatchProp<{}>> = (props) => {
  function getCountFromGithub(): void {
    const dispatch: ReactRedux.Dispatch<{}> = props.dispatch;
    dispatch(startGithubApi());
    request.get('https://api.github.com/users')
    .end((err, res) => {
      if (err) {
        return dispatch(errorGithubApi());
      }
      return dispatch(endGithubApi(res.body[0].login));
    });
  }
  return (
    <div className="Async">
      <h1>{props.status}</h1>
      <h2>{props.name}</h2>
      <button onClick={() => getCountFromGithub()}>깃헙 API 비동기 호출</button>
    </div>
  );
};

const mapStateToProps = (state: { async: { status: string; name: string; }}) => {
  return {
    status: state.async.status,
    name: state.async.name
  };
};

const { connect } = ReactRedux;

const AsyncContainer = connect(
  mapStateToProps
)(Async);

export default AsyncContainer;
