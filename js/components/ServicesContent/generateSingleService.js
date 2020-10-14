function generateSingleService (service, htitle) {
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

    const HTML = `<div class="Services-subtitle col-4 col-lg-6 col-sm-12">
                    <div class="About-subtitle">
                        <i class="${service.icon}"></i>
                        <h3 class="Single-subtitle">${service.title}</h3>
                        <p class="About-desc">${service.description}</p>
                    </div>
                </div>`



    // output
    return HTML;
}

export { generateSingleService }