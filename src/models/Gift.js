

export class Gift {
    constructor(data) {
        this.id = data.id || ''
        this.tag = data.tag
        this.url = data.url
        // this.embedUrl = data.images.original.url
        this.opened = data.opened || false
    }
}