(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyApnvAl5MOmnMazHwX7TadUGUx8TFu6ErA",
        authDomain: "red-social-7fc83.firebaseapp.com",
        databaseURL: "https://red-social-7fc83.firebaseio.com",
        projectId: "red-social-7fc83",
        storageBucket: "red-social-7fc83.appspot.com",
        messagingSenderId: "72316468469"
    };
    firebase.initializeApp(config);

    //Get elements
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const btnLogin = document.getElementById('login');
    const btnSignuUp = document.getElementById('btn-signup');
    const btnLogOut = document.getElementById('btnLogOut');

    //Add login event
    btnLogin.addEventListener('click', e => {
        //get email and password
        const email = email.value;
        const pass = password.value;
        const auth = firebase.auth();
        //Sign IN
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));

    });
    //Add signup event
    btnSignUp.addEventListener('click', e => {
        //get email and password
        //Check for real email
        const email = email.value;
        const pass = password.value;
        const auth = firebase.auth();
        //Sign In
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise
            .catch(e => console.log(e.message));
    });

    btnLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
    });


    /*

    */
    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }
    });

    /////////////////////////////Comments
    //Get elements
    const comment = document.getElementById('comment');
    //create references
    const dbRefObject = firebase.database().ref().child('comment');

    //Sync object
    dbRefObject.on('value'.snap => {
        const cont = document.getElementById("cont");
        //creo un elemento en JS
        const newComment = document.createElement("div");
        //creo un checkbox: un elemtno y le doy un atributo
        const chck = document.createElement("input");
        //le indico el tipo de elemento que es
        chck.type = "checkbox";
        // creo el corazon con fontawesome
        const heart = document.createElement("i");
        //le paso clase al elemento desde el DOM via classslists(ahi puedo hacer miuchas clases)
        heart.classList.add("fa", "fa-heart", "heart");
        // hago lo mismo para el basurero
        const trash = document.createElement("i");

        trash.classList.add("fa", "fa-trash", "trash");
        //creo un elemetno
        const contenedorElemento = document.createElement("p");
        //le digo que es un texto
        let textNewComment = document.createTextNode(comments);
        //llamo al parrafo que es la familia directa de ese elemento
        contenedorElemento.appendChild(textNewComment);
        //entrego los hijos a sus papas que estan en html
        newComment.appendChild(chck);
        newComment.appendChild(heart);
        newComment.appendChild(trash);
        newComment.appendChild(contenedorElemento);
        cont.appendChild(newComment);

        //para poner el corazon rojo
        heart.addEventListener("click", () => {
            heart.classList.toggle("red") //se llama red por el nombre de la clase no por el color que yo quiero que se ponga
        })

        trash.addEventListener("click", () => {
            alertify.confirm("¿Está seguro que quiere eliminar el comentario?",

                function () {
                    alertify.success('Ok');
                    cont.removeChild(newComment); //borro el mensaje nuevo
                },
                function () {
                    alertify.error('Cancel');
                }
            );

        })

        chck.addEventListener("click", () => {
            contenedorElemento.classList.toggle("strike-out"); //tacho el texto
        })
    })

});


}());