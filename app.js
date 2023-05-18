const listaProductos = document.querySelector("#principalProductos"); //sección donde van los articulos en el home
const carritoHTML = document.querySelector("#articulosEnCarrito"); //sección donde van los artículos en el carrito
const buscar = document.querySelector("#buscarBtn"); // botón buscar
const vaciarCarrito = document.querySelector("#vaciarCart"); // boton vaciar carrito
const carrito = []; // crear array para almacenar productos en el carrito

//todos los productos en venta - array
const arrayProductos = {
  articulos: [
    {
      id: "dell-1",
      nombre: "Notebook Dell",
      descripcion: "intel core i5, 16gb ram ddr4, ssd 512gb m2, pantalla 15.5",
      precio: 250000.0,
      foto: "https://unsplash.it/150/100",
      cantidad: 1, //LUEGO PONER FOTO DE CADA PRODUCTO
    },
    {
      id: "lenovo-1",
      nombre: "Notebook Lenovo",
      descripcion: "intel core i7, 16gb ram ddr4, ssd 1tb m2, pantalla 15.5",
      precio: 600000.0,
      foto: "https://unsplash.it/150/100",
      cantidad: 1,
    },
    {
      id: "hp-1",
      nombre: "Notebook HP",
      descripcion: "AMD rizen 3, 8gb ram ddr4, ssd 512gb m2, pantalla 14",
      precio: 300000.0,
      foto: "https://unsplash.it/150/100",
      cantidad: 1,
    },
    {
      id: "hp-2",
      nombre: "Notebook HP",
      descripcion: "AMD rizen 5, 16gb ram ddr4, ssd 512gb m2, pantalla 14",
      precio: 350000.0,
      foto: "https://unsplash.it/150/100",
      cantidad: 1,
    },
    {
      id: "dell-2",
      nombre: "Notebook Dell Gamer",
      descripcion:
        "intel core i7, 32gb ram ddr4, video 12gb, ssd 1tb m2, pantalla 17",
      precio: 800000.0,
      foto: "https://unsplash.it/150/100", //LUEGO PONER FOTO DE CADA PRODUCTO
      cantidad: 1,
    },
    {
      id: "lenovo-2",
      nombre: "Notebook Lenovo",
      descripcion: "intel core i3, 16gb ram ddr4, ssd 256 m2, pantalla 14",
      precio: 300000.0,
      foto: "https://unsplash.it/150/100",
      cantidad: 1,
    },
    {
      id: "hp-3",
      nombre: "Notebook HP",
      descripcion: "AMD rizen 7, 32gb ram ddr4, ssd 512gb m2, pantalla 15",
      precio: 500000.0,
      foto: "https://unsplash.it/150/100",
      cantidad: 1,
    },
    {
      id: "asus-1",
      nombre: "Notebook Asus Rog",
      descripcion:
        "AMD rizen 7, 32gb ram ddr4, video 12gb, ssd 1tb m2, pantalla 17",
      precio: 900000.0,
      foto: "https://unsplash.it/150/100",
      cantidad: 1,
    },
    {
      id: "dell-3",
      nombre: "Notebook Dell",
      descripcion: "AMD rizen 5, 16gb ram ddr4, ssd 512gb m2, pantalla 15",
      precio: 400000.0,
      foto: "https://unsplash.it/150/100", //LUEGO PONER FOTO DE CADA PRODUCTO
      cantidad: 1,
    },
    {
      id: "lenovo-3",
      nombre: "Notebook Lenovo",
      descripcion: "AMD rizen 3, 16gb ram ddr4, ssd 512gb m2, pantalla 14",
      precio: 350000.0,
      foto: "https://unsplash.it/150/100",
      cantidad: 1,
    },
    {
      id: "hp-4",
      nombre: "Notebook HP",
      descripcion: "intel core i3, 16gb ram ddr4, ssd 256 m2, pantalla 14",
      precio: 350000.0,
      foto: "https://unsplash.it/150/100",
      cantidad: 1,
    },
    {
      id: "asus-2",
      nombre: "Notebook Asus",
      descripcion: "intel core i5, 32gb ram ddr4, ssd 512 m2, pantalla 15",
      precio: 450000.0,
      foto: "https://unsplash.it/150/100",
      cantidad: 1,
    },
  ],
};

