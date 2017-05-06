import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import PhotosService from '../services/photos';

const CHANGE_EVENT = 'change';
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

    getAlbums() {
        return albums;
    }

    getAllPhotos() {
        return photos;
    }
}

const photosStore = new PhotosStore();
export default photosStore;

AppDispatcher.register((payload) => {

    const actionType = payload.action.type;
    const data = payload.action.payload;

    switch (actionType) {
        case ActionTypes.GET_PHOTOS:

            PhotosService.getPhotos({}, 1112312341)
                .then((res) => {

                });

            break;

        case ActionTypes.GET_ALBUM_PHOTOS:

            PhotosService.getAlbumPhotos({} , data.userId, data.albumId)
                .then((res) => {
                    photos = res;
                    photosStore.emitChange();
                });
            break;

        case ActionTypes.GET_ALBUMS:
            PhotosService.getAlbums({}, data.id)
                .then((res) => {
                    albums = res;
                    photosStore.emitChange();
                });

            break;
    }

});