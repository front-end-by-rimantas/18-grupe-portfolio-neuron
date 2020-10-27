class Carousel {
    constructor(params) {
        this.data = params.data;
        this.renderEngine = params.renderEngine;
        this.breakpoints = params.breakpoints;

        this.DOM = null;
        this.listDOM = null;
        this.itemPerView = 1;

        this.contentObj = new this.renderEngine(this.data);
        this.contentHTML = this.contentObj.generateHTML();

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
        this.updateListWidth();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.data.selector);
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    render() {
        this.DOM.innerHTML = `<div class="carousel">
                                <div class="content">
                                    <div class="list">
                                        ${this.contentHTML}
                                    </div>
                                </div>
                            </div>`;

        this.listDOM = this.DOM.querySelector('.content > .list');
    }

    updateListWidth() {
        // keiciantis ekrano plociui, reikia pakeisti rodomu elementu plocius
        // infinity..1000 : 3
        // 999..600 : 2
        // 599..0 : 1
        let itemsPerView = 1;
        for (let width of this.breakpoints) {
            if (width < innerWidth) {
                itemsPerView++;
            }
        }

        this.itemPerView = itemsPerView;

        const total = this.data.length;
        const listWidth = 100 * total / itemsPerView;

        this.listDOM.style.width = listWidth + '%';
    }

    addEvents() {
        // paspaudus taskiukus turi judeti/slinktis turinys

        window.addEventListener('resize', () => {
            this.updateListWidth();
        });
    }
}


export { Carousel }