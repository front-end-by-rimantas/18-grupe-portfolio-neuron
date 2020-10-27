import introPosts from '../../data/ContentIntro/introPosts.js';
import { Row_One } from '../Intro_Content/Row_One.js';
import { Row_Two } from '../Intro_Content/Row_Two.js';

class Intro_Content {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('Turi būti tekstinis');
            return false;
        }
        if (this.selector === '') {
            console.warn('Negali būti tuščias');
            return false;
        }
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.warn('Negali nieko atrasti');
            return false;
        }
        return true;
    }
    render() {
        this.DOM.innerHTML = ` <div id="intro-block-one" class = "ContentRow col-3 col-md-6 col-sm-12">
                                ${(new Row_One(introPosts)).render()}                        
                                </div>
                                <div id = "intro-block-one" class = "ContentRow col-3 col-md-6 col-sm-12 mt-100">
                                ${(new Row_Two(introPosts)).render()} 
                                </div>
                                <div class = "ContentRow col-6 col-md-12 mt-100"> 
                                    <h1 class="bigtitle"> Power Your Creativity With Artificial Intelligence</h1>
                                    <p class = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                                    <p class = "desc mb-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molesti ae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tem pora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p>
                                    <div class="btn">LEARN MORE</div>
                                </div>`;
    }
}

export { Intro_Content };