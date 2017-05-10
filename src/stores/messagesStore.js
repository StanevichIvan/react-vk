import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import MessagesService from '../services/messages';
import Chat from "../models/Chat";
import Dialog from "../models/Dialog";
import {API} from "../constants/api";

const CHANGE_EVENT = 'change';
let messages = [];
let dialog = {};
let documents = [];

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

    getDocuments() {
        return documents;
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
                        messages = res;
                        messagesStore.emitChange();
                    });
            } else if (messageData.dialogType === 'Dialog') {
                MessagesService.getMessages({}, messageData.id)
                    .then((res) => {
                        messages = res;
                        messagesStore.emitChange();
                    });
            }
            break;

        case ActionTypes.SELECT_DIALOG:

            if (messageData instanceof Chat) {
                MessagesService.getChatMessages({}, messageData.id)
                    .then((res) => {
                        messages = res;
                        messagesStore.emitChange();
                        dialog = messageData;
                    });
            } else if (messageData instanceof Dialog) {
                MessagesService.getMessages({}, messageData.user.id)
                    .then((res) => {
                        messages = res;
                        messagesStore.emitChange();
                        dialog = messageData;
                    });
            }
            break;

        case ActionTypes.LONG_POLL_MESSAGE:
            let arr = [];

            messageData.forEach((item) => {
                let obj = {
                    body: item[6],
                    user: item[3],
                    out: 1,
                    from_id: item[3],
                    messageId: item[1]
                };
                // out or in message, vk api specification
                obj.out = item[4] === parseInt(API.userId, 10) ? 0 : 1;
                arr.push(new Dialog(obj));
            });

            let updatedDialog;

            MessagesService.getMessageById({}, arr[0].messageId)
                .then((res) => {
                    let resObj = res[1];

                    if (resObj.hasOwnProperty('chat_id')) {
                        resObj.from_id = res[1].uid;
                        updatedDialog = new Chat(resObj);
                    } else {
                        resObj.from_id = res[1].uid;
                        updatedDialog = new Dialog(resObj);
                    }

                    if (dialog instanceof Chat && updatedDialog instanceof Chat) {
                        if (updatedDialog.id === dialog.id) {
                            messages = messages.concat(arr);
                            messagesStore.emitChange();
                        }
                    } else if (dialog instanceof Dialog && updatedDialog instanceof Dialog) {
                        if (updatedDialog.fromID === dialog.user.id) {
                            messages = messages.concat(arr);
                            messagesStore.emitChange();
                        }
                    }
                });
            break;

        case ActionTypes.GET_DOCUMENTS:

            MessagesService.getDocs({})
                .then((res) => {
                    documents = res;
                    messagesStore.emitChange();
                });
            break;

        case ActionTypes.SEND_DOCUMENT:

            if (dialog instanceof Dialog)
                MessagesService.sendDocMessage({}, messageData.body, dialog.user.id);
            break;

        default:
            break;
    }

});

export default messagesStore;