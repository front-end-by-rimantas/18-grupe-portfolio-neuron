import { GenerateHtml } from './generateHtml.js'

class PartnersLogo{
    constructor(partnersLogoData){
        this.partnersLogoData = partnersLogoData;
        this.ObjgenerateHtml = new GenerateHtml(this.partnersLogoData);
        this.init();
}
    init(){
        this.ObjgenerateHtml.generateHtml();
        this.ObjgenerateHtml.setWidth();
        this.addEvents();

        
    }

    addEvents(){
        addEventListener("resize", () =>{
            this.ObjgenerateHtml.setWidth();
        })
        const logoPartnerContainer = document.querySelector('.logoPartnerContainer');

        logoPartnerContainer.addEventListener('click',() => {
            this.ObjgenerateHtml.setTransform();
        })

    }

}
export { PartnersLogo }