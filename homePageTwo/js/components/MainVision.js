import { RenderHtml } from '../components/RenderHtml.js';


class MainVision{
constructor (datacomputervisionai){
    this.allBoxData = datacomputervisionai;
    // this.breakPointWidth = breakPointWidth;
    this.ObjRenderHtml = new RenderHtml(this.allBoxData);
    this.init();
}
init(){
    this.ObjRenderHtml.renderTop();
    this.ObjRenderHtml.renderBottom();
};

}

export {MainVision}