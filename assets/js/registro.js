validarMail = () => {
    var emailUser = document.getElementById('email').value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(emailUser)) {
      alert('email valido ' + emailUser);
    } else {
      alert('email incorrecto ' + emailUser);
    }
}

function validarNum(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}

function validarLargo() {
    var claveUser = document.getElementById('clave').value
    if(claveUser.length <= 8){
        alert('clave ok!');
        return true
    }
    else{
        alert('clave incorrecta,debe contener máx 8 números');
        return false;
    }
}