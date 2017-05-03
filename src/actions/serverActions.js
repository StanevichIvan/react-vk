import {AppDispatcher} from '../dispatcher/appDispatcher';
import ActionTypes from '../actions/serverActions';

export default ServerActions = {
    getDialogs: () => {
        AppDispatcher.handleServerAction();
    }
};