//dibujar el div de los articulos para el home
arrayProductos.articulos.forEach((articulo) => {
  //para cada artículo dentro de articulos y dentro de arrayProductos
  const articuloHTML = document.createElement("li"); //elemento a crear
  // articuloHTML.classList.add("articulo"); //clase
  articuloHTML.innerHTML = `
            <img src="${articulo.foto}"/>
            <h3 class="nombreProducto">${articulo.nombre}</h3> 
            <p>${articulo.descripcion}</p>
            <p class="precioProducto">$${articulo.precio}</p>
            <button id="${articulo.id}" class="botonAgregarCarrito">Agregar al carrito</button>
  `;
  listaProductos.appendChild(articuloHTML); //agregar cada uno de los div creados en listaProductos que es la sección del home
});

//inicio codigo busqueda

buscar.addEventListener("click", function (e) {
  e.preventDefault();

  const buscar = document.querySelector("#busqueda");
  const productoBuscado = buscar.value.toLowerCase();

  const resultados = arrayProductos.articulos.filter(function (articulo) {
    return (
      articulo.nombre.includes(productoBuscado) ||
      articulo.descripcion.includes(productoBuscado)
    );
  });

  // if (resultados.length > 0) {
  //   console.log(resultados);
  // } else {
  //   console.log(`No se encontraron resultados de ${productoBuscado}`);
  // }

  // Mostrar los resultados en la página HTML
  const divResultados = document.querySelector("#resultados");
  if (resultados.length === 0) {
    divResultados.innerHTML =
      "No se encontraron productos para la palabra clave: " + valorBusqueda;
  } else {
    let resultadosHTML = "";
    resultados.forEach(function (articulo) {
      resultadosHTML += `
      <img src="${articulo.foto}"/>
      <h3 class="nombreProducto">${articulo.nombre}</h3> 
      <p>${articulo.descripcion}</p>
      <p class="precioProducto">$${articulo.precio}</p>
      <button class="botonAgregarCarrito">Agregar al carrito</button>
`;
    });
    divResultados.innerHTML = resultadosHTML;
  }
});

// Función de búsqueda
// function buscar() {
//   // Obtener el valor introducido por el usuario
//   const valorBusqueda = document.getElementById('busqueda').value.addEventListener('submit', function(event) {
//     event.preventDefault();

//   // Filtrar el array para obtener los elementos que contengan la palabra clave
//   const resultados = arrayProductos.articulos.filter(function(articulo) {
//     return articulo.descripcion.includes(valorBusqueda);
//   });
//   console.log(resultados)

//   // Mostrar los resultados en la página HTML
//   const divResultados = document.getElementById('resultados');
//   if (resultados.length === 0) {
//     divResultados.innerHTML = 'No se encontraron resultados para la palabra clave: ' + valorBusqueda;
//   } else {
//     let resultadosHTML = '';
//     resultados.forEach(function(articulo, indice) {
//       resultadosHTML += '<p>Se encontró la palabra clave en el índice ' + indice + ': ' + articulo + '</p>';
//     });
//     divResultados.innerHTML = resultadosHTML;
//   }
// })};

// const buscarBtn = document.querySelector("#buscarBtn");
// buscarBtn.addEventListener("click", function () {
//   const palabraClave = document.querySelector("input[type=search]");

//   // Filtrar préstamos que coinciden con la palabra clave
//   const resultados = arrayProductos.articulos.filter(function (
//     articulo
//   ) {
//     const articulosEncontrados = Object.values(articulo);
//     return articulosEncontrados.some(function (valor) {
//       return valor
//         .toString()
//         .includes(palabraClave);
//     });
//   });

//fin codigo

