import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from "../constants/actionTypes";

let PhotosActions = {

    getAlbums: (id) => {
        AppDispatcher.handleViewAction({
            type: ActionTypes.GET_ALBUMS,
            payload: {
                id: id
            }
        });
    },

    getAlbumPhotos: (userId, albumId) => {
        AppDispatcher.handleViewAction({
            type: ActionTypes.GET_ALBUM_PHOTOS,
            payload: {
                userId: userId,
                albumId: albumId
            }
        });
    },

    clearPhotosStorage: () => {
        AppDispatcher.handleViewAction({
            type: ActionTypes.CLEAR_PHOTOS_STORAGE,
            payload: {}
        });
    }
};

export default PhotosActions;