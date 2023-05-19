const listaProductos = document.querySelector("#principalProductos"); //sección donde van los articulos en el home
const carritoHTML = document.querySelector("#articulosEnCarrito"); //sección donde van los artículos en el carrito
const buscar = document.querySelector("#buscarBtn"); // botón buscar
const formBusqueda = document.querySelector("#busqueda");
const vaciarCarrito = document.querySelector("#vaciarCart"); // boton vaciar carrito
const vaciarComprarDiv = document.querySelector(".vaciarComprarDiv");
const comprarCarrito = document.querySelector("#comprarCarrito");
let totalCarritoSuma = 0; // Inicializo variable para almacenar el total del carrito
let carrito = []; // crear array para almacenar productos en el carrito

//todos los productos en venta - array
const arrayProductos = {
  articulos: [
    {
      id: "dell-1",
      nombre: "Notebook Dell oficina",
      descripcion: "intel core i5, 16gb ram ddr4, ssd 512gb m2, pantalla 15.5",
      precio: 250000.0,
      foto: "https://th.bing.com/th/id/R.d25b1a49a9fafbf23a6373e0c47e45ff?rik=VbUNfUCprHYtyQ&riu=http%3a%2f%2fi.mlcdn.com.br%2f1500x1500%2fnotebook-dell-inspiron-3000-i15-3542-a30c-intel-core-i5-4gb-1tb-windows-8.1-led-15-6-hdmi-135223000.jpg&ehk=oKyjUP30L6M9X%2bUwsnsmIsQhRMgmHNK42Q%2fP0c0of58%3d&risl=&pid=ImgRaw&r=0",
      cantidad: 1,
    },
    {
      id: "lenovo-1",
      nombre: "Notebook Lenovo gamer",
      descripcion:
        "intel core i7, 16gb ram ddr4, video 12gb, ssd 1tb m2, pantalla 15.5",
      precio: 600000.0,
      foto: "https://th.bing.com/th/id/R.9d4cf11d97900f273009cd9d348b4144?rik=BtA19RX%2bzd8DDA&pid=ImgRaw&r=0",
      cantidad: 1,
    },
    {
      id: "hp-1",
      nombre: "Notebook HP basica",
      descripcion: "AMD rizen 3, 8gb ram ddr4, ssd 256gb m2, pantalla 14",
      precio: 300000.0,
      foto: "https://store.hp.com/CanadaStore/Html/Merch/Images/c05971638_1750x1285.jpg",
      cantidad: 1,
    },
    {
      id: "hp-2",
      nombre: "Notebook HP oficina",
      descripcion: "AMD rizen 5, 16gb ram ddr4, ssd 512gb m2, pantalla 14",
      precio: 350000.0,
      foto: "https://store.hp.com/CanadaStore/Html/Merch/Images/c05971638_1750x1285.jpg",
      cantidad: 1,
    },
    {
      id: "dell-2",
      nombre: "Notebook Dell gamer",
      descripcion:
        "intel core i7, 32gb ram ddr4, video 12gb, ssd 1tb m2, pantalla 17",
      precio: 800000.0,
      foto: "https://th.bing.com/th/id/R.acbdd69b5caed96b52a37352861fb99b?rik=7Q2TK%2bzXFYGoHw&pid=ImgRaw&r=0",
      cantidad: 1,
    },
    {
      id: "lenovo-2",
      nombre: "Notebook Lenovo básica",
      descripcion: "intel core i3, 16gb ram ddr4, ssd 256 m2, pantalla 14",
      precio: 300000.0,
      foto: "https://th.bing.com/th/id/R.fa2670eadf67a928429c276d5be1d4b7?rik=2IHEEO9s66VzBQ&pid=ImgRaw&r=0",
      cantidad: 1,
    },
    {
      id: "hp-3",
      nombre: "Notebook HP gamer",
      descripcion:
        "AMD rizen 7, 32gb ram ddr4, video 8gb, ssd 512gb m2, pantalla 15",
      precio: 500000.0,
      foto: "https://th.bing.com/th/id/OIP.684NQNblvIajTSKMQtxlWgHaFK?pid=ImgDet&rs=1",
      cantidad: 1,
    },
    {
      id: "asus-1",
      nombre: "Notebook Asus gamer",
      descripcion:
        "AMD rizen 7, 32gb ram ddr4, video 12gb, ssd 1tb m2, pantalla 17",
      precio: 900000.0,
      foto: "https://th.bing.com/th/id/OIP.-SrTYrvYX2FztybvXAbgWwHaFj?pid=ImgDet&rs=1",
      cantidad: 1,
    },
    {
      id: "lenovo-3",
      nombre: "Notebook Lenovo oficina",
      descripcion: "AMD rizen 5, 16gb ram ddr4, ssd 512gb m2, pantalla 14",
      precio: 350000.0,
      foto: "https://th.bing.com/th/id/R.fa2670eadf67a928429c276d5be1d4b7?rik=2IHEEO9s66VzBQ&pid=ImgRaw&r=0",
      cantidad: 1,
    },
    {
      id: "asus-2",
      nombre: "Notebook Asus oficina",
      descripcion: "intel core i5, 32gb ram ddr4, ssd 512 m2, pantalla 15",
      precio: 450000.0,
      foto: "https://th.bing.com/th/id/R.bf214b856a9c0a6bdd6a8607f13bd7b9?rik=whhJp1uhysp5tg&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2000x2000%2fasus_1225b_su17_bk_eee_1225b_su17_bk_11_6_netbook_844671.jpg&ehk=RJ0fD8clIQoN2HDMfUZdy%2fRh90jiNeu46lwLNBVJdxU%3d&risl=&pid=ImgRaw&r=0",
      cantidad: 1,
    },
  ],
};