//agregar articulos al carrito
document.querySelectorAll(".botonAgregarCarrito").forEach((boton, index) => {
  // EVENTO PARA CADA BOTON "AGREGAR AL CARRITO"
  boton.addEventListener("click", () => {
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

// Función para renderizar los productos en el carrito en el HTML
function renderizarCarrito() {
  carritoHTML.innerHTML = ""; //limpiar el carrito inicial en el HTML
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
                  <p class="lead fw-normal mb-2">${articulo.nombre}</p>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>

                <h5 class="mb-0">${articulo.cantidad}</h5>

                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i class="fas fa-plus"></i>
                </button>
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

  //VER FUNCION SUMAR TOTAL DEL CARRITO////////////////////////////////////
  let totalCarritoSuma = carrito.reduce((acumulador, producto) => {
    return acumulador + producto.totalArticulo;
  }, 0);
  vaciarCarrito.style.display = "block";
  const totalCarrito = document.createElement("div");
  totalCarrito.classList.add("col-md-1");
  totalCarrito.classList.add("col-lg-1");
  totalCarrito.classList.add("col-xl-1");
  totalCarrito.classList.add("text-end");
  totalCarrito.innerHTML = `
  <h5 class="mb-0">TOTAL CARRITO = $${totalCarritoSuma}
  `;
  carritoHTML.appendChild(totalCarrito);
}
//evento botón vaciar el carrito
vaciarCarrito.addEventListener("click", function () {
  // Vaciar el array "carrito"
  // carrito = [];
  carrito.splice(0, carrito.length);
  console.log(carrito);
  // Actualizar el contenido del div "articulosEnCarrito"
  carritoHTML.innerHTML = "";
  vaciarCarrito.style.display = "none";
});

//VER BOTON SUBIR BAJAR CANTIDAD DE X ARTICULO EN EL CARRITO, DE ULTIMA SACARLO
//Y VER LOCAL Y SESSION STORAGE

//NO FUNCIONA:///////////////////////////////////////////////////////////////
// //evento para eliminar artículo del carrito con el cesto de basura
document.querySelectorAll(".eliminarArticulo").forEach((boton) => {
  boton.addEventListener("click", (e) => {
    const productoId = e.target.id; // Obtener el ID del producto a eliminar del atributo "id" del botón
    eliminarDelCarrito(productoId);
  });
});

function eliminarDelCarrito(productoId) {
  carrito = carrito.filter((item) => item.id !== productoId); // Filtrar el carrito y mantener solo los productos con ID diferente al producto a eliminar
  console.log(carrito);
  renderizarCarrito();
}

//     // Actualizar la interfaz de usuario para reflejar el cambio en el carrito
//     renderizarCarrito();
//   });
// });

//Eliminar un artículo del carrito
// const eliminarArticulo = document.querySelectorAll(".eliminarArticulo");

// eliminarArticulo.forEach((boton) => {
//   boton.addEventListener("click", function() {
//     // Obtener el ID del artículo
//     const idArticulo = this.dataset.id;

//     // Eliminar el artículo del carrito
//     carrito.splice(carrito.indexOf(idArticulo), 1);

//     // Actualizar el contenido del div "articulosEnCarrito"
//     carritoHTML.innerHTML = "";
//     renderizarCarrito();
//   });
// });

//FALTA: VER LA SECCIÓN DE ABAJO DEL HOME - BOTON ELIMINAR DEL CARRITO - FORMATOS VARIOS, ELIMINAR PÁGINAS - LOCAL/SESSION STORAGE - CAMBIAR LOS METODOS PARA QUE NO SEA COPIA DEL PROFE
//FALTA TAMBIEN: QUE AL HACER CLICK EN CESTO BASURA SE BORRE EL ITEM DEL CARRITO (ARRAY Y POR CONSIGUIENTE DIBUJO EN PAGINA)

//nota2: ya se muestran en el carrito, agregar boton limpiar carrito, hacer funcionar el elimnar un articulo del carrito, y sumar cantidad al hacer click agregar al carrito. Linkear los articulos novedades idem arriba. Local/session storage. que verifique si ya está el articulo en el array, ver consulta en chatgpt
