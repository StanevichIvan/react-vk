import AppDispatcher from './appDispatcher';
import ActionTypes from '../constants/actionTypes';
let token = null;

describe('App dispatcher test', () => {

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
            expect(payload.source).toBe('SERVER_ACTION');
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
            expect(payload.source).toBe('VIEW_ACTION');
            expect(payload.action).toMatchObject(action);
        });

        AppDispatcher.handleViewAction(action);
    });
});