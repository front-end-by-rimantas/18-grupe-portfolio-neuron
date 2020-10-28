class Row_One {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
       console.log(params.data);
        this.DOM = null;
    }

    render() {
        let HTML = '';

        for (let i=0; i<this.data.length-2; i++) {
            const post = this.data[i];
            HTML += `<div class="singlepost mb-15">
                        <i class="fla ${post.icon}"></i>
                        <h3 class = "title">${post.title}</h3>
                        <p class = "desc">${post.description}</p>
                    </div>`
        }

        return HTML;
    }
}
 export { Row_One }
