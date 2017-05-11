import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import ChatsService from "../services/chats";

const CHANGE_EVENT = 'change';
let chats = [];
let selectedChat = null;

class ChatsStore extends EventEmitter {

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getAllChats() {
        return chats;
    }

    getSelectedChat() {
        return selectedChat;
    }
}

const chatsStore = new ChatsStore();

AppDispatcher.register((payload) => {
    const action = payload.action;

    switch (action.actionType) {
        case ActionTypes.GET_DIALOGS:
            ChatsService.getDialogs({}).then((res) => {
                chats = res;
                chatsStore.emitChange();
            });
            break;

        default:
            break;
    }

    switch (action.type) {
        case ActionTypes.SELECT_DIALOG:
            selectedChat = action.payload;
            break;

        case ActionTypes.START_MULTI_USER_CHAT:
            ChatsService.createMultiuserChat({}, action.payload);
            ChatsService.getDialogs({}).then((res) => {
                chats = res;
                chatsStore.emitChange();
            });
            break;

        default:
            break;
    }
});

export default chatsStore;