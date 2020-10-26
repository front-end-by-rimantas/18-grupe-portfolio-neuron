class ProjectImage {
    constructor(params) {
        this.data = params.singleImg;
        this.imagePath = params.imagePath;

    }

    generateHED(){
        return `<div class="ourLatestPoject col-12">
                    <h2 class="LatestProjectTitle">Our Latest Project</h2>
                </div>`
    }

    generateHTML(){
        return `<div class="row latestProjectImg">
                    <div class="spacingImg">
                        <img class="singleImg" src="./img/OurLatestProject/image1.jpg" alt="image1">
                    </div> 
                </div> 
                <div class="row latestProjectImg">
                    <div class="spacingImg">
                        <img class="singleImg" src="./img/OurLatestProject/image2.jpg" alt="image2">
                    </div>
                </div> 
                <div class="row latestProjectImg">
                    <div class="spacingImg">
                        <img class="singleImg" src="./img/OurLatestProject/image3.jpg" alt="image3">
                    </div>
                </div> `
    } 
}
export { ProjectImage }