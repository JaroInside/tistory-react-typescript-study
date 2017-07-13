import * as React from 'react';

interface StateLessProps {
  name?: string;
}

const StatelessComponent: React.SFC<StateLessProps> = ({name= 'JaroInside' , children}) => {
  return (
    <h2>{name} - {children}</h2>
  );
};

export default StatelessComponent;