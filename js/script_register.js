function parpadear(){
    let col = ["#00cfb4", "#19bd00", "#ecdd00", "#ffffff", "red", "magenta", "#FC6E22", "#FF00FF"];
    let m = col[Math.floor(Math.random() * col.length)];
    document.getElementById("tituloh3").style.color = m;
}
setInterval(parpadear, 900);


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
for(element of document.getElementsByClassName("button1")){
    element.setAttribute("onmouseover", "cambiobutton(this)");
    element.setAttribute("onmouseout", "volverbutton(this)");
}
for(element of document.getElementsByClassName("button2")){
    element.setAttribute("onmouseover", "cambiobutton(this)");
    element.setAttribute("onmouseout", "volverbutton(this)");
}