import * as React from "react";
import Friend from './friend';
import FriendsActions from '../../actions/friendsActions';
import FriendsStore from '../../stores/friendsStore';

export default class Friends extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
        this.getFriends = this.getFriends.bind(this);
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
            friends: FriendsStore.getAllFriends()
        });
    }

    render() {
        return (
            <div className="friends-list-container">
                {this.state.friends.map((item, i) => {
                    return <Friend user={item} key={i}/>
                })
                }
            </div>
        );
    }
}
