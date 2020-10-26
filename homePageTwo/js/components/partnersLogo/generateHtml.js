class GenerateHtml{
    constructor(partnersLogoData){
        this.partnersLogoData = partnersLogoData;
    }

    generateHtml(){
        let generateHtml = ''; 
        let count = 1;
        const imgPath = this.partnersLogoData.imgPath; 
        for (const iterator of this.partnersLogoData.singleImg) {
            generateHtml += `<div class="singlelogoPartner"> 
            <div class="logoPartner"><img src="${imgPath}${iterator.image}" alt=""></div>
            </div>`
        }
        const placeHtml = document.querySelector('.partnerslogolist');
        placeHtml.insertAdjacentHTML('afterbegin',generateHtml)
        console.log(window.screen.width);
        
    }

    setWidth(){
        console.log('innerWidth'+innerWidth);
        let numberlist = (((innerWidth-110) / 200)-((innerWidth-110) / 200)%1)
        console.log('skaicius:'+ numberlist);
        const logoPartnerContainer = document.querySelector('.logoPartnerContainer') ;
        logoPartnerContainer.style.width = numberlist*200 + 'px';;
    }

    setTransform(){
   
        const logoPartnerContainer = document.querySelector('.partnerslogolist');
        logoPartnerContainer.dataset.run = true;
        const index = parseInt(logoPartnerContainer.dataset.index);
        logoPartnerContainer.style.transform = `translate3d(${index*-200}px, 0px,0px)`;

            // if (logoPartnerContainer.dataset.run) {
            //     continue;
            // }
        console.log(logoPartnerContainer);
        if (index <5) {
            logoPartnerContainer.dataset.index = index + 1;
          
        } else{ 
            logoPartnerContainer.dataset.index = 1;
          }

       
        console.log('veikia');


       

    }



}

export {GenerateHtml}