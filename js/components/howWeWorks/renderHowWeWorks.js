import { generateSingleWork } from './generateSinglework.js';

function renderHowWeWorks(data) {
    
    //logika
    const worktitle = `<div class="col-12"><h2 class="work-title">How we works</h2></div>`
    let HTML = '';
    const worksDOM = document.querySelector(data.selector);
    const worksCount = data.works.length;

    for (let i=0; i< worksCount; i++) {
        const work = data.works[i];
        HTML += generateSingleWork(work);
    }

    if(HTML === '') {
        console.error('ERROR: nera nei vienos normalios veikiancios paslaugos!');
        return;
    }

    return worksDOM.innerHTML = worktitle + HTML;
}

export { renderHowWeWorks }