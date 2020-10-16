function renderMenuSingleGenerate(data) {
    
    // reikai atlikti validacija
    // if (!isValidMenuData(data)){
    // return '';}
    return `<li class="${data} item-hide">${data}</li>`
}

export {renderMenuSingleGenerate}