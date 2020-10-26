import { NewsLetter } from './NewsLetter.js'

class NewsLetterSection {
    constructor(params) {
        this.selector = params.selector;
        this.icon = params.icon;
        this.form = params.forms;

        this.DOM = null;

        this.render();
    }


    generateHTML() {
        const icon = new NewsLetter(this.icon);
        const iconHTML = icon.generateHTML();

        const form = new NewsLetter(this.form);
        const formHTML = form.generateHTML();
        
        
        return iconHTML;
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

export { NewsLetterSection }