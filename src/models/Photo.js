export default class Photo {
    constructor(obj) {
        this.src = obj.src_big || '';
        this.height = obj.height || 0;
        this.width = obj.width || 0;
    }
}