import {API} from '../constants/api';
import ServerActions from '../actions/serverActions';

let longPollCredentials = {
    server: '',
    key: '',
    ts: ''
};
let longPollCreated = false;

export default function () {

    const BASE_URL = API.BASE_URL;
    const TOKEN = API.TOKEN;

    if (longPollCreated) return;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${BASE_URL}method/messages.getLongPollServer?access_token=${TOKEN}`, true);
    xhr.send();
    xhr.addEventListener("load", function () {
        if (this.status === 200) {
            longPollCredentials = JSON.parse(this.responseText).response;
            let xhr = new XMLHttpRequest();
            xhr.open("GET", `https://${longPollCredentials.server}?act=a_check&key=${longPollCredentials.key}&ts=${longPollCredentials.ts}&wait=25&mode=2&version=1`, true);
            xhr.send();
            xhr.addEventListener('load', function () {
                console.log(this);
            });

            subscribe(`${BASE_URL}nim0800?act=a_check&key=${longPollCredentials.key}&ts=${longPollCredentials.ts}&wait=25&mode=2&version=1`);
        }
    });

    function subscribe(url) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;

            if (this.status === 200) {
                let respData = JSON.parse(this.responseText);
                longPollCredentials.ts = respData.ts; // update timestamp

                if (respData.updates) {
                    if (respData.updates.length !== 0) {

                        let messages = [];
                        // grab only new messages

                        respData.updates.forEach((item) => {
                            if (item[0] === 4) {
                                messages.push(item);
                                ServerActions.newMessage(messages);
                            }
                        });
                        // window.app.messagesObserver.fire(messages);
                    }
                }
            } else {
            }
            // new subscription with updated timestamp
            subscribe(`${BASE_URL}nim0800?act=a_check&key=${longPollCredentials.key}&ts=${longPollCredentials.ts}&wait=25&mode=2&version=1`);
        };
        xhr.open("GET", url, true);
        xhr.send();
        longPollCreated = true;
    }
};