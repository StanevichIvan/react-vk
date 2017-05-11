import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

class FriendsActions {

    getFriends(response) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.GET_FRIENDS,
            payload: response
        });
    }

    searchfriends(data) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.SEARCH_FRIENDS,
            payload: data
        });
    }
}

const friendsActions = new FriendsActions();
export default friendsActions;