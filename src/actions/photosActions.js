import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from "../constants/actionTypes";

let MessagesActions = {

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