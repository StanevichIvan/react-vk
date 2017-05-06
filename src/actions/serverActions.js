import AppDispatcher from '../dispatcher/appDispatcher';

let ServerActions = {
    getDialogs: (payload) => {
        AppDispatcher.handleViewAction(payload);
    },

    longPollNewAction: (payload) => {
        AppDispatcher.handleServerAction(payload);
    }
};

export default ServerActions;