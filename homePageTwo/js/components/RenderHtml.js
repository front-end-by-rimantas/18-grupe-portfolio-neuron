import { CalculateStyle } from '../components/computervisionai/CalculateStyle.js';
import { breakPointWidth } from '../data/datacomputervisionai.js';

class RenderHtml{
    constructor(allBoxData){
        this.allBoxData = allBoxData;
        this.ObjCalculateStyle = new CalculateStyle(); 
        this.breakPointWidth = breakPointWidth;
        this.width = 0;

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
    }

    renderBottom(){
        this.width = this.ObjCalculateStyle.calculateWidth(this.breakPointWidth);
        let bottomHtml = '';
        for (const item of this.allBoxData ){
            bottomHtml +=   `<div class="visionSingleBox"  style="width: ${this.width}">
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
        }
        const placeHtml = document.querySelector('.visionPrimaryBox');
        placeHtml.insertAdjacentHTML('afterbegin',bottomHtml);
        window.addEventListener('resize',() => {
            this.width = this.ObjCalculateStyle.calculateWidth(this.breakPointWidth);
            const placeHtml = document.querySelectorAll('.visionSingleBox');
            this.ObjCalculateStyle.changeWidth(this.width, placeHtml);
        })
    }
}

export {RenderHtml}