function renderList_Two(data) {

    let HTML = '';
    for (let i=5; i<data.length-4; i++) {
        const list = data[i];
        HTML += `<li><a href="${list.link}">${list.name}</a></li>`
    }

    return HTML;
}

export { renderList_Two };