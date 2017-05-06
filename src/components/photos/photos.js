import * as React from "react";
import Albums from "./albums";
import Slider from "./slider";

export default class Photos extends React.Component {

    constructor() {
        super();
        this.state = {
            id: '12312312423'
        };
    }


    render() {
        return (
            <h1>Photos component
                <Albums id={this.state.id}/>
                <Slider />
            </h1>
        );
    }
}