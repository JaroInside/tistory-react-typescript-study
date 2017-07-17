import * as React from 'react';

interface HelloFormProps {
  name: string;
  handleChange(e: {}): void;
}

export default class HelloForm extends React.Component<HelloFormProps, {}> {
    constructor(props: HelloFormProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <input 
                    value={this.props.name}
                    onChange={e => this.props.handleChange(e)}
                />
            </div>
        );
    }
}