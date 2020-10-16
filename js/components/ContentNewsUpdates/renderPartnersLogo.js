import { generateSinglePartnersLogo } from './generateSinglePartnersLogo.js'

function renderPartnersLogo (data) {
         // input validation

    // logic
    let HTML1 = '';
    let HTML2 = '';
    const newsDOM = document.querySelector(data.selector2);
    const newsCount = data.services.length;

    for (let i=0; i < newsCount; i++) {
        const service = data.services[i];
        HTML1 += generateSinglePartnersLogo(service, data.imagePath);
    }
    for (let i=0; i < newsCount-1; i++) {
        const service = data.services[i];
        HTML2 += generateSinglePartnersLogo(service, data.imagePath);
    }
   // post logic validation
   if(HTML1 === '') {
        console.error('ERROR: nera nei vienos normalios veikiancios paslaugos!');
        return;
    } 
    
    // output

    return newsDOM.innerHTML = `<div class="partners1 col-12"> ${HTML1} </div> <div class="partners2 col-8"> ${HTML2}`;
}

export { renderPartnersLogo }