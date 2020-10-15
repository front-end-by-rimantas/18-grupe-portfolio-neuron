import { generateSingleService } from './generateSingleService.js';

function renderServicesContent(data) {
     // input validation

    // logic
    const header = '<div class="ServiceContent-bg col-12"><h2 class="services-title">Our Core Services</h2></div>';
    let HTML = '';
    let htitle = data.htitle;
    const servicesDOM = document.querySelector(data.selector);
    const servicesCount = data.services.length;

    for (let i=0; i< servicesCount; i++) {
        const service = data.services[i];
        HTML += generateSingleService(service);
    }

    // post logic validation
    if(HTML === '') {
        console.error('ERROR: nera nei vienos normalios veikiancios paslaugos!');
        return;
    }

    // output
    return servicesDOM.innerHTML = header + HTML;
}

export { renderServicesContent }