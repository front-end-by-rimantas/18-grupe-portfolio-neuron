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

  generateRatingHTML(rating) {
    let totalRating = "";
    for (let i = 0; i < rating; i++) {
      totalRating += `<i class='fa fa-star' aria-hidden='true'></i>`;
    }
    return totalRating;
  }

  generateHTML() {
    let totalClientPost = "";
    for (let item of this.clientPost) {
      totalClientPost += `<div class="st-author-top">
            <img src="${this.imgPath}${item.imgSrc}" alt="${this.imgAlt}"/>
            <div class="author-info">
                <h3 class="test-client-name">${item.name}</h3>
                <h4 class="test-client-position">${item.position}</h4>
            </div>  
            <div class="st-author-bottom">
                <p class="test-review">${item.review}<p>
                <div class="author-rating">${this.generateRatingHTML(
                  item.rating
                )}</div>
            </div>
        </div>`;
    }
    return totalClientPost;
  }
}

export { SingleClient };
