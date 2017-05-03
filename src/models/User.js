export default class User {
    constructor(item) {
        this.firstName = item.first_name || '';
        this.lastName = item.last_name || '';
        this.photo = item.photo_50 || '';
        this.lastSeen = item.last_seen || '';
        this.nickname = item.nickname || '';
        this.id = item.uid || 0;
    }
}