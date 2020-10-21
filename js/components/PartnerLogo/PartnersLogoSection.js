import { Logo } from './Logo.js'

class PartnersLogoSection {
    constructor(params) {
        this.selector = params.selector;
        this.singleImg = params.singleImg;

        this.singleImgObj = new Logo(this.singleImg);

        this.DOM = null;

        this.render();
        // this.addEvents();
    }

    generateHTML() {
        const singleImgHTML = this.singleImgObj.generateHTML();


        return `${singleImgHTML}`;
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);

        if (DOM) {
            this.DOM = DOM;
            return true;
        }

        return false;
    }

    render() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.DOM.innerHTML = this.generateHTML();
    }
}

export { PartnersLogoSection }
