import * as React from 'react';

interface HelloContentProps {
  Test: JSX.Element;
}

export default class HelloContent extends React.Component<HelloContentProps, {}> {
    constructor(props: HelloContentProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                {this.props.Test}
            </div>
        );
    }
}