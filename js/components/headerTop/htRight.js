class HtR {
  constructor(params) {
    this.htRight = params.htRight;
  }

  generateHTML() {
    let totalFav = "";

    for (let i of this.htRight) {
      totalFav += `<i class="${this.htRight[i]}"></i>`;
    }

    return `<div class="ht-right col-6 col-md-4">
    ${totalFav}
    </div>`;
  }
}
export { HtR };
