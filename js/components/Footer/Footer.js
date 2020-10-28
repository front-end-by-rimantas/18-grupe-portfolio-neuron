
import socialsData from './../../data/socialsData/socials.js';
import { renderSocials } from '../Socials/renderSocials.js';
import listData from './../../data/footerData/footerList.js';
import { List_One } from './List_One.js';
import { List_Two } from './List_Two.js';
import { List_Three } from './List_Three.js';


class Footer {
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
        this.DOM.innerHTML = `<div class="fpost col-3 col-lg-6 col-sm-12">
                                <div class="footer-logo">
                                    <img src="img/footerlogo.png" alt="Footer Logo"></img>
                                </div>
                                 <p class="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, totam.</p>
                                <ul class = "footer-social-links">${renderSocials(socialsData)}
                                </div>
                            </div>
                            <div class="fpost col-3 col-lg-6 col-sm-12">
                                <div class="footer-title">WORK HOURS</div>
                                <p class="footer-text">10.00 AM - 6.00 PM , Monday - Saturday</p>
                                <p class="footer-text">Our Support and Sales team is available 24 * 7 to answer your queries</p>
                            </div>
                            <div class="fpost col-3 col-lg-6 col-sm-12">
                            <div class="footer-title">NAVIGATE</div>
                            <div class="footer-row1">
                                <ul id="list_block">${(new List_One(listData)).render()}</ul>
                            </div>
                            <div class="footer-row2">
                                <ul id="list_block">${(new List_Two(listData)).render()}</ul>
                            </div>
                        </div>
                        <div class="fpost col-3 col-lg-6 col-sm-12">
                        <div class="footer-title">PRIVACY & TOS</div>
                         <ul id="list_block">${(new List_Three(listData)).render()}</ul>
                    </div>
                    <div class="footer_bottom col-12">
                        <p>Copyrights &copy;2019 <a href="#" target="_blank">AuburnForest</a></p>
                    
                </div>`;
    }
}

export { Footer };