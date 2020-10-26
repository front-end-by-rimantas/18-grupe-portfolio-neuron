class Verify{
    constructor(){
        this.errors = [];
        this.warning = [];
    }

isDefined(data) {
        if (!data) {
            this.errors.push( `${data} Can not be empty`);
            return false;
        }
        return true;
}

isArray(data) {
    if (!Array.isArray(data)) {
        this.errors.push(`${data} is not an array`);
      return false;
    }
    return true;
  }

  isString(data) {
    if (typeof data !== "string") {
      console.error(`${data} is not a string`);
      return false;
    }
    return true;
  }

  textLengthMin(data, length) {
    if (data.length < length) {
        this.errors.push(`${data} can not be shorter than ${length} characters`);
      return false;
    }
    return true;
  }
  
  textLengthMax(data, length) {
    if (data.length > length) {
        this.errors.push(`${data} can not be longer than ${length} characters`);
      return false;
    }
    return true;
  }

  isNumber(data){
    if (typeof data !== "number" || data=== Infinity) {
        this.errors.push(`${data} is not a number or number or is infinity`);
        return false;
      }
      return true;
    }

}

export {Verify}