import {renderSUBmenuSingleGenerate} from './renderSUBmenuSingleGenerate.js'
function renderMenuSingleGenerate(data,alldata) {
    
    // reikai atlikti validacija
    // if (!isValidMenuData(data)){
    // return '';}

    let subhtml='';
    let href= data.split(" ").join("").toLowerCase().concat('.html')
    if (href==='home.html') {href='index.html'}
    if (alldata.length!=0){
        subhtml=`<li class="onemenu item-hide"><a href="${href}">${data.toUpperCase()}</a><div class = "subcontent">`;
        for (let i = 0; i < alldata.length; i++) {
            subhtml+=renderSUBmenuSingleGenerate(data, alldata[i]);
        }
        subhtml+=`</div></li>`;
    return subhtml;
    } else{
        console.log();
        return `<li class="onemenu item-hide"> <a href="${href}">${data.toUpperCase()}</a></li>`
    }
}
export {renderMenuSingleGenerate}