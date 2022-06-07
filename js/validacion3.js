const usuario = document.getElementById("curso");
const contraseña = document.getElementById("password");
const boton = document.getElementById("validacion");



function alertaSuccess() { 
  Swal.fire({
  icon: 'success',
  title: 'Haz accedido!',
  text: 'Click en el boton de abajo para ir a su curso',
  html:'<button class="btn btn-primary"><a href="CursoEscalera.html"> Acceder</a></button>',
  showConfirmButton: false
  })
};


function alertaError(){
  Swal.fire({
  icon: 'error',  
  title: 'Compruebe sus usuario y/o contraseña',
  text: 'Intente de nuevo',

    });

} 


function validar1(){
    var usuarioValidar = "escaleramanual";
    var contraseñaValidar = "escalera";

    let validacion = (usuario.value == usuarioValidar && contraseña.value == contraseñaValidar);
    validacion ? alertaSuccess() : alertaError() ;

}

validacion.addEventListener("click", (e) => {
  e.preventDefault()
  validar1()
});
