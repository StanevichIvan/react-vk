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
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        FriendsActions.getFriends();
        FriendsStore.addChangeListener(this.getFriends);
    }

    componentWillUnmount() {
        FriendsStore.removeChangeListener(this.getFriends);
    }

    getFriends() {
        this.setState({
            friends: FriendsStore.getAllFriends()
        });
    }

    search(event) {

        event.preventDefault();

        const searchText = this.input.value;
        FriendsActions.searchfriends(searchText);
    }

    render() {
        let friends = this.state.friends.slice(1);

        return (
            <div className="friends-list-container">
                <form onSubmit={this.search}>
                    <input ref={(input) => {
                        this.input = input;
                    }} type="text"/>
                    <input onClick={this.search} type="button" name="search" value="Search"/>
                </form>

                {friends.map((item, i) => {
                    return <Friend user={item} key={i}/>
                })
                }
            </div>
        );
    }
}
