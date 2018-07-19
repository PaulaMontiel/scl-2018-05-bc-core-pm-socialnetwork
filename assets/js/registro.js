
document.getElementById("btn-signup").onclick = function () {
    location.href = "home.html";
};

function registerWithFirebase() {

    const emailValue = email.value;
    const passwordValue = pwd.value;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario creado con éxito");
            registerData(emailValue);
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}

function ObtenerUser(emailVerified){
    var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
 }
}

let textNombre = document.getElementById('nombre');
let textApelldo = document.getElementById('Apellido');
let textEmail = document.getElementById('email');
let botoncillo = document.getElementById('register');
let users = document.getElementById('usuarios');

let registerData = (data) => {
    console.log('entre')
    let name = textNombre.value;
    let firtsName = textApelldo.value;
    let emaila = data;

    firebase.database().ref('users').push({
        nombre: name,
        apellido: firtsName,
        mail: emaila

    });
}










/*validarMail = () => {
    let emailUser = document.getElementById('email').value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailUser === '') {
        console.log('debe ingresar ')
        return;
    }
    else if (emailRegex.test(emailUser)) {
        alert('email valido ' + emailUser);
    }
    else {
        alert('email incorrecto ' + emailUser);
    }
}

function validarClaves() {
    let claveUser = document.getElementById('passwd').value
    let claveUser2 = document.getElementById('passwd2').value;
    if (claveUser === '' && claveUser2 === '') {
        console.log('el termino no puede ser vacio')
        return;
    }
    else if (claveUser.length <= 8 && claveUser2.length <=8) {
        console.log('clave ok!');
        return;
    }
    else {
        alert('clave incorrecta,debe contener máx 8 números');
        return false;

    }
}

function compararPassword() {
    let clave1 = document.getElementById("passwd");
    let clave2 = document.getElementById("passwd2");
    if (clave1 != clave2) {
        alert("Las passwords deben de coincidir");
        return false;
    } else {
        alert("Todo esta correcto");
        return true;
    }

}
*/