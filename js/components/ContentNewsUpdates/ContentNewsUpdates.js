import { NewsLetter } from './NewsLetter.js'
import { PartnersLogo1 } from './PartnersLogo1.js'



class ContentNewsUpdates {
    constructor(params) {
        this.selector1 = params.selector1;
        this.selector2 = params.selector2;
        this.singleImg = params.singleImg;
        this.icon = params.icon;
        this.form = params.forms;

        this.DOM = null;

        this.render();
    }


    generateHTML() {
        const icon = new PartnersLogo1(this.icon);
        const iconHTML = icon.generateHTML();

        const form = new NewsLetter(this.form);
        const formHTML = form.generateHTML();

        const singleImg = new NewsLetter(this.singleImg);
        const singleImgHTML = singleImg.generateHTML();


        return singleImgHTML
    }

    isValidSelector() {
        const partnersLogo1DOM = document.querySelector(this.selector2);

        if (partnersLogo1DOM) {
            this.partnersLogo1DOM = partnersLogo1DOM;
            return true;
        }
            return false;
    }

    render() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.partnersLogo1DOM.innerHTML = this.generateHTML();


        
    }
}

export { ContentNewsUpdates }