function cambianav(e){
    e.style="font-size:21px";
    e.style="background-color: #441616;";
    e.style.color="rgb(255, 255, 255)";
    e.style.transition="all 0.5s ease";
}
function vuelvenav(e){
    e.style="font-size:17px";
    e.style="background-color: rgb(235, 216, 192);";
    e.style.color="#441616";
    e.style.transition="all 0.5s ease";
}

for(element of document.getElementsByClassName("links")){
    element.setAttribute("onmouseover", "cambianav(this)");
    element.setAttribute("onmouseout", "vuelvenav(this)");
}
for(element of document.getElementsByClassName("ver-carrito")){
    element.setAttribute("onmouseover", "cambianav(this)");
    element.setAttribute("onmouseout", "vuelvenav(this)");
}