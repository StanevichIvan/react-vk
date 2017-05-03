import AppDispatcher from '../dispatcher/appDispatcher';

let ServerActions = {
    getDialogs: (payload) => {
        AppDispatcher.handleViewAction(payload);
    }
};

export default ServerActions;