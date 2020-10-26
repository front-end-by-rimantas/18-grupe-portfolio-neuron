
import socialsData from './../../data/socialsData/socials.js';
import { renderSocials } from '../Socials/renderSocials.js';
import listData from './../../data/footerData/footerList.js';
import { renderList_One } from './renderList_One.js';
import { renderList_Two } from './renderList_Two.js';

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
                            ${renderList_One(listData)}
                            </div>
                            <div class="footer-row2">
                                <ul>${renderList_Two(listData)}</ul>
                            </div>
                        </div>
                        <div class="fpost col-3 col-lg-6 col-sm-12">
                        <div class="footer-title">PRIVACY & TOS</div>
                         <ul>
                            <li><a href="privacy.html">Privacy</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                        </ul>
                    </div>
                    <div class="fpost col-12">
                        <div class="copyright text-center">
                        <p>Copyrights &copy;2019 <a href="#" target="_blank">AuburnForest</a></p>
                    </div>
                </div>`;
    }
}

export { Footer };