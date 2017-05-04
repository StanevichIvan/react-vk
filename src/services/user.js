import Dialog from "../models/Dialog";
import {API} from '../constants/api';

class UserService {
    constructor() {
        this.TOKEN = API.TOKEN;
        this.BASE_URL = API.BASE_URL;
        this.userId = API.userId;
    }

    /**
     * Loads data users profiles
     * @param tokenCancel
     * @param listOfIds
     * @returns {Promise}
     */
    getUsersProfiles(tokenCancel, listOfIds) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", BASE_URL + 'method/users.get?access_token=' + TOKEN + "&fields=" + "photo_50" + "&user_ids=" + listOfIds);

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                let json = JSON.parse(xhr.responseText).response;
                resolve(json);
            };

            tokenCancel.cancel = function () {
                xhr.abort();
                reject(new Error("Cancelled"));
            };
            xhr.onerror = reject;
            xhr.send();
        });
    };

    getFriends(tokenCancel) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `${BASE_URL}method/friends.get?access_token=${TOKEN}&fields=photo_50,last_seen,nickname`);

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                let json = JSON.parse(xhr.responseText).response;
                resolve(json.map(item => new User(item)));
            };

            tokenCancel.cancel = function () {
                xhr.abort();
                reject(new Error("Cancelled"));
            };
            xhr.onerror = reject;
            xhr.send();
        });
    };


    searchFriends (tokenCancel, name) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `${BASE_URL}method/friends.search?access_token=${TOKEN}&q=${name}&fields=photo_50,last_seen,nickname`, true);

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                let json = JSON.parse(xhr.responseText).response;

                resolve(json.map(item => {
                    if (typeof  item === 'object')
                        return new User(item);
                    return '';
                }));
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

const userService = new UserService();
export default userService;