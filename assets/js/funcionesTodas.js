(function(){

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
    btnLogin.addEventListener('click',e =>{
        //get email and password
        const email = email.value;
        const pass = password.value;
        const auth = firebase.auth();
        //Sign IN
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(e =>console.log(e.message));

    });
    //Add signup event
    btnSignUp.addEventListener('click',e =>{
        //get email and password
        //Check for real email
        const email = email.value;
        const pass = password.value;
        const auth = firebase.auth();
        //Sign In
        const promise = auth.createUserWithEmailAndPassword(email,password);
        promise
            .catch(e =>console.log(e.message));
    });

    btnLogOut.addEventListener('click', e =>{
        firebase.auth().signOut();
    });


    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser=>{
        if (firebaseUser){
            console.log(firebaseUser);
        } else{
            console.log ('not logged in');
        }
    });
     
    /////////////////////////////Comments
    //Get elements
    const comments = document.getElementById('comment');
    //create references
    const dbRefObject = 
    // const password = document.getElementById('password');
    // const btnLogin = document.getElementById('login');
    // const btnSignuUp = document.getElementById('btn-signup');
    // const btnLogOut = document.getElementById('btnLogOut');








}());
