import * as React from "react";
import Message from "./message";
import MessagesStorage from '../../../stores/messagesStore';
import ChatsStore from '../../../stores/chatsStore';
import MessagesActions from "../../../actions/messagesActions";
import Dialog from "../../../models/Dialog";

export default class MessagesBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialog: null,
            messages: []
        };
        this.getMessages = this.getMessages.bind(this);
    }

    componentDidMount() {
        MessagesStorage.addChangeListener(this.getMessages);
    }

    getMessages() {
        this.setState({
            dialog: ChatsStore.getSelectedChat(),
            messages: MessagesStorage.getAllMessages()
        });
    }

    // TODO find answer: why second list show method not works
    render() {
        return (
            <div className="chart__messages" id="messages-container"
                 ref={(el) => {
                     if (el !== null) {
                         el.scrollTop = el.scrollHeight;
                     }
                 }}>

                {this.state.messages.map((item, i)=> {
                    return (<div className="chart-message" key={i}>
                        <div className="chart-message__avatar">
                            <div className="chart-message__avatar-content active">
                                <img src={item.img} alt=""/>
                                <div className="chart-message__controls">
                                    <span className="chart-message__control chart-message__control_star"/>
                                    <span className="chart-message__control chart-message__control_share"/>
                                </div>
                            </div>
                        </div>
                        <div className="chart-message__time">
                        </div>
                        <div className="chart-message__content">
                            <p className="chart-message__text">
                                {item.body}
                            </p>
                        </div>
                    </div>);
                })}

                {/*{this.state.messages.map((message, i) => {*/}
                    {/*return (<Message message={message} key={i}/>);*/}
                {/*})}*/}
            </div>
        );
    }
}