class GenerateHtml{
    constructor(partnersLogoData){
        this.partnersLogoData = partnersLogoData;
        this.numberlist = 0;
        this.diff = 0;
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
        // logoPartnerContainer.dataset.run = true;
        const index = parseInt(logoPartnerContainer.dataset.index);
        logoPartnerContainer.style.transform = `translate3d(${index*-200}px, 0px,0px)`;
        if (index <this.diff) {
            logoPartnerContainer.dataset.index = index + 1;
        } else{ 
            logoPartnerContainer.dataset.index = 0;
          }
    }

    setAnimation(){

        let currentValue = 0;
        const stepSize = 200;
        let diff = this.diff
        const logoPartnerContainer = document.querySelector('.partnerslogolist');

        const timer = setInterval(() => {
            this.setTransform();
            
           /**
            *  veikia nesikreipiant i funkcija.
            *  */ 
    /*
            if (diff !== this.diff ){
                diff = this.diff;
                currentValue = 200;
            }
            currentValue += (-stepSize);
            console.log(currentValue);
            logoPartnerContainer.style.transform = `translate3d(${currentValue}px, 0px,0px)`;
            if(currentValue === -diff*stepSize){
                console.log('pasieke');
                currentValue = 200;
            }
    */
        }, 4000);
    }
}




export {GenerateHtml}