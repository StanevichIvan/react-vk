import React from 'react';
import FriendsActions from '../../actions/friendsActions';
import ChatListActions from '../../actions/chatListActions';
import FriendsStore from '../../stores/friendsStore';

export default class ConversationUsersSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            selected: [],
            show: false
        };

        this.showPopup = this.showPopup.bind(this);
        this.getFriends = this.getFriends.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.startChat = this.startChat.bind(this);
    }

    componentDidMount() {
        FriendsActions.getFriends();
        FriendsStore.addChangeListener(this.getFriends);
    }

    componentWillUnmount() {
        // FriendsActions.removeChangeListener(this.getFriends);
    }

    getFriends() {
        this.setState({
            users: FriendsStore.getAllFriends()
        });
    }

    showPopup() {
        this.setState({
            show: !this.state.show
        });
    }

    inputChange(e, item) {
        if (e.target.checked) {
            let selected = Array.from(this.state.selected);
            selected.push(item.id);

            this.setState({selected: selected});

        } else {
            let selected = Array.from(this.state.selected);
            selected.splice(selected.indexOf(item.id), 1);

            this.setState({selected: selected});
        }
    }

    startChat() {
        this.setState({show: false});
        ChatListActions.startMultichat(this.state.selected);
    }

    render() {

        return (
            <div>
                <button onClick={this.showPopup}>
                    {!this.state.show ? 'Show ' : 'Hide ' }
                    list
                </button>
                { this.state.selected.length !== 0 ? (<button onClick={this.startChat}>Start chat</button>) : <div/>}

                { this.state.show
                    ? (this.state.users.map((user, i) => {
                        return (
                            <div key={i}>
                                <label>
                                    <input type="checkbox" id={user.id} value={user.id} onChange={ (e) => {
                                        this.inputChange(e, user);
                                    }}/>
                                    {`${user.firstName} ${user.lastName}`}
                                </label>
                            </div>
                        );
                    }))
                    : (<h1/>)
                }
            </div>
        );
    }

}