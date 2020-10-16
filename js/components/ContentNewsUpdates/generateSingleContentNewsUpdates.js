function generateSingleContentNewsUpdates (service) {
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

    const HTML = `<div id="news_block" class="row partners-logo">
                    <div class="partners1 col-12">
                        <a href="#"><img src="${service.image}" alt="${service.imagealt}"></a>
                    </div>
                    <div class="partners2 col-8">
                        <a href="#"><img src="${service.image}" alt="${service.imagealt}"></a>
                    </div>`
                    

    // output
    return HTML;
}

export { generateSingleContentNewsUpdates }