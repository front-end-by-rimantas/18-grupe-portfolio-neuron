class NewsLetter {
    constructor(params){

    }

    generateHTML() {
        return `<div class="newsletter-icon col-4 col-md-12">
                    <span id="newsletter-flaticon-mail" class="${icon.flaMail}"></span>
                </div> 
                <div class="newsletter-text col-8 col-md-12">
                    <h1 class="newsletter-title">${form.text}</h1>
                    <input type="email" id="formEmail" placeholder="${form.placeholder}">
                    <button id="newsletter-flaticon-send" class="${form.icon.flaSend}"></button>
                </div>`
}
}

export { NewsLetter }




    
    //    const newsletterDOM = document.querySelector(data.selector1);
    
    //    return newsletterDOM.innerHTML = newsletter;
    
    // }