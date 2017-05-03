import * as React from "react";
import ChatsStore from '../../stores/chatsStore';
import ChatListActions from '../../actions/chatListActions';

export default class ConversationList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dialogs: []};
    }

    componentDidMount() {
        ChatsStore.addChangeListener(this.reciveList.bind(this));
        ChatListActions.getChatList();
    }

    componentWillUnmount() {
        ChatsStore.removeChangeListener(this.reciveList.bind(this));
    }

    reciveList() {
        this.setState({dialogs: ChatsStore.getAllChats()});
    }

    render() {

        //TODO fix map bug
        const list = this.state.dialogs.map((dialog) => {
            <div className="conversation__message new">
                <img className="conversation__avatar" src={dialog.user.photo}/>
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
            </div>
        });

        console.log(list);

        return (<div>{list}</div>);
    }
}