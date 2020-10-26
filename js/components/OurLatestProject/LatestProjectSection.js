import { ProjectImage } from './ProjectImage.js'

class LatestProjectSection {
    constructor(params) {
        this.selector = params.selector;
        this.title = params.title;
        this.imgPath = params.imgPath;
        this.singleImg = params.singleImg;

        this.titleObj = new ProjectImage(params);
        this.singleImgObj = new ProjectImage(params);

        this.DOM = null;

        this.render();
    }
    generateHTML() {

        const titleHTML = this.titleObj.generateHED();
        const singleImgHTML = this.singleImgObj.generateHTML();
         
        
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