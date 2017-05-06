import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/appDispatcher';

let photos = [];
let albums = [];

class PhotosStore extends EventEmitter {

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getAllPhotos() {
        return photos;
    }
}

const photosStore = new PhotosStore();

AppDispatcher.register((payload)=> {

    const actionType = payload.action.type;
    const messageData = payload.action.payload;



});