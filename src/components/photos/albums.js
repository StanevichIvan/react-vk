import * as React from "react";

export default class Albums extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        };
    }

    render() {
        return (
            <h1>Albums {this.state.id}</h1>
        );
    }
}
