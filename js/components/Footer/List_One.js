class List_One {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;
    }

    render() {
        let HTML = '';

        for (let i=0; i<this.data.length-7; i++) {
            const list = this.data[i];
            HTML += `<li><a href="${list.link}">${list.name}</a></li>`
        }

        return HTML;
    }
}
 export { List_One }
