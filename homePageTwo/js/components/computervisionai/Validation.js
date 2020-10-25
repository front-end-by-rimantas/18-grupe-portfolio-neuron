import { Verify } from '../computervisionai/Verify.js'
import { datacomputervisionai,breakPointWidth} from '../../data/datacomputervisionai.js'
class Validation {
    constructor(){
        this.ObjVerify = new Verify();
        this.breakPointWidth = breakPointWidth;
        this.datacomputervisionai = datacomputervisionai;
    }

    isValidate(){
        this.ObjVerify.isDefined(this.breakPointWidth)
        this.ObjVerify.isDefined(this.datacomputervisionai)
        
        if (this.ObjVerify.isArray(this.breakPointWidth)){
            for (const iterator of this.breakPointWidth) {
               this.ObjVerify.isNumber(iterator)
            }
        }

        if (this.ObjVerify.isArray(this.datacomputervisionai)){
            for (const iterator of this.datacomputervisionai) {
                this.ObjVerify.isString(iterator.header);
                this.ObjVerify.isString(iterator.paragraph);
                
                this.ObjVerify.textLengthMin(iterator.header, 10)
                this.ObjVerify.textLengthMin(iterator.paragraph, 100)
                
                this.ObjVerify.textLengthMax(iterator.header, 30)
                this.ObjVerify.textLengthMax(iterator.paragraph, 150)
            }
    }

        if (this.ObjVerify.errors.length > 0) {
                for (const iterator of this.ObjVerify.errors) {
                    console.log(iterator);
                }
            return '';
        }
    
        return true
        }
        
    
    }


export { Validation }