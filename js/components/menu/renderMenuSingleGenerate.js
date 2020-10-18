import {renderSUBmenuSingleGenerate} from './renderSUBmenuSingleGenerate.js'
function renderMenuSingleGenerate(data,alldata) {
    
    // reikai atlikti validacija
    // if (!isValidMenuData(data)){
    // return '';}

    let subhtml='';
    if (alldata!==''){
        subhtml=`<li class="${data} main-menu item-hide">${data.toUpperCase()}
                    <div class = "subcontent">`;
        for (let i = 0; i < alldata.length; i++) {
            subhtml+=renderSUBmenuSingleGenerate(data, alldata[i]);
        }
        subhtml+=`   </div>
                </li>`;
    return subhtml;
    } else{
        return `<li class="main-menu item-hide">${data}</li>`
    }
}
export {renderMenuSingleGenerate}