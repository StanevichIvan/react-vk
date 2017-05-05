import * as React from "react";
import Form from "./form";
import MessagesBox from "./messagesBox";

export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialog: props.dialog
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({dialog: nextProps.dialog});
    }

    render() {
        return (
            <secion className="chart">
                <MessagesBox />
                <Form dialog={this.state.dialog}/>
            </secion>
        );
    }
}