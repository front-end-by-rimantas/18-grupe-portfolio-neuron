import { RenderHtml } from '../components/RenderHtml.js';
class MainVision{
constructor (datacomputervisionai){
    this.allBoxData = datacomputervisionai;
    this.ObjRenderHtml = new RenderHtml(this.allBoxData);
    this.init();


}
init(){
    console.log('Mainvision init');

    this.ObjRenderHtml.renderTop();
    console.log('atspausdina renderTop');

    this.ObjRenderHtml.renderBottom();



};

}

export {MainVision}