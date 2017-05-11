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
            type: ActionTypes.SELECT_DIALOG,
            payload: response
        });
    }

    startMultichat(list){
        AppDispatcher.handleViewAction({
            type: ActionTypes.START_MULTI_USER_CHAT,
            payload: list
        });
    }
}

const chatListActions = new ChatListActions();

export default chatListActions;