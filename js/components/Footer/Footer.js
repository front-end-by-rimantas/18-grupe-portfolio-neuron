import socialsData from './../../data/socialsData/socials.js';
import { renderSocials } from '../Socials/renderSocials.js';

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
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="features.html">Features</a></li>
                                    <li><a href="mobile-app.html">Mobile App</a></li>
                                    <li><a href="software-demo.html">Software Demo</a></li>
                                    <li><a href="software-download.html">Software Download</a></li>
                                </ul>
                             </div>
                            <div class="footer-row2">
                                <ul>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="chatbot.html">ChatBot</a></li>
                                </ul>
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