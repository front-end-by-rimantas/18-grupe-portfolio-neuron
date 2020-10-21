function responsiveMenuPosition() {
/**
 * responsive menu bar click function:
 */
    const iconbar = document.querySelector('.bar-hide');
    const menuitems = document.querySelector('.nav-menu-items');
    iconbar.addEventListener('click', () => {
        menuitems.classList.toggle('item-hide');
    });

    /**
     * responsive postion set 
     */

    clickas('.home');
    clickas('.pages');
    clickas('.shop');
    clickas('.blog');

    function clickas(position) {
        const queryposition = document.querySelector(position);

        queryposition.addEventListener('click', () => {
        queryposition.closest('.onemenu').querySelector('.subcontent').style.top = queryposition.closest('.onemenu').offsetTop+ 50+'px';
        
        console.log(queryposition.closest('.onemenu').offsetTop+ 50+'px');
        console.log(position);  

        queryposition.closest('.onemenu').querySelector('.subcontent').classList.toggle('show');

    })
}
    
 
}

export {responsiveMenuPosition}