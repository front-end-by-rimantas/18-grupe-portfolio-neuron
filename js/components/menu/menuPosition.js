function menuPosition() {
    if (window.innerWidth>900 && (document.body.scrollTop > document.querySelector('.nav-menu-items').offsetTop + 70 || document.documentElement.scrollTop > document.querySelector('.nav-menu-items').offsetTop + 70)) {
        
            document.getElementById("container-main").style.top = "0";
            document.getElementById("container-main").style.position = "fixed";
            document.getElementById("container-main").style.background = "linear-gradient(0deg, #08C291, #09c67f)";
    }
            else {
                document.getElementById("container-main").style.position = ""
                document.getElementById("container-main").style.background = ""
        }
    }   
export {menuPosition};