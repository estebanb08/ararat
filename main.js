//variables
const costoDeLosCursosMax = 20000;
const costoDeLosCursos = 5000;
const descuento = 20;
const personasMax = 20;
const InteresMP = 20;
const cuota3 = 15;
const cuota6 = 25;
const cuota12= 45;
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multiplicacion = (a,b) => a * b;
const division = (a,b) => a / b;



var text = document.getElementById("nombreUsuario");
var password = document.getElementById("password").value;
console.log("Usuario: " + text.value);
console.log("Contraseña: " + password);
console.log("Título: " + text.title);
text.title = "Ingresá EL NOMBRE DE LA EMPRESA"; 

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
function obtenerDatos() {
    var text = document.getElementById("nombreUsuario").value;
    var contrasena = document.getElementById("password").value;}
// // Asignar valores
document.getElementById("nombreUsuario").value = "CursoCovid19";
document.getElementById("password").value = "Covid2022";






const productos = [
    {ID: 1, nombreC: 'COVID'},
    {ID: 2, nombreC: 'RIEGOS LABORABLES'},
    {ID: 3, nombreC: 'PROTECCION DE EXTREMIDADES'},
    {ID: 4, nombreC: 'ESCALERA MANUAL'},
]

const nombresC = productos.map((el) => el.nombreC);
console.log(nombresC);

                                
//usuario
class Usuario {
    constructor (Nombre, Edad) {
        this.Nombre = Nombre;
        this.Edad = Edad;
    }

}   
const NuevoUsuario = new Usuario("Esteban Bullon", 25);
alert("Hola " + NuevoUsuario.Nombre);

class Cantidad {
    constructor (CantUsuarios){
        this.CantUsuarios = parseInt(prompt("¿Que cantidad de personas van a ser?"));
        console.log(Cantidad.CantUsuarios)
    }
}
const ListadoDeNombre = [];
const NuevaLista = new Cantidad();
    console.log(`Cantidad de usuarios, ${NuevaLista.CantUsuarios}`);

var UsuariosCant = NuevaLista.CantUsuarios;
do{
    let nombres = prompt("Ingrese nombre y apellido de su personal");
    ListadoDeNombre.push(nombres.toUpperCase());
    console.log(ListadoDeNombre);
}while(ListadoDeNombre.length != UsuariosCant);
    let nombres1 = prompt("Su nombre y apellido");
    ListadoDeNombre.push(nombres1.toUpperCase());
alert("Usuarios Ingresados: " + ListadoDeNombre.length);

let FinalLista = ListadoDeNombre;





const buscador = productos.find(productos => productos.nombreC === "RIESGOS COVID");
console.log(buscador);

alert("El producto que buscaste: no se encuentra en nuestro sistema");


let cursoNombres;

do {  
    cursoNombres = prompt("¿Que curso desea elegir (Covid, Riesgos laborables, Proteccion de extremidades, Escalera Manual)? (sujeto a que por personas sale $5.000).").toUpperCase();

    if ((cursoNombres == (nombresC[0])) || (cursoNombres == (nombresC[1]))|| (cursoNombres == (nombresC[2])) || (cursoNombres == (nombresC[3]))) {
        break;
    }
    
} while (cursoNombres != (nombresC[0]) || cursoNombres != (nombresC[1]) || cursoNombres != (nombresC[2]) || cursoNombres != (nombresC[3]));






let formasDePago;
do{
    formasDePago = prompt("Ingrese su forma de pago (Debito / MercadoPago / Credito)").toUpperCase();

    if ((formasDePago == "DEBITO") || (formasDePago == "MERCADOPAGO") || (formasDePago == "MERCADO PAGO")|| (formasDePago == "CREDITO")){
        break;
    }
 
} while (formasDePago != "DEBITO" || formasDePago != "MERCADOPAGO" || formasDePago != "MERCADO PAGO" || formasDePago != "CREDITO");

//VALIDACIONES
let cuotas;
let MercadoPagoPago;

if (formasDePago == "DEBITO"){
    cuotas = 0;
} else if ((formasDePago == "MERCADOPAGO") || (formasDePago == "MERCADO PAGO")) {
    MercadoPagoPago = parseInt(prompt("¿Lo va a pagar con MercadoCredito(13) / Pago unico (14)?"));
} else {
    cuotas = parseInt(prompt("Ingrese las cantidad de cuotas en las que quiera pagar nuestros cursos 3, 6 o 12"));
}



//cuanto paga
let precioFinal= costoDeLosCursos * UsuariosCant;

//Descuento FUNCIONA
const descuentoD = x => (descuento / 100) * x;
let DescuentoAplicado
let TotalAPagarDesc

if (precioFinal >= costoDeLosCursosMax) {
    TotalAPagarDesc = resta(precioFinal, descuentoD(precioFinal));
    precioFinal = TotalAPagarDesc;
    DescuentoAplicado = true;
} else {
    precioFinal = precioFinal;
    DescuentoAplicado = false;
}

//cuotas
const funcionCuotas = (a, b) => a + ((a * b) / 100 ); //FUNCIONA
let InteresCuota
let InteresAplicado
let TotalApagarCuotas
let TotalApagarCuotasFinal
let Intereses
let DivisionCuotas =  division(InteresCuota, cuotas);

if ((cuotas == 0) || (cuotas == 1)) {
    InteresAplicado = false;
    TotalApagarCuotas = precioFinal;
} else if ((MercadoPagoPago == 13) || (MercadoPagoPago == 14)) {
    InteresCuota = funcionCuotas(precioFinal, InteresMP);
    TotalApagarCuotas = InteresCuota;
    InteresAplicado = true;
    Intereses = InteresMP;
} else if ((cuotas > 2) && (cuotas <= 5)) { 
    InteresCuota = funcionCuotas(precioFinal, cuota3);
    TotalApagarCuotas = DivisionCuotas;
    TotalApagarCuotasFinal = InteresCuota;
    InteresAplicado = true;
    Intereses = cuota3;

} else if ((cuotas >= 6) && (cuotas <= 11)){
    InteresCuota = funcionCuotas(precioFinal, cuota6);
    TotalApagarCuotas =  DivisionCuotas;
    TotalApagarCuotasFinal = InteresCuota;
    InteresAplicado = true;
    Intereses = cuota6;
} else if (cuotas <= 12){
    InteresCuota = funcionCuotas(precioFinal, cuota12);
    TotalApagarCuotas = DivisionCuotas;
    TotalApagarCuotasFinal = InteresCuota;
    InteresAplicado = true;
    Intereses = cuota12;
}

//LO QUE VE EL USUARIO ES


let mensaje = suma(NuevoUsuario.Nombre , (suma(suma(", así quedó tu carrito. Curso: ", cursoNombres), (". "))));
mensaje += suma(suma(" Precio por usuario $", costoDeLosCursos), (". "));
mensaje += suma(suma(" Personas que van a poder hacer el curso ", FinalLista), (". "));

if (DescuentoAplicado){
    mensaje += suma(suma(" Descuento del ", descuento), suma("% precio final de $", TotalAPagarDesc, ". "));

}

if (InteresAplicado){
    mensaje += suma(suma(" Interes de ", Intereses),("%. "));
} 

if((cuotas >= 2) && (cuotas<=12)){
    mensaje += suma(suma(" Total a pagar $", TotalApagarCuotasFinal),(". "));
    mensaje += suma(suma(" Cuotas: ", cuotas , "%, total a Pagar: "), (TotalApagarCuotas, ". "));
} else{

    mensaje += suma(suma(" Total a pagar $", TotalApagarCuotas), (". "));

}


alert(mensaje);
console.log(mensaje);




