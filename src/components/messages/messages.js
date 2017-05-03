import * as React from "react";
import ConversationList from "./conversationsList";
import Chat from "./chat/chat";
import ServerActions from '../../actions/serverActions';
import messagesStore from '../../stores/messagesStore';

export default class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state= {updateCount: 0};
    }

    getInitialState() {
        return {
            messages: messagesStore.getAllMessages()
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    messagesStoreUpdate() {
        this.setState({updateCount: ++this.state.updateCount});
    }

    render() {
        return (
            <div className="content__router-outlet router-outlet">
                <div className="content__right-column">
                    <ConversationList/>
                </div>
                <div className="content__text-container">
                    <Chat/>
                </div>
            </div>
        );
    }
}