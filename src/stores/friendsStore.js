import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import UserService from '../services/user';

const CHANGE_EVENT = 'change';
let friends = [];

class FriendsStore extends EventEmitter {

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getAllFriends() {
        return friends;
    }
}

const friendsStore = new FriendsStore();

AppDispatcher.register((payload) => {

    const actionType = payload.action.actionType;
    const data = payload.action.payload;

    switch (actionType) {
        case ActionTypes.GET_FRIENDS:
            UserService.getFriends({})
                .then((res) => {
                    friends = res;
                    friendsStore.emitChange();
                });
            break;

        case ActionTypes.SEARCH_FRIENDS:
            UserService.searchFriends({} , data )
                .then((res) => {
                    friends = res;
                    friendsStore.emitChange();
                });
            break;

        default:
            break;
    }
});

export default friendsStore;