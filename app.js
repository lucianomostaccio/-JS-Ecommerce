const listaProductos = document.querySelector("#principalProductos"); //sección donde van los articulos en el home
const carritoHTML = document.querySelector("#articulosEnCarrito"); //sección donde van los artículos en el carrito
const buscar = document.querySelector("#buscarBtn");
const formBusqueda = document.querySelector("#busqueda"); //campo de entrada para búsqueda
const botonLimpiarBusqueda = document.querySelector("#limpiarBusquedaBtn");
const vaciarCarrito = document.querySelector("#vaciarCart"); // boton vaciar carrito
const comprarCarrito = document.querySelector("#comprarCarrito"); //boton comprar el carrito
const numeroCantidadCarrito = document.querySelector("#cantidadCarrito");
let totalCarritoSuma = 0; // Inicializo variable para almacenar el total del carrito
let carrito = [];
let resultadosBusqueda = []; // array para almacenar resultados de búsqueda

let arrayProductos; // Variable global para almacenar los productos

fetch("/productos.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("Solo se han leido los productos desde el JSON:", data);
    arrayProductos = data; // Asignar los productos a la variable global
    console.log(
      "Se han leido y asignado los productos del JSON:",
      arrayProductos
    );
    //dibujar el div de los articulos para el home
    arrayProductos.articulos.forEach((articulo) => {
      //para cada artículo dentro de articulos y dentro de arrayProductos
      const articuloHTML = document.createElement("li"); //elemento a crear
      articuloHTML.innerHTML = `
                <img src="${articulo.foto}"/>
                <h3 class="nombreProducto">${articulo.nombre}</h3> 
                <p>${articulo.descripcion}</p>
                <p class="precioProducto">$${articulo.precio.toLocaleString(
                  "es-AR"
                )}</p>
                <button id="${
                  articulo.id
                }" class="botonAgregarCarrito">Agregar al carrito</button>
      `;
      listaProductos.appendChild(articuloHTML); //agregar cada uno de los div creados en listaProductos que es la sección del home
    });

    //agregar articulos al carrito
    //agregar articulos al carrito
    document
      .querySelectorAll(".botonAgregarCarrito")
      .forEach((boton, index) => {
        // EVENTO PARA CADA BOTON "AGREGAR AL CARRITO"
        boton.addEventListener("click", () => {
          Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            destination: "#articulosEnCarrito",
            newWindow: false,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #00b09b, #172940)",
            },
          }).showToast();
          agregarAlCarrito(arrayProductos.articulos[index]); // función declarada debajo
        });
      });

    function agregarAlCarrito(articulo) {
      // se llama al hacer click en agregar al carrito
      const existeArticulo = carrito.some((item) => item.id === articulo.id);
      existeArticulo
        ? carrito.forEach((item) => {
            if (item.id === articulo.id) {
              item.cantidad++; // Incrementar la cantidad si el artículo ya existe
            }
          })
        : carrito.push(articulo); // Agregar al array del carrito el producto correspondiente al que se acaba de hacer click

      console.log(
        "Producto agregado. Carrito ahora tiene los siguiente productos:",
        carrito
      );
      renderizarCarrito();
    }

    //CODIGO DE BUSQUEDA
    buscar.addEventListener("click", (e) => {
      e.preventDefault();

      const palabraClave = formBusqueda.value.trim().toLowerCase();
      console.log(palabraClave);

      const articulosCoincidentes = arrayProductos.articulos.filter(
        (articulo) => {
          const valores = Object.values(articulo).map((valor) =>
            valor.toString().toLowerCase()
          );
          return valores.some((valor) => valor.includes(palabraClave));
        }
      );

      resultadosBusqueda = articulosCoincidentes;
      console.log("array resultados de búsqueda=", resultadosBusqueda);

      // Mostrar los resultados en la página HTML
      const divResultados = document.querySelector("#resultados");
      if (resultadosBusqueda.length === 0) {
        divResultados.textContent = "No se encontraron productos";
      } else {
        const resultadosHTML = resultadosBusqueda
          .map(
            (articulo) => `
          <div class="containerResultado">
            <img src="${articulo.foto}"/>
            <br>
            <h3 class="nombreProducto">${articulo.nombre}</h3> 
            <br>
            <p>${articulo.descripcion}</p>
            <br>
            <p class="precioProductoBusqueda">$${articulo.precio.toLocaleString(
              "es-AR"
            )}</p>
            <button id="${
              articulo.id
            }" class="botonAgregarCarrito busqueda">Agregar al carrito</button>
            <br>
            <br>
          </div>
        `
          )
          .join("");

        divResultados.innerHTML = resultadosHTML;
        botonLimpiarBusqueda.style.display = "block";
      }
      //evento botón limpiar resultados de búsqueda
      botonLimpiarBusqueda.addEventListener("click", () => {
        divResultados.innerHTML = ""; //limpia el html
        resultadosBusqueda.length = 0; //limpia array resultados de búsqueda
        console.log("array resultados de búsqueda:", resultadosBusqueda);
        botonLimpiarBusqueda.style.display = "none"; //vuelve a ocultar el botón
      });

      //agregar articulos de búsqueda al carrito
      document.querySelectorAll(".busqueda").forEach((boton, index) => {
        // EVENTO PARA CADA BOTON "AGREGAR AL CARRITO"
        boton.addEventListener("click", () => {
          Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            destination: "#articulosEnCarrito",
            newWindow: false,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #00b09b, #172940)",
            },
          }).showToast();
          agregarAlCarrito(resultadosBusqueda[index]); // función declarada debajo.
        });

        function agregarAlCarrito(articulo) {
          // se llama al hacer click en agregar al carrito
          const existeArticulo = carrito.some(
            (item) => item.id === articulo.id
          );
          existeArticulo
            ? carrito.forEach((item) => {
                if (item.id === articulo.id) {
                  item.cantidad++; // Incrementar la cantidad si el artículo ya existe
                }
              })
            : carrito.push(articulo); // Agregar al array del carrito el producto correspondiente al que se acaba de hacer click

          console.log(
            "Producto de resultado de búsqueda agregado. Carrito ahora tiene los siguiente productos:",
            carrito
          );
          renderizarCarrito();
        }
      });
      formBusqueda.value = "";
    });
    //FIN CÓDIGO BÚSQUEDA

    //evento botón vaciar el carrito
    vaciarCarrito.addEventListener("click", function () {
      if (carrito.length === 0) {
        swal("Su carrito aún no tiene nada", "Añade productos", "error");
      } else {
        // Vaciar el array "carrito"
        carrito.splice(0, carrito.length);
        localStorage.removeItem("carrito");
        swal("Carrito vaciado", "Vuelve a añadir productos", "warning");
        numeroCantidadCarrito.textContent = `${carrito.length}`;
        console.log("Carrito vaciado. Verifique esté vacío:", carrito);

        renderizarCarrito();
      }
    });

    // Eliminar productos individualmente del carrito
    carritoHTML.addEventListener("click", eliminarProducto);

    function eliminarProducto(e) {
      if (e.target.classList.contains("btn-danger")) {
        let articuloID = e.target.getAttribute("id");
        let articulo = carrito.find((articulo) => articulo.id === articuloID);
        articulo.cantidad = 1; //restablezco cantidad por si se vuelve agregar un articulo que fue eliminado
        carrito = carrito.filter((articulo) => articulo.id !== articuloID);
        console.log(
          "Producto eliminado. Carrito ahora tiene los siguiente productos:",
          carrito
        );
        renderizarCarrito();
      }
    }
  })
  .catch((error) => console.log("error al cargar el json de productos", error));

