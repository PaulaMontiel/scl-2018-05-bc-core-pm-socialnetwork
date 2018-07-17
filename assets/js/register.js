/*let nombre= [];
let apellidos =[];
let email= [];
let password= [];*/

function validarRegistro(){
let nombre, apellidos, correo, contrasena;
nombre = document.getElementById("nombre").value;
apellidos = document.getElementById("Apellido").value;
correo = document.getElementById("correo").value;
password =document.getElementById("password").value;
if(nombre === "" || apellidos === "" || correo ==="" || password === ""){
    alert("Todos los campos son obligatorios");
    return false;
}

}