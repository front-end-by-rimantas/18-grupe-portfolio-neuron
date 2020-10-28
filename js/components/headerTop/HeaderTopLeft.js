class HeaderTopLeft {
  constructor(params) {
    this.mail = params.mail;
    this.phone = params.phone;
  }
  /**
   * Kairinės dalies duomenų validacija
   */
  isValid() {
    if (typeof this.mail !== "object" || typeof this.phone !== "object") {
      return false;
    } else if (
      typeof this.mail.favicon !== "string" ||
      typeof this.mail.href !== "string" ||
      typeof this.mail.text !== "string" ||
      typeof this.phone.favicon !== "string" ||
      typeof this.phone.text !== "string"
    ) {
      return false;
    } else if (
      this.mail.favicon.length > 20 ||
      this.mail.href.length > 20 ||
      this.mail.text.length > 20 ||
      this.phone.favicon.length > 20 ||
      this.phone.text.length > 20
    ) {
      return false;
    } else if (
      this.mail === "" ||
      this.phone === "" ||
      this.mail.favicon.length === "" ||
      this.mail.href.length === "" ||
      this.mail.text.length === "" ||
      this.phone.favicon.length === "" ||
      this.phone.text.length === ""
    ) {
      return false;
    }
    return true;
  }
  /**
   * generuojama kairinė HeaderTop dalis
   */
  generateHTML() {
    if (!this.isValid()) {
      console.error("validacija nepraėjo");

      return "";
    }
    return `<div class="ht-left col-6 col-md-8">
            <div>
            <i class="${this.mail.favicon}"></i>
            <a href="${this.mail.href}">${this.mail.text}</a>
            </div>
            <div>
            <i class="${this.phone.favicon}"></i>
            <span>${this.phone.text}</span>
            </div>
            </div>`;
  }
}

export { HeaderTopLeft };
