import { SingleClient } from "./SingleClient.js";

class RenderClientTestimonial {
  constructor(params) {
    this.data = params;
    this.clientPost = params.clientPost;

    this.path = params.path;
    this.title = params.title;
    this.subtitle = params.subtitle;

    this.SngClientObj = new SingleClient(this.data, this.clientPost);

    this.DOM = null;
    const DOM = document.querySelector(this.path);
    this.DOM = DOM;

    this.render();
  }

  generateHTML() {
    const sngClientObjHTML = this.SngClientObj.generateHTML();

    return `<h2 class="testimonials-title">${this.title}</h2>
              <h1 class="testimonials-review">${this.subtitle}</h1>
              <div class="testimonials-carousel col-12">
                <div class="single-testimonial col-4">
                ${sngClientObjHTML}
                </div>
                </div>`;
  }
  render() {
    this.DOM.innerHTML = this.generateHTML();
  }
}
export { RenderClientTestimonial };
