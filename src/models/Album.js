export default class Album {

    constructor(obj) {
        this.title = obj.title || '';
        this.id = obj.aid || '';
        this.thumb_id = obj.thumb_id || '';
        this.coverSrc = obj.thumb_src || '';
    }
}