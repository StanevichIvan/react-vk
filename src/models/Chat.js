import User from "./User";
import timeHelper from '../helpers/timeHelper';

export default class Chat {
    constructor(obj){
        this.body = obj.body || '';
        this.out = obj.out || 0;
        this.title = obj.title || '';
        this.id = obj.chat_id;
        this.user = obj.user ? new User(obj.user) : null;
        this.time = obj.date ? timeHelper(obj.date) : '';
    }
}