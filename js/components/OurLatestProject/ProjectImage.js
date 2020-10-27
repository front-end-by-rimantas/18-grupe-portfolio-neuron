class ProjectImage {
    constructor(params) {
        this.data = params.singleImg;
        this.imgPath = params.imgPath;
        this.title = params.title;

    }

    // generateHED(){
    //     return `<div class="ourLatestPoject">
    //                 <h2 class="LatestProjectTitle">${this.title}</h2>
    //             </div>`
    // }

    generateHTML(){

        let HTML = '';
        for (let item of this.data) {

            HTML +=`<div class="spacingImg"> 
                        <img class="singleImg" src="./img/OurLatestProject/${item.image}" alt="${item.imagealt}">
                    </div>`

        }
        return HTML;
    } 
}
export { ProjectImage }