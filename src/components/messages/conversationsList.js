import * as React from "react";

export default class ConversationList extends React.Component {

    render() {
        return (
            <div className="conversation">
                <h1>Conversation list component {this.props.name} </h1>
            </div>
        );
    }
}
