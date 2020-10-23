import { HtL } from "./htLeft.js";
import { HtR } from "./htRight.js";

class HTrender {
  constructor(params) {
    this.selector = params.selector;
    this.htLeft = params.htLeft;
    this.htRight = params.htRight;

    /**
     * iškviečiame klasę
     */

    this.htLObj = new HtL(this.htLeft);
    this.htRObj = new HtR(this.htRight);
    const DOM = document.querySelector(this.selector);
    this.DOM = DOM;
    // this.DOM = null;
    this.render();
  }

  generateHTML() {
    const htLHTML = this.htLObj.generateHTML();
    const htRHTML = this.htRObj.generateHTML();

    return `${htLHTML}${htRHTML}`;
  }

  //   isValidSelector() {
  //     const DOM = document.querySelector(this.selector);
  //     if (DOM) {
  //       this.DOM = DOM;
  //       return true;
  //     }
  //     return false;
  //   }
  render() {
    // if (!this.isValidSelector()) {
    //   return false;
    // }
    this.DOM.innerHTML = this.generateHTML();
  }
}

export { HTrender };
