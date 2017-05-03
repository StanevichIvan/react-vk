import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

const CHANGE_EVENT = 'change';
let messages = [];
let ID;
let type;

class MessagesStore extends EventEmitter {

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getAllMessages() {
        return messages;
    }
}

const messagesStore = new MessagesStore();

AppDispatcher.register((payload) => {
    const type = payload.source;

    switch (type) {
        case ActionTypes.GET_DIALOGS:
            messagesStore.emitChange();
    }
});

export default messagesStore;