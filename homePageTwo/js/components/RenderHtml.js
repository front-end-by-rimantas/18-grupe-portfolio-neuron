class RenderHtml{

    constructor(allBoxData){
        this.allBoxData = allBoxData;

    }
    renderTop(){
        const placeHtml = document.querySelector('.visionTop');
        let topHtml = `<div class="visionTopLeft">
                            <span>WHY COMPUTER VISION</span>
                            <h2>Computer Vision AI</h2>
                        </div>
                        <div class="visionTopRight">
                            <a href="#">Check it Out</a>
                        </div>`;
        placeHtml.insertAdjacentHTML('afterbegin',topHtml);
        // console.log(placeHtml);
    }

    renderBottom(){
        let bottomHtml = '';
        for (const item of this.allBoxData ){
            bottomHtml +=   `<div class="visionSingleBox">
                <div class="singleBox">
                    <div class="visionIconMargin">
                        <div class="visionIcon">
                            <i class="flaticon-brain"></i>
                        </div>
                    </div>
                    <div class="visionHeader">
                        <h3> ${item.header}</h3>
                    </div>
                    <div class="visionParagraph">
                        <p> ${item.paragraph}</p>
                    </div>
                </div>
            </div>`;
                            console.log(item.header);

        }
        const placeHtml = document.querySelector('.visionPrimaryBox');
        console.log(placeHtml);
        placeHtml.insertAdjacentHTML('afterbegin',bottomHtml);
    }
}

export {RenderHtml}