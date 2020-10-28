class List_Two {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;
    }

    render() {
        let HTML = '';

        for (let i=5; i<this.data.length-4; i++) {
            const list = this.data[i];
            HTML += `<li><a href="${list.link}">${list.name}</a></li>`
        }
        console.log(HTML);

        return HTML;
    }
}
 export { List_Two }
