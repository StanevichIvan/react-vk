import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from "../constants/actionTypes";

let MessagesActions = {
    getDialogs: (payload) => {
        AppDispatcher.handleViewAction(payload);
    },

    sendMessage: (dialog, message) => {
        AppDispatcher.handleViewAction({
            type: ActionTypes.SEND_MESSAGE,
            payload: {
                dialog: dialog,
                body: message
            }
        });
    },

    getMessages: (id, dialogType) => {
        AppDispatcher.handleViewAction({
            type: ActionTypes.GET_MESSAGES,
            payload: {
                id: id,
                dialogType: dialogType
            }
        });
    }
};

export default MessagesActions;
