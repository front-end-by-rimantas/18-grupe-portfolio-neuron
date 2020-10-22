function generateSingleWork (data) {

    const HTML = `<div class="col-3 col-lg-6 col-sm-12 single-post-work">
                    <div class="workIcons workHover">
                        <i class="${data.icon}"></i>
                    </div>
                    <h3 class="how-title">${data.title}</h3>
                    <div class="work-round-shape"></div>
                </div>`

    return HTML;
}

export { generateSingleWork }