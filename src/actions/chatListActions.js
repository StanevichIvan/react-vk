import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

class ChatListActions {

    getChatList(response) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.GET_DIALOGS,
            payload: response
        });
    }

    selectChat(response) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.SELECT_DIALOG,
            payload: response
        });
    }
}

const chatListActions = new ChatListActions();

export default chatListActions;