import { datacomputervisionai,breakPointWidth} from '../../data/datacomputervisionai.js'
class Validation {
    constructor(){
        this.errors = [];
        this.warning = [];
    }

    isValidate(){

        function isDefined(data) {
            let errors = [];
            if (!data) {
                errors.push( `${data} can not be empty`)
              return false;
            }
            return true;
          }
          
          isDefined(breakPointWidth);

          if (this.errors.length > 0) {
            for (const iterator of error) {
                console.log(iterator);
            }
          }

        return true;
    }

}

export { Validation }