let productos = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 950,
      imagen: "../imagenes/seguridad1.webp",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 750,
      imagen: "../imagenes/seguridad1.webp",
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 900,
      imagen: "../imagenes/seguridad1.webp",
    },
    {
      id: 4,
      nombre: "Producto 4",
      precio: 450,
      imagen: "../imagenes/seguridad1.webp",
    }, 

  ];


const contenedor = document.getElementById("container");
contenedor.innerHTML = "";
  
  productos.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col" );
    let html = `
      <img src="${producto.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#cart" class="btn btn-danger" onClick="agregarAlCarrito(${indice})">Comprar</a>
      </div>
        `;
    card.innerHTML = html;
    contenedor.appendChild(card);
  });


  const abrirCarrito = document.getElementById("abrirCarrito");
  const cerrarCarrito = document.getElementById("cerrarCarrito");
  const carritoContainer = document.getElementsByClassName("cart-container")[0];

  abrirCarrito.addEventListener("click", () => {
    carritoContainer.classList.add("AbrirCarrito");
  });
  
  cerrarCarrito.addEventListener("click", () => {
    carritoContainer.classList.remove("abrirCarrito");
  });
  
  let Carrito = document.getElementById("CarritoProductos");
  const CuadroCarrito = () => {
    let total = 0;
    let cantidadCarrito = 0;
    Carrito.className = "cart";
    Carrito.innerHTML = "";
    if (cart.length > 0) {
        cart.forEach((producto, indice) => {
          total = total + producto.precio * producto.cantidad;
          cantidadCarrito = cantidadCarrito + producto.cantidad;
          const carritoContainer = document.createElement("div");
          carritoContainer.className = "producto-carrito";
          carritoContainer.innerHTML = `
            <img class="carritoImagen" src="${producto.imagen}"/>
            <div class="product-details">
              ${producto.nombre}
            </div>
            <div class="Detalles" > Cantidad: ${producto.cantidad}</div>
            <div class="Detalles"> Precio: $ ${producto.precio}</div>
            <div class="Detalles"> Subtotal: $ ${producto.precio * producto.cantidad}</div>
            <button class="btn btn-danger"  id="EliminarProductos" onClick="removeProduct(${indice})">Eliminar producto</button>
             `;
            Carrito.appendChild(carritoContainer);
        });
        // Dibujo el total y lo appendeo en el div capturado y guardado en la variable modalCarrito
        const totalContainer = document.createElement("div");
        totalContainer.className = "total-carrito";
        totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>
        <button class= "btn btn-danger finalizar" id="finalizar" onClick="finalizarCompra()"> FINALIZAR COMPRA </button>`;
        Carrito.appendChild(totalContainer);
    
        const contadorCarrito = document.getElementById("contadorC");
        contadorCarrito.innerHTML = cantidadCarrito;
        contadorCarrito.style.display = "inline-block";
      } else {
        Carrito.classList.remove("cart");
    
        const contadorCarrito = document.getElementById("contadorC");
      }
    };

    
    let cart = [];

  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    CuadroCarrito();
  }

  const agregarAlCarrito = (indiceDelArrayProducto) => {

    const indiceEncontradoCarrito = cart.findIndex((elemento) => {
      return elemento.id === productos[indiceDelArrayProducto].id;
    });

    if (indiceEncontradoCarrito === -1) {
        //agrego el producto
        const productoAgregar = productos[indiceDelArrayProducto];
        productoAgregar.cantidad = 1;
        cart.push(productoAgregar);
        actualizarStorage(cart);
        CuadroCarrito();
      } else {
        //incremento cantidad
        cart[indiceEncontradoCarrito].cantidad += 1;
        actualizarStorage(cart);
        CuadroCarrito();
      }
    };

    const removeProduct = (indice) => {
        cart.splice(indice, 1);
        actualizarStorage(cart);
        CuadroCarrito();
        if (cart.length === 0) {
          carritoContainer.classList.remove("abrirCarrito");
        }
      };
      const finalizarCompra = () => {
        const botonSeguirComprando = document.getElementById("cerrarCarrito");
        botonSeguirComprando.classList.add("removeButton");
      
        const total = document.getElementsByClassName("total")[0].innerHTML;
        CuadroCarrito.innerHTML = "";
        const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo"> YA CASI ES TUYA LA COMPRA, EL   ${total} </p></div>
        <div class="datos-cliente">
        <p class="datos-parrafo"> Complete el formulario con sus datos para coordinar la entrega</p>
        <button class= "btn btn-danger formulario" id="formulario" onClick="dibujarFormu()"> FORMULARIO </button>
        </div>`;
        CuadroCarrito.innerHTML = compraFinalizada;
      };
      const dibujarFormu = () => {
        CuadroCarrito.innerHTML = "";
        const formulario = `
        <h2> DATOS PARA EL ENVÍO </h2>
        <div class="contact__secction-container">
         <div class="row">
           <div class="contact__secction__item">
             <label>Nombre</label>
             <input type="text" id="nombre" placeholder="Nombre"  />
           </div>
           <div class="contact__secction__item">
             <label>E-mail</label>
             <input type="text" id="mail" placeholder="E-mail" />
           </div>
           <div class="contact__secction__item">
             <label>Telefono</label>
             <input type="text" id="telefono" placeholder="Telefono"  />
           </div>
           <div class="contact__secction__item">
             <label>Domicilio</label>
             <input type="text" id="domicilio" placeholder="Domicilio" />
           </div>
           <div class="contact-button">
             <button type="button" class="btn btn-danger envio" onClick="mostrarMensaje()" >Confirmar</button>
           </div>
         </div>
       </div>`;
       CuadroCarrito.innerHTML = formulario;
      };



      const mostrarMensaje = () => {
        const nombreCliente = document.getElementById("nombre").value;
        const domicilioCliente = document.getElementById("domicilio").value;
        CuadroCarrito.innerHTML = "";
        let mensaje = `<div class="mensaje-final"><p>Gracias ${nombreCliente} por su compra! en 72 horas recibira su paquete en ${domicilioCliente}</p>
        <button type="button" class="btn btn-danger envio" onClick="volverATienda()" >Volver a la tienda</button>
       
        </div>`;
        CuadroCarrito.innerHTML = mensaje;
      };
      
      const volverATienda = () => {
        carritoContainer.classList.remove("abrirCarrito");
        const contadorCarrito = document.getElementById("count__cart");
        contadorCarrito.style.display = "none";
        cart = [];
        actualizarStorage(cart);
        dibujarCarrito();
      };
      
      const actualizarStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
      };