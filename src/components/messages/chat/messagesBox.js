import * as React from "react";
import Message from "./message";

export default class MessagesBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            messages: [{"img": '', body: 'text'}]
        };
    }

    render() {
        return (
            <div className="chart__messages" id="messages-container">
                {this.state.id}
                {this.state.messages.map((message, i) => {
                    return <Message message={message} key={i}/>;
                })}
            </div>
        );
    }
}