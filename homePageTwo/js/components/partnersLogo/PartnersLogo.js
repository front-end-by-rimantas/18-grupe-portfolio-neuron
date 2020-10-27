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
        this.ObjgenerateHtml.setAnimation();
        
    }

    addEvents(){
        addEventListener("resize", () =>{
            this.ObjgenerateHtml.setWidth();
        })
        const logoPartnerContainer = document.querySelector('.logoPartnerContainer');

        logoPartnerContainer.addEventListener('click',() => {
            this.ObjgenerateHtml.setTransform();
        })
        
        logoPartnerContainer.addEventListener('mouseenter',() => {
            this.ObjgenerateHtml.canAnimation = false;
        })
        logoPartnerContainer.addEventListener('mouseleave',() => {
            this.ObjgenerateHtml.canAnimation = true;
        })


    }

}
export { PartnersLogo }