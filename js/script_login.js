function cambiobutton(e){
    e.style="background-color: #00db50;";
    e.style.color="#424242";
    e.style.border="solid #00db50";
    e.style.transition="all 0.2s ease";
    e.style.cursor="pointer";
}
function volverbutton(e){
    e.style="background-color: #00ff5edc;";
    e.style.color="#424242";
    e.style.transition="all 0.2s ease";
}
function cambiolink(i){
    i.style.textDecoration ="underline";
    i.style.transition="all 0.2s ease";
    i.style.cursor="pointer";
}
function volverlink(i){
    i.style.textDecoration ="none";
    i.style.transition="all 0.2s ease";
}
for(element of document.getElementsByClassName("button")){
    element.setAttribute("onmouseover", "cambiobutton(this)");
    element.setAttribute("onmouseout", "volverbutton(this)");
}
for(element of document.getElementsByClassName("link")){
    element.setAttribute("onmouseover", "cambiolink(this)");
    element.setAttribute("onmouseout", "volverlink(this)");
}