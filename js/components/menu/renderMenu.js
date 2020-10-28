// import
import {renderMenuSingleGenerate} from './renderMenuSingleGenerate.js'
import {menuPosition} from './menuPosition.js'
import {responsiveMenuPosition} from './responsiveMenuPosition.js'


function renderMenu(data) {
    // variables declaration
    const main = data.main;
    const alldata = data;
    let html = '';

    // input validation

    // logic

    html += renderMenuSingleGenerate(main[0],alldata.home);
    html += renderMenuSingleGenerate(main[1],alldata.about);
    html += renderMenuSingleGenerate(main[2],alldata.features);
    html += renderMenuSingleGenerate(main[3],alldata.pages);
    html += renderMenuSingleGenerate(main[4],alldata.shop);
    html += renderMenuSingleGenerate(main[5],alldata.blog);
    html += renderMenuSingleGenerate(main[6],alldata.contact);


    // logic validation
    if (html ==='') {
        console.error('nera sukurta menu');
    }
    
    // output
    let menuDOM = document.querySelector('.nav-menu-items');
    menuDOM.insertAdjacentHTML('afterbegin',html)

    //function - on scrollin menu poistion fixed 
    window.onscroll = function() {menuPosition()};

    /**
     * icon bar toglle on responsive 
     */
    
    responsiveMenuPosition ();

}

export {renderMenu}