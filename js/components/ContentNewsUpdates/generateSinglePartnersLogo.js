function generateSinglePartnersLogo (service, imagePath,i) {

    const HTML1 = `<a class="single-logo" href="#"><img src="${imagePath + service.image}" alt="${service.imagealt}"></a>`
    const HTML2 = `<a class="single-logo" href="#"><img src="${imagePath + service.image}" alt="${service.imagealt}"></a>`
                    

    // output
    return HTML1;
}

export { generateSinglePartnersLogo }