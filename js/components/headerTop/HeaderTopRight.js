class HeaderTopRight {
  constructor(faviconArray) {
    this.htRight = faviconArray;
  }
  /**
   * dešinės dalies validacija
   */
  isValid() {
    if (!Array.isArray(this.htRight)) {
      return false;
    } else if (this.htRight === "") {
      return false;
    } else if (this.htRight.length > 10) {
      return false;
    }
    return true;
  }
  /**
   * generuojama dešininė headerTop dalis
   */
  generateHTML() {
    if (!this.isValid()) {
      console.error("validacija nepraėjo");

      return "";
    }
    let totalFavicon = "";
    for (let item of this.htRight) {
      totalFavicon += `<i class="${item}"></i>`;
    }
    return `<div class="ht-right col-6 col-md-4">
    ${totalFavicon}
    </div>`;
  }
}
export { HeaderTopRight };
