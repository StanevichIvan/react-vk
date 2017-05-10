import Chat from "../models/Chat";
import Dialog from "../models/Dialog";
import {API} from '../constants/api';

class ChatsService {
    constructor() {
        this.TOKEN = API.TOKEN;
        this.BASE_URL = API.BASE_URL;
        this.userId = API.userId;
        // localStorage.setItem('currentUser', JSON.stringify({id: this.userId}));
    }

    getDialogs(tokenCancel) {
        let dialogs;

        let xhr = new XMLHttpRequest();
        xhr.open("GET", this.BASE_URL + 'method/messages.getDialogs?access_token=' + this.TOKEN);

        return new Promise((resolve, reject) => {
            xhr.onload = () => {
                let json = JSON.parse(xhr.responseText).response;
                let idList = json.map((item) => {
                    if (item.uid)
                        return item.uid;
                    return '';
                });
                dialogs = json;

                resolve(this.getUsersProfiles(tokenCancel, idList));
            };

            tokenCancel.cancel = function () {  // SPECIFY CANCELLATION
                xhr.abort(); // abort request
                reject(new Error("Cancelled")); // reject the promise
            };
            xhr.onerror = reject;
            xhr.send();
        })
            .then((res) => {
                return this.mergeDialogsInfo(res, dialogs);
            });
    }

    mergeDialogsInfo(userData, dialogs) {
        let diaolgsBundle = [];

        dialogs.forEach((item) => {
            if (typeof item === 'object') {
                userData.forEach((user) => {
                    if (item.uid === user.uid) {
                        let resObj = Object.assign({}, item);
                        resObj.user = user;

                        if (resObj.hasOwnProperty('chat_id')) {
                            diaolgsBundle.push(new Chat(resObj));
                        } else {
                            diaolgsBundle.push(new Dialog(resObj));
                        }
                    }
                });
            }
        });
        return diaolgsBundle;
    }

    getUsersProfiles(tokenCancel, listOfIds) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", this.BASE_URL + 'method/users.get?access_token=' + this.TOKEN + "&fields=photo_50&user_ids=" + listOfIds);

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
    }
}

const chatsService = new ChatsService();
export default chatsService;