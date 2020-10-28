class List_Three {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;
    }

    render() {
        let HTML = '';
        
        for (let i=8; i<this.data.length; i++) {
            const list = this.data[i];
            HTML += `<li><a href="${list.link}">${list.name}</a></li>`
        }
        console.log(HTML);

        return HTML;
    }
}
 export { List_Three }