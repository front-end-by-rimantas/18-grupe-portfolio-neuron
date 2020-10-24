import { RenderHtml } from '../components/RenderHtml.js';
import { Validation } from '../components/computervisionai/Validation.js'

class MainVision{
constructor (datacomputervisionai){

    this.allBoxData = datacomputervisionai;
    this.ObjRenderHtml = new RenderHtml(this.allBoxData);
    this.ObjValidation = new Validation();

    this.init();
}
init(){
    if (this.ObjValidation.isValidate()){
        this.ObjRenderHtml.renderTop();
        this.ObjRenderHtml.renderBottom();
    } else{
        return '';
    }
    
    
};

}

export {MainVision}