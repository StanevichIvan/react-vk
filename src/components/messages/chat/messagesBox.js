import * as React from "react";
import Message from "./message";
import MessagesStorage from '../../../stores/messagesStore';
import MessagesActions from "../../../actions/messagesActions";
import Dialog from "../../../models/Dialog";

export default class MessagesBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialog: props.dialog,
            messages: []
        };
        this.getMessages = this.getMessages.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dialog: nextProps.dialog,
            messages: []
        });

        if(this.state.dialog instanceof Dialog){
            MessagesActions.getMessages(nextProps.dialog.user.id, 'Dialog');
        } else {
            MessagesActions.getMessages(nextProps.dialog.id, 'Chat');
        }
    }

    componentDidMount() {
        if(this.state.dialog instanceof Dialog){
            MessagesActions.getMessages(this.state.dialog.user.id, 'Dialog');
        } else {
            MessagesActions.getMessages(this.state.dialog.id, 'Chat');
        }
        MessagesStorage.addChangeListener(this.getMessages);
    }

    componentWillUnmount() {
        MessagesStorage.addChangeListener(this.getMessages);
    }

    getMessages() {
        this.setState({
            dialog: this.state.dialog,
            messages: MessagesStorage.getAllMessages().reverse()
        });
    }

    render() {
        return (
            <div className="chart__messages" id="messages-container"
                 ref={(el)=>{
                     if(el !== null){
                         el.scrollTop = el.scrollHeight;
                     }
                 }}>
                {this.state.messages.map((message, i) => {
                    return <Message message={message} key={i}/>;
                })}
            </div>
        );
    }
}