class GenerateHtml{
    constructor(partnersLogoData){
        this.partnersLogoData = partnersLogoData;
        this.numberlist = 1;
        this.diff = 1;
        this.marginleft = 0;
    }

    generateHtml(){
        let generateHtml = ''; 
        const imgPath = this.partnersLogoData.imgPath; 
        for (const iterator of this.partnersLogoData.singleImg) {
            generateHtml += `<div class="singlelogoPartner"> 
            <div class="logoPartner"><img src="${imgPath}${iterator.image}" alt=""></div>
            </div>`
        }
        const placeHtml = document.querySelector('.partnerslogolist');
        placeHtml.insertAdjacentHTML('afterbegin',generateHtml)

    }

    setWidth(){
        this.numberlist = (((innerWidth-110) / 200)-((innerWidth-110) / 200)%1)
        let logoPartnerContainer = document.querySelector('.logoPartnerContainer') ;
        logoPartnerContainer.style.width = this.numberlist*200 + 'px';;
        this.diff = this.partnersLogoData.singleImg.length - this.numberlist;
        this.marginleft = Math.ceil(((innerWidth-60)-200*this.numberlist)/2);
        logoPartnerContainer.style.marginLeft = `${this.marginleft}px`; 
        this.setTransform();
    }

    setTransform(){
        const logoPartnerContainer = document.querySelector('.partnerslogolist');
        logoPartnerContainer.dataset.run = true;
        const index = parseInt(logoPartnerContainer.dataset.index);
        logoPartnerContainer.style.transform = `translate3d(${index*-200}px, 0px,0px)`;
        if (index <this.diff) {
            logoPartnerContainer.dataset.index = index + 1;
        } else{ 
            logoPartnerContainer.dataset.index = 1;
          }
    }
}

export {GenerateHtml}