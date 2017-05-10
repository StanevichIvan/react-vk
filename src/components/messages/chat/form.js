import * as React from "react";
import MessagesActions from "../../../actions/messagesActions";
import ChatsStore from '../../../stores/chatsStore';
import UploadedDocuments from "./uploadedDocuments";

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialog: props.dialog
        };
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({dialog: nextProps.dialog});
    }

    sendMessage(event) {
        event.preventDefault();
        const message = event.target.message.value;
        const dialog = ChatsStore.getSelectedChat();
        MessagesActions.sendMessage(dialog, message);
    }

    render() {
        return (
            <form className="chart__form" id="chart-form" onSubmit={this.sendMessage}>
                <div className="chart__input-wrap">
                    <div className="chart__input">
                        <input placeholder="Your message" name="message"/>
                        <div className="chart__file-upload">
                            <input id="file-upload" name="image" type="file"/>
                        </div>
                        <UploadedDocuments />
                    </div>
                    <button className="chart__input-button" type="submit">Send</button>
                </div>
                <img className="chart__form-avatar" src={this.senderImg} alt=""/>
            </form>
        );
    }
}
