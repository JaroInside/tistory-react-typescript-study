import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { delayImage } from '../action/image';

const image = require('./test.jpeg');

interface ImageProps {
  image: boolean;
}

const Image: React.SFC<ImageProps & ReactRedux.DispatchProp<{}>> = (props) => {
  return (
    <div className="Image">
      { props.image ? 
      <img src={image} className="Test-image" alt="jaro" /> :
      null }
      <br/>
      <button onClick={() => props.dispatch(delayImage())}>이미지 버튼</button>
    </div>
  );
};

const mapStateToProps = (state: { image: boolean; }) => {
  return {
    image: state.image,
  };
};

const { connect } = ReactRedux;

const ImageContainer = connect(
  mapStateToProps,
)(Image);

export default ImageContainer;