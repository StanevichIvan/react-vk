import {API} from '../constants/api';
import Dialog from "../models/Dialog";
import Document from "../models/Document";
import UserService from './user';

class MessagesService {

    constructor() {
        this.TOKEN = API.TOKEN;
        this.BASE_URL = API.BASE_URL;
        this.userId = API.userId;
    }

    getMessages(tokenCancel, uid) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET",
            `${this.BASE_URL}method/messages.getHistory?access_token=${this.TOKEN}&rev=1&count=200&time_offset=0&user_id=${uid}`);

        let messages;

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                let json = JSON.parse(xhr.responseText).response;
                messages = json.map(item => new Dialog(item));
                resolve(messages);
            };

            tokenCancel.cancel = function () {
                xhr.abort();
                reject(new Error("Cancelled"));
            };
            xhr.onerror = reject;
            xhr.send();

        }).then((res) => {
            // get images by id
            let listIds = [];
            res.forEach((item) => {
                if (!(listIds.includes(item.fromID)) && item.fromID !== '') {
                    listIds.push(item.fromID);
                }
            });

            return UserService.getUsersProfiles({}, listIds.toString());
        }).then((res) => {
            // create dictionary for {id, src}[]
            let avatarDictionary = {};
            res.forEach((item) => {
                avatarDictionary[item.uid] = item.photo_50;
            });

            // modify messages
            messages.forEach((item) => {
                item.img = avatarDictionary[item.fromID];
            });

            return messages;
        });
    }

    getChatMessages(tokenCancel, id) {
        let xhr = new XMLHttpRequest();
        const chatID = +2000000000 + +id;
        xhr.open("GET",
            `${this.BASE_URL}method/messages.getHistory?access_token=${this.TOKEN}&rev=1&peer_id=${chatID}&count=200&v=5.38`);

        let messages;

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                let json = JSON.parse(xhr.responseText).response;
                messages = json.items.map(item => new Dialog(item));
                resolve(messages);
            };

            tokenCancel.cancel = function () {
                xhr.abort();
                reject(new Error("Cancelled"));
            };
            xhr.onerror = reject;
            xhr.send();
        }).then((res) => {
            // get images by id
            let listIds = [];
            res.forEach((item) => {
                if (!(listIds.includes(item.fromID)) && item.fromID !== '') {
                    listIds.push(item.fromID);
                }
            });

            return UserService.getUsersProfiles({}, listIds.toString());
        }).then((res) => {
            // create dictionary for {id, src}[]
            let avatarDictionary = {};
            res.forEach((item) => {
                avatarDictionary[item.uid] = item.photo_50;
            });

            // modify messages
            messages.forEach((item) => {
                item.img = avatarDictionary[item.fromID];
            });

            return messages;
        });
    }

    getMessageById(tokenCancel, ids) {

        let xhr = new XMLHttpRequest();
        xhr.open("GET", `${API.BASE_URL}method/messages.getById?access_token=${API.TOKEN}&message_ids=${ids}`);

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


    sendChatMessage(tokenCancel, id, message) {

        let xhr = new XMLHttpRequest();
        xhr.open("GET", `${this.BASE_URL}method/messages.send?access_token=${this.TOKEN}&chat_id=${id}&message=${message}`);

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

    /**
     * Send message to user with id
     * @param uid
     * @param message
     * @returns {*}
     */
    sendMessage(uid, message) {
        return fetch(`${this.BASE_URL}method/messages.send?access_token=${this.TOKEN}&user_id=${uid}&message=${message}`,
            {method: 'POST'});
    }

    getDocs(tokenCancel) {

        let xhr = new XMLHttpRequest();

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                let json = JSON.parse(xhr.responseText).response;
                let arr = [];

                json.forEach((item) => {
                    if (typeof item === 'object') {
                        arr.push(new Document(item));
                    }
                });

                resolve(arr);
            };

            tokenCancel.cancel = function () {
                xhr.abort();
                reject(new Error('Cancelled'));
            };

            xhr.onerror = reject;
            xhr.open('GET', `${API.BASE_URL}method/docs.get?access_token=${API.TOKEN}`, true);
            xhr.send();
        });
    };

    sendDocMessage(tokenCancel, doc, id) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `${API.BASE_URL}method/messages.send?access_token=${API.TOKEN}&user_id=${id}&attachment=doc${doc.ownerID}_${doc.mediaID}`, true);

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                let json = JSON.parse(xhr.responseText).response;

                resolve(json);
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

const messagesService = new MessagesService();
export default messagesService;