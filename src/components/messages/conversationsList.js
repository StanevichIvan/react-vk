import * as React from "react";
import ChatsStore from '../../stores/chatsStore';
import ChatListActions from '../../actions/chatListActions';
import ConversationUsersSelect from "./conversationUsersSelect";

export default class ConversationList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dialogs: []};
        ChatListActions.getChatList();
        this.reciveList = this.reciveList.bind(this);
    }

    componentDidMount() {
        ChatsStore.addChangeListener(this.reciveList);
    }

    componentWillUnmount() {
        ChatsStore.removeChangeListener(this.reciveList);
    }

    reciveList() {
        this.setState({dialogs: ChatsStore.getAllChats()});
    }

    chatSelect(dialog) {
        ChatListActions.selectChat(dialog);
    }

    render() {
        const list = this.state.dialogs.map((dialog, i) => {
            return (<div className="conversation__message new" onClick={() => {
                this.chatSelect(dialog)
            }} key={i}>
                <img className="conversation__avatar" src={dialog.user.photo} alt=""/>
                <div className="conversation__message-info">
                    <h4 className="conversation__name">{dialog.user.firstName}
                        {dialog.user.lastName}</h4>
                    <p className="conversation__message-text">{dialog.body}</p>
                </div>
                <div className="conversation__message-info">
                    <h4 className="conversation__name conversation__name_right">
                        <span className="conversation__message-count">{dialog.out}</span>
                        <span className="conversation__message-time">{dialog.time}</span>
                    </h4>
                    <p className="conversation__message-text conversation__name_right">
                        <i className="conversation__attachment"/>
                    </p>
                </div>
            </div>)
        });

        return (<div>
            <ConversationUsersSelect/>
            {list}
        </div>);
    }
}