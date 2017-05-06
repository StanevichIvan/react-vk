import {API} from '../constants/api';
import Photo from "../models/Photo";
import Album from "../models/Album";

class PhotosService {

    getPhotos(tokenCancel, uid) {
        let id = uid;
        if (!id)
            id = userId;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `${API.BASE_URL}method/photos.get?access_token=${API.TOKEN}&owner_id=${id}&album_id=wall`, true);

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                let json = JSON.parse(xhr.responseText).response;

                resolve(json.map(item => new Photo(item)));
            };

            tokenCancel.cancel = function () {
                xhr.abort();
                reject(new Error('Cancelled'));
            };

            xhr.onerror = reject;
            xhr.send();
        });
    }

    getAlbums(tokenCancel, uid) {
        let id = uid;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `${API.BASE_URL}method/photos.getAlbums?access_token=${API.TOKEN}&owner_id=${id}&need_covers=1`, true);

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                let json = JSON.parse(xhr.responseText).response;
                resolve(json.map(item => new Album(item)));
            };

            tokenCancel.cancel = function () {
                xhr.abort();
                reject(new Error('Cancelled'));
            };

            xhr.onerror = reject;
            xhr.send();
        });
    }

    /**
     * Load album photos
     * @param tokenCancel
     * @param uid
     * @param albumId
     * @returns {Promise}
     */
    getAlbumPhotos(tokenCancel, uid, albumId) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `${API.BASE_URL}method/photos.get?access_token=${API.TOKEN}&owner_id=${uid}&album_id=${albumId}`, true);

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                let json = JSON.parse(xhr.responseText).response;
                resolve(json.map(item => new Photo(item)));
            };

            tokenCancel.cancel = function () {
                xhr.abort();
                reject(new Error('Cancelled'));
            };

            xhr.onerror = reject;
            xhr.send();
        });
    };
}