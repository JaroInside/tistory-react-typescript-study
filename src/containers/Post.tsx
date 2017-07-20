import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Post = (props: RouteComponentProps<{ postId: string}>) => {
  function goNextPost() {
    const currPostId = props.match.params.postId;
    const nextPostId = +props.match.params.postId + 1 + '';
    const { pathname } = props.location;
    const nextPath = pathname.replace(currPostId, nextPostId);
    props.history.replace(nextPath);
  }
  return (
    <div>
      <h3>Post {props.match.params.postId}</h3>
      <p>{new URLSearchParams(props.location.search).get('body')}</p>
      <button onClick={goNextPost}>Next post</button>
    </div>
  );
};

export default Post;