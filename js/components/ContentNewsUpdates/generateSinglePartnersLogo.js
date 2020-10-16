function generateSinglePartnersLogo (service, imagePath,i) {

    const HTML1 = `<a class = href="#"><img src="${imagePath + service.image}" alt="${service.imagealt}"></a>`
    const HTML2 = `<a href="#"><img src="${imagePath + service.image}" alt="${service.imagealt}"></a>`
                    

    // output
    return HTML1;
}

export { generateSinglePartnersLogo }