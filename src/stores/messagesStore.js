import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/appDispatcher';

var CHANGE_EVENT = 'change';

class Store extends EventEmitter {

    constructor() {
        super();
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

AppDispatcher.register(()=>{
    console.log(1);
});

Store.dispatchToken = null;

export default new Store();