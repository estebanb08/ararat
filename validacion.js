var text = document.getElementById("nombreUsuario");
var password = document.getElementById("password").value;
console.log("Usuario: " + text.value);
console.log("Contraseña: " + password);
text.title = "Ingresá EL NOMBRE DE LA EMPRESA"; 
console.log("Título: " + text.title);


 function validarFormulario() {
    if ((password == "") || (password.length == 0)) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "Ingresá tu Contraseña!";
        resultado.className = "p-3 mb-2 bg-dark text-white";
    } else {
        resultado.innerHTML = "";
        resultado.className = "";
    }
}

validarFormulario();


function usuarioFalso(){
    if((text == "CursoCovid19")){
        let usuarioVerdadero = document.getElementById("nombreUsuario");
        usuarioVerdadero.innerHTML ="Presiona Enviar";
        usuarioVerdadero.className = '<button type="submit" class="btn btn-primary"><a href="CursoCovid19.html"> Submit</a></button>';
    }else{
        resultado2.innerHTML = "Ingresá tu Nombre de usuario!";
            resultado2.className = "p-3 mb-2 bg-dark text-white";
    }
}




