import * as React from "react";
import Albums from "./albums";
import Slider from "./slider";

export default class Photos extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.match.params.id);
        this.state = {
            id: props.match.params.id || '11797372'
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({id: nextProps.match.params.id});
        debugger;
    }

    render() {
        return (
            <div>
                <Albums id={this.state.id}/>
                <Slider />
            </div>
        );
    }
}