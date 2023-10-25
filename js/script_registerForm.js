var nombres = document.querySelector("input[name='txtNombre']");
var correos = document.querySelector("input[name='txtCorreo']");
var telefonos = document.querySelector("input[name='txtTelefono']");
var direccionA = document.querySelector("textarea[name='txtdirec']");

nombres.addEventListener('focus', function(event){
    event.target.style.background = "#331212b2";
    event.target.style.color="white";
});
nombres.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color="black";
});
correos.addEventListener('focus', function(event){
    event.target.style.background = "#331212b2";
    event.target.style.color="white";
});
correos.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color="black";
});
telefonos.addEventListener('focus', function(event){
    event.target.style.background = "#331212b2";
    event.target.style.color="white";
});
telefonos.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color="black";
});
direccionA.addEventListener('focus', function(event){
    event.target.style.background = "#331212b2";
    event.target.style.color="white";
});
direccionA.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color="black";
});



var buttonEnviar = document.querySelector(".button1[type='submit']");
var buttonVolver = document.querySelector(".button2[type='submit']");

buttonEnviar.addEventListener('click', function(event){
    event.preventDefault();
    validacionVacio();
});
buttonVolver.addEventListener('click', function(event){
    event.preventDefault();
    borrar();
    redireccionar();
});
function validacionVacio() {
    var nombreUsuario = document.getElementById("txtIDNombre").value;
    var mailUsuario = document.getElementById("txtIDCorreo").value;
    var telefonoUsuario = document.getElementById("txtIDTelefono").value;
    var direccionUsuario = document.getElementById("txtIDdirec").value;
    if (nombreUsuario.trim() === "") {
        alert("Ingrese un nombre");
        return false;
    }
    else if (mailUsuario.trim() === "") {
        alert("Ingrese un correo electrónico válido");
        return false;
    }
    else if (telefonoUsuario.trim() === "") {
        alert("Ingrese un número de teléfono");
        return false;
    }
    else if (direccionUsuario.trim() === "") {
        alert("Ingrese una dirección");
        return false;
    }
    else {
        alert("¡Su información ha sido registrada exitosamente!");
        borrar();
        return false;
    }
}
function borrar() {
    nombres.value = "";
    correos.value = "";
    telefonos.value = "";
    direccionA.value = "";
}
function redireccionar() {
    window.location.href = "../paginas/login.html";
}


document.querySelector("input[name='txtNombre']").addEventListener("keypress", function(event){
    var charCode = event.keyCode || event.which;
    var charStr = String.fromCharCode(charCode);
    var pattern = /^[a-zA-Z\s]+$/;
    if (!pattern.test(charStr)) {
        event.preventDefault();
        return;
    }
});
document.querySelector("input[name='txtCorreo']").addEventListener("keypress", function(event){
    var charCode = event.keyCode || event.which;
    var charStr = String.fromCharCode(charCode);
    var pattern = /^[a-zA-Z0-9@.]+$/;
    if (!pattern.test(charStr)) {
        event.preventDefault();
        return;
    }
});
document.querySelector("input[name='txtTelefono']").addEventListener("keypress", function(event){
    var longTelf=document.querySelector("input[name='txtTelefono']").value.length;
    if(longTelf>=9){
        window.event.preventDefault();
        return;
    }
    var ascii=event.keyCode || event.which; 
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        return;
    }
});

function validacion(fram){
    testing=/^\s*$/;
    if(testing.test(fram.txtNombre.value)){
        window.event.preventDefault();
        return;
    }
    let caTelf=/^\d{8}$/;
    if(!caTelf.test(fram.txtTelefono.value)){
        window.event.preventDefault(); 
        return;
    }
}