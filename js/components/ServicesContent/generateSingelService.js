import { servicesContentData } from './data/ServicesContent.js';

function generateSingelService (service) {
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

    // image validation

    const HTML = `<div class="ServiceContent-bg col-12">
                    <h2 class="Services title">${ServicesTitle}</h2>
                </div>
                <div class="Services-subtitle col-4 col-lg-6 col-sm-12">
                    <div class="About-subtitle">
                        <i class="flaticon-brain"></i>
                        <h3 class="Single-subtitle">${services.title}</h3>
                        <p class="About-desc">${services.description}</p>
                    </div>
                </div>`



    // output
    return HTML;
}

export { generateSingleService }