function renderList_One(data) {

    let HTML = '';
    for (let i=0; i<data.length-7; i++) {
        const list = data[i];
        HTML += `<li><a href="${list.link}">${list.name}</a></li>`
    }

    return `<div class="footer-title">NAVIGATE</div>
    <div class="footer-row1">
        <ul>${HTML}</ul>`;
}

export { renderList_One };