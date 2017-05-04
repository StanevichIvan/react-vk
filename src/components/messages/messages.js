import * as React from "react";
import ConversationList from "./conversationsList";
import Chat from "./chat/chat";

export default class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dialog: null};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    chatSelect(selectedDialog) {
        this.setState({
            dialog: selectedDialog
        });
    }

    render() {
        return (
            <div className="content__router-outlet router-outlet">
                <div className="content__right-column">
                    <ConversationList chatSelect={this.chatSelect.bind(this)}/>
                </div>
                <div className="content__text-container">
                    {this.state.dialog ? (
                        <Chat dialog={this.state.dialog}/>
                    ) : (<div></div>)}
                </div>
            </div>
        );
    }
}