import * as React from 'react';

interface StateLessProps {
  name?: string;
}

const defaultProps: StateLessProps = {
    name: 'JaroInside'
};

const StatelessComponent: React.SFC<StateLessProps> = (props) => {
  return (
    <h2>{props.name} - {props.children}</h2>
  );
};
StatelessComponent.defaultProps = defaultProps;

export default StatelessComponent;