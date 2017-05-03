import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import ChatsService from "../services/chats";

const CHANGE_EVENT = 'change';
let chats = [];

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
}

const chatsStore = new ChatsStore();

AppDispatcher.register((payload) => {
    const type = payload.source;
    const action = payload.action;

    switch (action.actionType) {
        case ActionTypes.GET_DIALOGS:
            ChatsService.getDialogs({}).then((res) => {
                chats = res;
                chatsStore.emitChange();
            });
    }
});

export default chatsStore;