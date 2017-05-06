import * as React from "react";

export default class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albumId: null
        };
    }

    render() {
        return (
            <h1>Slider {this.state.id}</h1>
        );
    }
}

