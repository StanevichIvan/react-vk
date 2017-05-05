import * as React from "react";
import ConversationList from "./conversationsList";
import Chat from "./chat/chat";

export default class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dialog: null};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="content__router-outlet router-outlet">
                <div className="content__right-column">
                    <ConversationList/>
                </div>
                <div className="content__text-container">
                    <Chat dialog={this.state.dialog}/>
                </div>
            </div>
        );
    }
}