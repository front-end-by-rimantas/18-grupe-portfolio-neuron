class Logo {
    constructor(params) {
        this.data = params.singleImg;
        this.imgPath = params.imgPath;
    }

    generateHTML() {
        let HTML = '';
        for (let item of this.data) {

        HTML += `<div class="partners1 col-2 col-md-4">
                    <img class="single-logo" src="${this.imgPath + item.image}" alt="${item.imagealt}">
                </div>`
 }
    return HTML;

}
}

export { Logo }