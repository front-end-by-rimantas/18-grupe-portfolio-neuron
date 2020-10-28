import { HeaderTopLeft } from "./HeaderTopLeft.js";
import { HeaderTopRight } from "./HeaderTopRight.js";

class HeaderTopRender {
  constructor(params) {
    this.selector = params.selector;
    this.htLeft = params.htLeft;
    this.htRight = params.htRight;

    this.htLeftObj = new HeaderTopLeft(this.htLeft);
    this.htRightObj = new HeaderTopRight(this.htRight);

    this.DOM = null;

    this.render();
  }
  /**
   * generuojamas bendras header top HTML
   */
  generateHTML() {
    const htLHTML = this.htLeftObj.generateHTML();
    const htRHTML = this.htRightObj.generateHTML();

    return `${htLHTML}${htRHTML}`;
  }
  /**
   * Selector validacija ir DOM pateikimas
   */
  isValidSelector() {
    const DOM = document.querySelector(this.selector);

    if (DOM) {
      this.DOM = DOM;
      return true;
    }

    return false;
  }
  /**
   * Header HTML įstatymas į DOM
   */
  render() {
    if (!this.isValidSelector()) {
      return false;
    }
    this.DOM.innerHTML = this.generateHTML();
  }
}

export { HeaderTopRender };
