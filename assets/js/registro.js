validarMail = () => {
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
