import * as React from 'react';
import { connect } from 'react-redux';
import { imageShowHide } from '../action/image';

const image = require('./test.jpeg');

interface ImageProps {
  imageShow: boolean;
  onShowClick(): void;
}

const Image: React.SFC<ImageProps> = (props) => {
  return (
    <div className="Image">
      { props.imageShow ? 
      <img src={image} className="Test-image" alt="jaro" /> :
      null }
      <br/>
      <button onClick={props.onShowClick}>이미지 버튼</button>
    </div>
  );
};

const mapStateToProps = (state: { imageShow: boolean; }) => {
  return {
    imageShow: state.imageShow,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onShowClick: (): void => {
      dispatch(imageShowHide());
    }
  };
};

const ImageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);

export default ImageContainer;
