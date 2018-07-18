validarMail = () => {
    let emailUser = document.getElementById('email').value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailUser === ''){
        console.log('debe ingresar ') 
        return;
    }
    else if(emailRegex.test(emailUser)) {
        alert('email valido ' + emailUser);
    } 
    else {
        alert('email incorrecto ' + emailUser);
    }
}

function validarLargo() {
    let claveUser = document.getElementById('passwd').value

    if (claveUser === '') {
        console.log('el termino no puede ser vacio') 
        return;
    }
    else if (claveUser.length <= 8) {
        alert('clave ok!');
        return true;
    }
    else {
        alert('clave incorrecta,debe contener máx 8 números');
        return false;

    }
}
