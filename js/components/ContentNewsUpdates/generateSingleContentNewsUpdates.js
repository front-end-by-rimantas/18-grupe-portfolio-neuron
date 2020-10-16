function generateSingleContentNewsUpdates (service, imagePath,i) {
        // input validation
    // if (!isValidService(service)) {
    //     return '';
    // }

        // logic
    // image alt text
    // let imageAlt = service.imageAlt;
    // if (!service.imageAlt || service.imageAlt === '') {
    //     imageAlt = service.title + ' image';
    // }

    // image validatio

    const HTML = `<div class="partners1 col-12">
                        <a href="#"><img src="${imagePath + service.image}" alt="${service.imagealt}"></a>
                    </div>
                    <div class="partners2 col-8">
                        <a href="#"><img src="${imagePath + service.image}" alt="${service.imagealt}"></a>`
                    

    // output
    return HTML;
}

export { generateSingleContentNewsUpdates }