import AppDispatcher from './appDispatcher';
import ActionTypes from '../constants/actionTypes';
let token = null;

describe('App dispatcher dispatching', () => {

    beforeEach(() => {
        if (token !== null) {
            AppDispatcher.unregister(token);
        }
    });

    it('Handle server event', () => {
        const action = {
            type: ActionTypes.LONG_POLL_MESSAGE,
            payload: {}
        };

        token = AppDispatcher.register((payload) => {
            expect(payload.source).toBe(ActionTypes.SERVER_ACTION);
            expect(payload.action).toMatchObject(action);
        });

        AppDispatcher.handleServerAction(action);
    });

    it('Handle view action', () => {
        const action = {
            type: ActionTypes.LONG_POLL_MESSAGE,
            payload: {}
        };

        token = AppDispatcher.register((payload) => {
            expect(payload.source).toBe(ActionTypes.VIEW_ACTION);
            expect(payload.action).toMatchObject(action);
        });

        AppDispatcher.handleViewAction(action);
    });
});