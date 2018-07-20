//NavBar
$(document).ready(function() {
    $('a[href="#navbar-more-show"], .navbar-more-overlay').on('click', function(event) {
		event.preventDefault();
		$('body').toggleClass('navbar-more-show');
		if ($('body').hasClass('navbar-more-show'))	{
			$('a[href="#navbar-more-show"]').closest('li').addClass('active');
		}else{
			$('a[href="#navbar-more-show"]').closest('li').removeClass('active');
		}
		return false;
	});
});



//Opción para enviar foto
function sendPhotoToStorage(){
    const photoFile = photoFileSelector.files[0];
    const fileName = photoFile.name; // nombre del archivo, sirve para armar la ruta
    const metadata = { // datos sobre el archivo que estamos subiendo
        contentType : photoFile.type// tipo de archivo que estamos subiendo
    };
    // va a retornar una tarea= task (objeto)
    const task = firebase.storage().ref('images') //Corresponden a las carpetas que tenemos dentro del storage
        .child(fileName)
        .put(photoFile, metadata);

    task.then(snapshot => snapshot.ref.getDownloadURL())  //obtenemos la url de descarga (de la imagen)
        .then(url => {
            console.log("URL del archivo > "+url);
        });
}


//creo constante para llamar al boton "btn"
const boton = document.getElementById("btn");
//pongo algo para que cuando hagan click haga lo siguiente...
boton.addEventListener("click",() => {
    //creo una variable para dejar lo que se introdujo en el textarea
    let comments = document.getElementById ("comment").value;
    //limpio lo que habia en la caja de texto
    document.getElementById("comment").value = "";
    //llamo a un  elemnto que vive en html para que sea padre de lo siguente que hare en JS

    if (comments.length === 0 || comments === null){
        alert ("Debes ingresar un mensaje");
        return false;
      }

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
    heart.classList.add("fa","fa-heart","heart");
    // hago lo mismo para el basurero
    const trash = document.createElement ("i");

    trash.classList.add("fa","fa-trash","trash");
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
    heart.addEventListener("click", ()=> {
        heart.classList.toggle("red")//se llama red por el nombre de la clase no por el color que yo quiero que se ponga
    })

    trash.addEventListener("click", ()=>{
      alertify.confirm("¿Está seguro que quiere eliminar el comentario?",
   function() {
     alertify.success('Ok');
     cont.removeChild(newComment);//borro el mensaje nuevo
   },
   function() {
     alertify.error('Cancel');
   }
 );

    })

    chck.addEventListener("click", ()=>{
        contenedorElemento.classList.toggle("strike-out");//tacho el texto
    })
})