//dibujar el div de los articulos para el home
arrayProductos.articulos.forEach((articulo) => {
  //para cada artículo dentro de articulos y dentro de arrayProductos
  const articuloHTML = document.createElement("li"); //elemento a crear
  articuloHTML.innerHTML = `
            <img src="${articulo.foto}"/>
            <h3 class="nombreProducto">${articulo.nombre}</h3> 
            <p>${articulo.descripcion}</p>
            <p class="precioProducto">$${articulo.precio}</p>
            <button id="${articulo.id}" class="botonAgregarCarrito">Agregar al carrito</button>
  `;
  listaProductos.appendChild(articuloHTML); //agregar cada uno de los div creados en listaProductos que es la sección del home
});

//agregar articulos al carrito
document.querySelectorAll(".botonAgregarCarrito").forEach((boton, index) => {
  // EVENTO PARA CADA BOTON "AGREGAR AL CARRITO"
  boton.addEventListener("click", () => {
    swal("Listo!", "Producto agregado al carrito", "success");
    agregarAlCarrito(arrayProductos.articulos[index]); // función declarada debajo. index=indice del boton seleccionado según el array de todos los productos
  });

  function agregarAlCarrito(articulo) {
    // se llama al hacer click en agregar al carrito
    if (carrito.some((item) => item.id === articulo.id)) {
      // Verificar si el artículo ya existe en el carrito
      carrito.forEach((item) => {
        if (item.id === articulo.id) {
          item.cantidad++; // Incrementar la cantidad si el artículo ya existe
        }
      });
    } else {
      carrito.push(articulo); // Agregar al array del carrito el producto correspondiente al que se acaba de hacer click
    }

    console.log(carrito); //testing purposes
    renderizarCarrito();
  }
});

// Función para guardar el carrito en el localStorage
function guardarCarritoEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log("Carrito guardado en localStorage:", carrito);
}

const carritoGuardado = localStorage.getItem("carrito");
// Función para cargar el carrito desde el localStorage
function cargarCarritoDesdeLocalStorage() {
  if (carritoGuardado !== null) {
    carrito = JSON.parse(carritoGuardado);
    console.log("Carrito cargado desde localStorage:", carrito);
  }
}

