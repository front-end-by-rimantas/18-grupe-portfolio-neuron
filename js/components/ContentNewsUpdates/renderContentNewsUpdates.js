import { generateSingleContentNewsUpdates } from './generateSingleContentNewsUpdates.js'
function renderContentNewsUpdates(data) {
         // input validation

    // logic
    let newsletter = '<div class="newsletter-icon col-4">'+
                        '<span id="newsletter-flaticon-mail" class="flaticon-mail"></span></div>'+  
                    '<div class="newsletter-text col-8">'+
                        '<h1 class="newsletter-title">Don’t Miss Our News<br>And Updates!</h1>'+
                        '<input type="email" id="email" placeholder="Enter your Email">'+
                        '<button id="newsletter-flaticon-send" class="flaticon-send"></button></div>'
    let HTML = '';
    const newsDOM = document.querySelector(data.selector);
    const newsCount = data.services.length;

    for (let i=0; i < newsCount; i++) {
        const service = data.services[i];
        HTML += generateSingleContentNewsUpdates(service);
    }
   // post logic validation
   if(HTML === '') {
        console.error('ERROR: nera nei vienos normalios veikiancios paslaugos!');
        return;
    } 
    
    // output

    return newsDOM.innerHTML = newsletter + HTML;
}

export { renderContentNewsUpdates }