// Función global para renderizar los productos en el carrito en el HTML
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
                      <img src="${
                        articulo.foto
                      }" class="img-fluid rounded-3" alt="Cotton T-shirt">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p id="nombreArticulo" class="lead fw-normal mb-2">${
                        articulo.nombre
                      }</p>
                      <p class="lead fw-normal mb-2">${articulo.descripcion}</p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <h5 class="mb-0">Cantidad: ${articulo.cantidad}</h5>
                    </div>  
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0">$${totalArticulo.toLocaleString(
                        "es-AR"
                      )}</h5>
                    </div>
                    <div class="col-md-1 col-lg-2 col-xl-2 text-end">
                      <button class="btn btn-danger quitar" id="${
                        articulo.id
                      }">Eliminar</button>
                    </div>
                  </div>
                </div>
                `;
    carritoHTML.appendChild(renderCarrito);
  });

  // Actualizar el total del carrito en el HTML
  const totalCarrito = document.createElement("div");
  totalCarrito.classList.add("card");
  totalCarrito.classList.add("rounded-3");
  totalCarrito.classList.add("mb-4");
  totalCarrito.classList.add("card-body");
  totalCarrito.innerHTML = `
      <h5 id="totalCarrito" class="mb-0">TOTAL CARRITO $${totalCarritoSuma.toLocaleString(
        "es-AR"
      )}
      `;
  carritoHTML.appendChild(totalCarrito);
  numeroCantidadCarrito.textContent = `${carrito.length}`;
  guardarCarritoEnLocalStorage();
} //Fin renderizar carrito

// EVENTO PARA BOTON COMPRAR CARRITO"
comprarCarrito.addEventListener("click", () => {
  if (carrito.length === 0) {
    swal(
      "El carrito no tiene nada",
      "Añade productos al carrito para poder comprar",
      "error"
    );
  } else {
    swal("Compra procesada", "Muchas gracias por elegirnos", "success");
    carrito.length = 0;
    console.log("Carrito comprado. Carrito debería estar vacío:", carrito);
    localStorage.removeItem("carrito");
    carritoHTML.innerHTML = "";
    numeroCantidadCarrito.textContent = `${carrito.length}`;
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
  console.log("Contenido de carrito previamente guardado:", carritoGuardado);
  if (carritoGuardado !== null) {
    carrito = JSON.parse(carritoGuardado);
    console.log("Carrito cargado desde localStorage:", carrito);
  }
}

// Cargar el carrito desde el localStorage al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  console.log("Contenido del DOM cargado");
  cargarCarritoDesdeLocalStorage();
  renderizarCarrito();
});
