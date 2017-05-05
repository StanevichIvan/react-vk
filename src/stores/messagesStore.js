import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import MessagesService from '../services/messages';
import Chat from "../models/Chat";
import Dialog from "../models/Dialog";

const CHANGE_EVENT = 'change';
let messages = [];
let longPollCreated= false;

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

    const actionType = payload.action.type;
    const messageData = payload.action.payload;

    switch (actionType) {

        case ActionTypes.SEND_MESSAGE:
            if (messageData.dialog instanceof Chat) {
                MessagesService.sendChatMessage({}, messageData.dialog.id, messageData.body);
            } else if (messageData.dialog instanceof Dialog) {
                MessagesService.sendMessage(messageData.dialog.user.id, messageData.body);
            }
            break;
        case ActionTypes.GET_MESSAGES:
            if (messageData.dialogType === 'Chat') {
                MessagesService.getChatMessages({}, messageData.id)
                    .then((res) => {
                        messages = null;
                        messages = res;
                        messagesStore.emitChange();
                    });
            } else if (messageData.dialogType === 'Dialog') {
                MessagesService.getMessages({}, messageData.id)
                    .then((res) => {
                        messages = null;
                        messages = res;
                        messagesStore.emitChange();
                    });
            }
            break;

        case ActionTypes.SELECT_DIALOG:

            if (messageData instanceof Chat) {
                MessagesService.getChatMessages({}, messageData.id)
                    .then((res) => {
                        messages = null;
                        messages = res;
                        messagesStore.emitChange();
                    });
            } else if (messageData instanceof Dialog) {
                MessagesService.getMessages({}, messageData.user.id)
                    .then((res) => {
                        messages = null;
                        messages = res;
                        messagesStore.emitChange();
                    });
            }
            break;
    }

});

export default messagesStore;