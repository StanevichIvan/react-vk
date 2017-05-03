import User from "./User";
import timeHelper from '../helpers/timeHelper';

export default class Dialog {
    constructor(item) {
        this.body = item.body || '';
        this.out = item.out || 0;
        this.user = item.user ? new User(item.user) : null;
        this.time = item.date ? timeHelper(item.date) : '';
        this.fromID = item.from_id || '';
        this.img = '';

        if (item.attachment) {
            this.attach = item.attachment || null;
        }
    }
}