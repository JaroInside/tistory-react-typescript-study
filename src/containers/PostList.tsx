import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { Post } from '.';

const PostList = (props: RouteComponentProps<{}>) => {

  return (
    <div>
      <Route exact={true} path={props.match.url} render={() => <h3>포스트 목록</h3>}/>
      <Route path={`${props.match.url}/:postId`} component={Post}/>
    </div>
  );
};

export default PostList;