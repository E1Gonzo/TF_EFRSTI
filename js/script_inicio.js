function cambiabtn(e){
    e.style="background-color: #00db50;";
    e.style.color="#ffffff";
    e.style.transition="all 0.3s ease";
}
function vuelvebtn(e){
    e.style="background-color: #00ff5edc;";
    e.style.color="#424242";
    e.style.transition="all 0.3s ease";
}

for(element of document.getElementsByClassName("btn")){
    element.setAttribute("onmouseover", "cambiabtn(this)");
    element.setAttribute("onmouseout", "vuelvebtn(this)");
}