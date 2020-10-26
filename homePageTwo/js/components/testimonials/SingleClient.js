class SingleClient {
  constructor(data, clientPost) {
    this.imgPath = data.imgPath;
    this.imgAlt = data.imgAlt;

    this.clientPost = clientPost;
    // this.imgSrc = clientPost.imgSrc;
    // this.name = clientPost.name;
    // this.position = clientPost.position;
    // this.review = clientPost.review;
  }

  generateHTML() {
    let totalClientPost = "";
    for (let item of this.clientPost) {
      totalClientPost += `<div class="st-author-top">
            <img src="${this.imgPath}${this.clientPost[i].imgSrc}" alt="${this.imgAlt}"/>
            <div class="author-info">
                <h3 class="test-client-name">${this.clientPost[i].name}</h3>
                <h4 class="test-client-position">${this.clientPost[i].position}</h4>
            </div>  
            <div class="st-author-bottom">
                <p class="test-review">${this.clientPost[i].review}<p>
                <div class="author-rating"></div>
            </div>
        </div>`;
    }
  }
}

export { SingleClient };
