export default class Document {
    constructor(obj){
        this.ownerID = obj.owner_id || '';
        this.title = obj.title || '';
        this.url = obj.url || '';
        this.mediaID = obj.did || '';
    }
}