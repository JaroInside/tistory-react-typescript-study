import * as React from 'react';

interface TextProps {
  name: string;
}

export default class Text extends React.Component<TextProps, {}> {
    constructor(props: TextProps) {
        super(props);
        console.log(this.props);
    }

    public render() {
        return (
            <div>
              <h1>Hello {this.props.name}</h1>
            </div>
        );
    }
}