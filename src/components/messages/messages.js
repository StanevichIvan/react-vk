import * as React from "react";
import ConversationList from "./conversationsList";
import Chat from "./chat/chat";

export default class Messages extends React.Component {

    render() {
        return (
            <div className="content__router-outlet router-outlet">
                <div className="content__right-column">
                    <ConversationList name="SimpleName"/>
                </div>
                <div className="content__text-container">
                    <Chat/>
                </div>
            </div>
        );
    }
}