// Función para renderizar los productos en el carrito en el HTML
function renderizarCarrito() {
  carritoHTML.innerHTML = ""; //limpiar el carrito inicial en el HTML

  // Calcular el total del carrito
  totalCarritoSuma = carrito.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.cantidad;
  }, 0);

  carrito.forEach((articulo) => {
    //recorrer el array y crear div x cada uno
    let totalArticulo = articulo.precio * articulo.cantidad; //calculo precio x cantidad por cada artículo en el carrito
    const renderCarrito = document.createElement("div");
    renderCarrito.classList.add("card"); //clases
    renderCarrito.classList.add("rounded-3");
    renderCarrito.classList.add("mb-4");
    renderCarrito.innerHTML = `
           <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center ">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img src="${articulo.foto}" class="img-fluid rounded-3" alt="Cotton T-shirt">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p id="nombreArticulo" class="lead fw-normal mb-2">${articulo.nombre}</p>
                  <p class="lead fw-normal mb-2">${articulo.descripcion}</p>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <h5 class="mb-0">Cantidad: ${articulo.cantidad}</h5>
                </div>  
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 class="mb-0">$${totalArticulo}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a class="eliminarArticulo" id="${articulo.id}" href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i><a>
                </div>
              </div>
            </div>
            `;
    carritoHTML.appendChild(renderCarrito);
  });

  vaciarCarrito.style.display = "block";
  // Actualizar el total del carrito en el HTML
  const totalCarrito = document.createElement("div");
  totalCarrito.classList.add("card");
  totalCarrito.classList.add("rounded-3");
  totalCarrito.classList.add("mb-4");
  totalCarrito.classList.add("card-body");
  totalCarrito.innerHTML = `
  <h5 id="totalCarrito" class="mb-0">TOTAL CARRITO $${totalCarritoSuma}
  `;
  carritoHTML.appendChild(totalCarrito);
  guardarCarritoEnLocalStorage();
} //Fin renderizar carrito

// EVENTO PARA BOTON COMPRAR CARRITO"
comprarCarrito.addEventListener("click", () => {
  swal("Compra procesada", "Muchas gracias por elegirnos", "success");
  carrito.length = 0;
  console.log(carrito);
  localStorage.removeItem("carrito");
  carritoHTML.innerHTML = "";
});

//CODIGO DE BUSQUEDA
buscar.addEventListener("click", function (e) {
  e.preventDefault();

  const palabraClave = formBusqueda.value.toString();
  console.log(palabraClave);

  // Filtrar articulos que coinciden con la palabra clave
  const articulosCoincidentes = arrayProductos.articulos.filter(function (
    articulo
  ) {
    const articulos = Object.values(articulo);
    return articulos.some(function (valor) {
      return valor.toString().includes(palabraClave);
    });
  });
  console.log(articulosCoincidentes);

  // Mostrar los resultados en la página HTML
  const divResultados = document.querySelector("#resultados");
  if (articulosCoincidentes.length === 0) {
    divResultados.innerHTML = "No se encontraron productos";
  } else {
    let resultadosHTML = "";
    articulosCoincidentes.forEach(function (articulo) {
      resultadosHTML += `
      <div class="containerResultado">
        <img src="${articulo.foto}"/>
        <br>
        <h3 class="nombreProducto">${articulo.nombre}</h3> 
        <br>
        <p>${articulo.descripcion}</p>
        <br>
        <p class="precioProducto">$${articulo.precio}</p>
        <button id="${articulo.id}" class="botonAgregarCarrito">Agregar al carrito</button>
        <br>
        <br>
      </div>
      `;
    });

    divResultados.innerHTML = resultadosHTML;

    // Mostrar resultados en la consola
    console.table(articulosCoincidentes);
  }
});

//evento botón vaciar el carrito
vaciarCarrito.addEventListener("click", function () {
  // Vaciar el array "carrito"
  carrito.splice(0, carrito.length);
  localStorage.removeItem("carrito");
  // Actualizar el contenido del div "articulosEnCarrito"
  carritoHTML.innerHTML = "";
});

// Cargar el carrito desde el localStorage al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  cargarCarritoDesdeLocalStorage();
  renderizarCarrito();
});
