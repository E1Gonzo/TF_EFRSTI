function parpadeartitu(){
    let c = ["#22ff00", "#", "red", "magenta", "#d34a00", "#FF00FF"];
    let r = c[Math.floor(Math.random() * c.length)];
    document.getElementById("titu").style.color = r;
}
setInterval(parpadeartitu, 900);


function desaparecerimagen(e){
    e.style.opacity="0.55";
    e.style.transition="all 0.8s ease";
}
function aparecerimagen(e){
    e.style.opacity="1";
    e.style.transition="all 0.7s ease";
}
for(element of document.getElementsByClassName("imagen")){
    element.setAttribute("onmouseover", "desaparecerimagen(this)");
    element.setAttribute("onmouseout", "aparecerimagen(this)");
}

function clickimagen(e){
    alert("Regístrese para utilizar estas ofertas en su próxima compra.");
}
for(element of document.getElementsByClassName("imagen")){
    element.setAttribute("onclick", "clickimagen(this)");
}


function cambiobutton(e){
    e.style="background-color: #00db50d5;";
    e.style.color="#ffffff";    
    e.style.border="solid #00db50d5";
    e.style.transition="all 0.2s ease";
}
function volverbutton1(e){
    e.style="background-color: #00ff5e;";
    e.style.color="#424242";
    e.style.transition="all 0.2s ease";
}
function volverbutton2(e){
    e.style="background-color: transparent;";
    e.style.color="#00c94a";
    e.style.transition="all 0.2s ease";
}
for(element of document.getElementsByClassName("button1")){
    element.setAttribute("onmouseover", "cambiobutton(this)");
    element.setAttribute("onmouseout", "volverbutton1(this)");
}
for(element of document.getElementsByClassName("button2")){
    element.setAttribute("onmouseover", "volverbutton1(this)");
    element.setAttribute("onmouseout", "volverbutton2(this)");
}