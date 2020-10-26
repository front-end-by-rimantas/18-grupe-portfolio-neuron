
function renderSocials(data) {

    let HTML = '';
    const size = data.length;
    for (let i=0; i<size; i++) {
        const network = data[i];
        HTML += `<li><a href="${network.link}" class="fa fa-${network.icon}" target="_blank"></a></li>`
    }

    return HTML;
}

export { renderSocials };