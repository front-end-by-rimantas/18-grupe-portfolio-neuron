import { ProjectImage } from './ProjectImage.js'

class LatestProjectSection {
    constructor(params) {
        this.selector = params.selector;
        this.title = params.title;
        this.singleImg = params.singleImg;

        this.DOM = null;

        this.render();
    }
    generateHTML() {
        const title = new ProjectImage(this.title);
        const titleHTML = title.generateHED();

        const singleImg = new ProjectImage(this.singleImg);
        const singleImgHTML = singleImg.generateHTML();
         
        
        return titleHTML + singleImgHTML;
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

export { LatestProjectSection }