class NewsLetter {
    constructor(params){
        // this.flat = params.flat;
        // this.text = params.text;
        // this.placeholder = params.placeholder;
        // this.icon = params.icon;
    }

    generateHTML() {
        return `<div class="newsletter-icon col-4 col-md-12">
                    <span id="newsletter-flaticon-mail" class="flaticon-mail"></span>
                </div> 
                <div class="newsletter-text col-8 col-md-12">
                    <h1 class="newsletter-title">Don’t Miss Our News And Updates!</h1>
                    <input type="email" id="formEmail" placeholder="Enter Your Email">
                    <button id="newsletter-flaticon-send" class="flaticon-send"></button>
                </div>`
    }
}

export { NewsLetter }




    
    //    const newsletterDOM = document.querySelector(data.selector1);
    
    //    return newsletterDOM.innerHTML = newsletter;
    
    // }