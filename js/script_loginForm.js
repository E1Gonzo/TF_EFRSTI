/*CASILLAS INPUT*/
var correo = document.querySelector("input[name='txtCorreo']");
var contrasena = document.querySelector("input[name='txtContrasena']");

correo.addEventListener('focus', function(event){
    event.target.style.background = "#331212b2";
    event.target.style.color="white";
});
correo.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color="black";
});
contrasena.addEventListener('focus', function(event){
    event.target.style.background = "#331212b2";
    event.target.style.color="white";
});
contrasena.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color="black";
});


/*BOTONES*/
var botonEnviar = document.querySelector(".button[type='submit']");
var linkEnviar = document.querySelector(".link[type='submit']");

botonEnviar.addEventListener('click', function(event){
    event.preventDefault();
    validacion();
    borrar();
});
linkEnviar.addEventListener('click', function(event){
    event.preventDefault();
    borrar();
    redireccionar();
});
function validacion() {
    var correo = document.getElementById("txtIDCorreo").value;
    var contrasena = document.getElementById("txtIDContrasena").value;
    if (correo.trim() === "") {
        alert("Ingrese un correo electrónico válido");
        return false;
    }
    else    if (contrasena.trim() === "") {
        alert("Contraseña inválida");
        return false;
    }
    else {
        alert("Bienvenido, "+correo);
        return false;
    }
}
function borrar() {
    correo.value = "";
    contrasena.value = "";
}
function redireccionar() {
    window.location.href = "../paginas/register.html";
}


/*VALIDACIÓN DE CASILLLAS INPUT*/
document.querySelector("input[name='txtCorreo']").addEventListener("keypress", function(event){
    var charCode = event.keyCode || event.which;
    var charStr = String.fromCharCode(charCode);
    var pattern = /^[a-zA-Z0-9@.]+$/;
    if (!pattern.test(charStr)) {
        event.preventDefault();
        return;
    }
});
document.querySelector("input[name='txtContrasena']").addEventListener("keypress", function(event){
    var longCon=document.querySelector("input[name='txtContrasena']").value.length;
    if(longCon>=25){
        window.event.preventDefault();
        return;
    }
});