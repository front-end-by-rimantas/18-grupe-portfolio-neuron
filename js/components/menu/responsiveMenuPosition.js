function responsiveMenuPosition() {
/**
 * responsive menu bar click function:
 */
    const iconbar = document.querySelector('.bar-hide');
    const menuitems = document.querySelector('.nav-menu-items');
    iconbar.addEventListener('click', () => {
            menuitems.classList.toggle('hide');
    });

    const allExpand = document.querySelectorAll('.nav-menu-items .expand')
    for (let exp of allExpand) {
        exp.addEventListener('click', ()=>{
            exp.closest('.onemenu').classList.toggle('expanded');
        })
    }

    const allClose = document.querySelectorAll('.nav-menu-items .close-hide')
    for (let close of allClose) {
        close.addEventListener('click', ()=>{
            close.closest('.onemenu').classList.toggle('expanded');
        })
    }

}

export {responsiveMenuPosition}