class CalculateStyle {
    constructor(){
    }
    calculateWidth(breakPointWidth){
        let count = 1;
        let width = 0;
        for (const breakpoint of breakPointWidth) {
            if ( innerWidth > breakpoint ) {
                count++                
            }
        }
        width = 100/count;
        width += '%';    
        return width;
    }
   changeWidth(width,listHtml){
    for (const iterator of listHtml) {
        iterator.style.width=width;
    }

   } 
}

export { CalculateStyle }