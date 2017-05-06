import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from "../constants/actionTypes";

let ServerActions = {
    getDialogs: (payload) => {
        AppDispatcher.handleViewAction(payload);
    },

    longPollNewAction: (payload) => {
        AppDispatcher.handleServerAction(payload);
    },

    newMessage: (payload) => {
        AppDispatcher.handleServerAction({
            type: ActionTypes.LONG_POLL_MESSAGE,
            payload: payload
        });
    }
};

export default ServerActions;