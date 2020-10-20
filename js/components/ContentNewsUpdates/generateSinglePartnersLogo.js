function generateSinglePartnersLogo (service, imagePath,i) {

    const HTML1 = `<div class="partners1 col-2 col-md-4">
                        <a class="single-logo" href="#"><img src="${imagePath + service.image}" alt="${service.imagealt}"></a>
                    </div>`
    const HTML2 = `</div> <div class="partners2 col-3 col-md-4">
                        <a class="single-logo" href="#"><img src="${imagePath + service.image}" alt="${service.imagealt}"></a>
                    </div>`
                    

    // output
    return HTML1;

}

export { generateSinglePartnersLogo }