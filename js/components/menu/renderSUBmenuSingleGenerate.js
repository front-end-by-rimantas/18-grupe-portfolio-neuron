function renderSUBmenuSingleGenerate(data, alldata) {
    // Capitalise first char in word
const words = alldata.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
alldata = words.join(" ");

/**  
 * creating href to hml files 
 */
const href= alldata.split(" ").join("").toLowerCase().concat('.html')

/**
 * creating submenu and close items
 */
const submenuHtml= `<a href="./${href}">${alldata}</a>`;
return submenuHtml;
}

export {renderSUBmenuSingleGenerate }