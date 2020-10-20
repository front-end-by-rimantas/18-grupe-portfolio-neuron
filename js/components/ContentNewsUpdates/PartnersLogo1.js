class PartnersLogo1 {
    constructor(params) {

    }

    generateHTML() {
        return `<div class="partners1 col-2 col-md-4">
                    <a class="single-logo" href="#"><img src="${imagePath + service.image}" alt="${service.imagealt}"></a>
                </div>
                </div> <div class="partners2 col-3 col-md-4">
                    <a class="single-logo" href="#"><img src="${imagePath + service.image}" alt="${service.imagealt}"></a>
                </div>`
    }
}


export { PartnersLogo1 }