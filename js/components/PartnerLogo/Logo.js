class Logo {
    constructor(params) {
        this.imgPath = params.imgPath;
        this.imagealt = params.imagealt;
        this.image = params.image;

    }

    generateHTML() {
        return `   <div class="partners1 col-2 col-md-4">
                    <img class="single-logo" src="./img/PartnersLogo/image1.png" alt="pirmas">
                </div>
                </div> <div class="partners2 col-3 col-md-4">
                    <img class="single-logo" src="./img/PartnersLogo/image1.png" alt="pirmas">
                </div>`
    }

}


export { Logo }