class HtL {
  constructor(params) {
    this.mail = params.mail;
    this.phone = params.phone;
  }

  generateHTML() {
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

export { HtL };
