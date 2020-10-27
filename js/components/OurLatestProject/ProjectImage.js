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
        return `<div class="row latestProjectImg col-4 col-lg-6 col-sm-12">
                        <img class="singleImg" src="./img/OurLatestProject/image1.jpg" alt="image1">
                </div> 
                <div class="row latestProjectImg col-4 col-lg-6 col-sm-12">
                        <img class="singleImg" src="./img/OurLatestProject/image2.jpg" alt="image2">
                </div> 
                <div class="row latestProjectImg col-4 col-lg-6 col-sm-12">
                        <img class="singleImg" src="./img/OurLatestProject/image3.jpg" alt="image3">
                </div> `
    } 
}
export { ProjectImage }