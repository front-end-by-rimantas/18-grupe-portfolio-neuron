// import
import {renderMenuSingleGenerate} from './renderMenuSingleGenerate.js'
import {menuPosition} from './menuPosition.js'

function renderMenu(data) {
    // variables declaration
    const  main = data.main;
    let html = '';

    // input validation

    // logic
    for (let i = 0; i < main.length; i++) {
        html += renderMenuSingleGenerate(main[i]);
    }
    // logic validation
    if (html ==='') {
        console.error('nera sukurta menu');
    }
    
    // output
    let menuDOM = document.querySelector('.nav-menu-items');
    menuDOM.insertAdjacentHTML('afterbegin',html)

    //function - on scrollin menu poistion fixed 
    window.onscroll = function() {menuPosition()};
            
}

export {renderMenu}