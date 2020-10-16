// import
import {renderMenuSingleGenerate} from './renderMenuSingleGenerate.js'

function renderMenu(data) {
    // variables declaration
    const  main = data.main;
    let html = '';

    // input validation

    // logic
    for (let i = 0; i < main.length; i++) {
        html += renderMenuSingleGenerate(main[i]);
    }
    console.log(html);
    // logic validation
    if (html ==='') {
        console.error('nera sukurta menu');
    }
    let menuDOM = document.querySelector('.nav-menu-items');
    menuDOM.insertAdjacentHTML('afterbegin',html)
    console.log(menuDOM);
    // output
}

export {renderMenu}