document.getElementById("menu-burger").onclick = showMenu;
document.getElementById("menu-close").onclick = closeMenu;

let menu = document.getElementById("wrapper-menu-row");

let menuClose = document.getElementById("menu-close");
let menuBurger = document.getElementById("menu-burger");



let count = 0;
function showMenu() {
    count+=1;
    if(count === 1) {
        menu.style.transform ="translateX(" + 0 +"px)";
        menuBurger.style.display = "none";
        menuClose.style.display = "block";

    }
    }


function closeMenu(){
    count-=1;
    if(count === 0){
        menu.style.transform ="translateX("  + 100 +"%)";
        menuBurger.style.display = "block";
        menuClose.style.display = "none";
    }
}



