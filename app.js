const carrito = []; // crear array para almacenar productos en el carrito

// // Evento de "click" al botón
// agregarAlCarrito.addEventListener("click", function () {
// carrito.push(producto)})

//todos los productos en venta - array
const arrayProductos = {
  articulos: [
    {
      nombre: "Laptop 1",
      descripcion: "notebook dell",
      precio: 1200.0,
      foto: "https://unsplash.it/180/400", //LUEGO PONER FOTO DE CADA PRODUCTO
    },
    {
      nombre: "Laptop 2",
      descripcion: "notebook lenovo",
      precio: 800.0,
      foto: "https://unsplash.it/180/400",
    },
    {
      nombre: "Laptop 3",
      descripcion: "notebook hp",
      precio: 400.0,
      foto: "https://unsplash.it/180/400",
    },
    {
      nombre: "Laptop 4",
      descripcion: "notebook asus rog",
      precio: 150.0,
      foto: "https://unsplash.it/180/400",
    },
  ],
};

const listaProductos = document.querySelector("#ofertasProductos"); //sección donde van los articulos en el home
const productosSeleccionadosDiv = document.querySelector("#productoEnCarrito"); //sección donde van los artículos en el carrito

//dibujar el div de los articulos para el home
arrayProductos.articulos.forEach((articulo) => {
  //para cada artículo dentro de articulos y dentro de arrayProductos
  const productoDiv = document.createElement("li"); //elemento a crear
  productoDiv.classList.add("articulo"); //clase
  productoDiv.innerHTML = `
            <img src="${articulo.foto}"/>
            <h3 class="nombreProducto">${articulo.nombre}</h3> 
            <p>${articulo.descripcion}</p>
            <p class="precioProducto">${articulo.precio}</p>
            <button class="botonAgregarCarrito">Agregar al carrito</button>
  `;
  listaProductos.appendChild(productoDiv); //agregar cada uno de los div creados en listaProductos que es la sección del home
});

//agregar articulos al carrito
document.querySelectorAll(".botonAgregarCarrito").forEach((boton, index) => {
  //EVENTO PARA CADA BOTON "AGREGAR AL CARRITO"
  boton.addEventListener("click", () => {
    agregarAlCarrito(arrayProductos.articulos[index]); //función declarada debajo. index=indice del boton seleccionado según el array de todos los productos
    function agregarAlCarrito(articulo) {
      //se llama al hacer click en agregar al carrito
      carrito.push(articulo); //agregar al array del carrito el producto correspondiente al que se acaba de hacer click
      console.log(carrito);
      actualizarProductosSeleccionados(); //función declarada debajo
    }

    //dibujar los articulos agregados a la página del carrito
    function actualizarProductosSeleccionados() {
      //se llama luego de agregar un producto al carrito
      productosSeleccionadosDiv.innerHTML = ""; //limpiar el carrito inicial
      carrito.forEach((producto) => {
        //recorrer el array y crear div x cada uno
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto"); //clase
        productoDiv.innerHTML = `
                <p>${producto.nombre}</p>
                <h5>Precio: $${producto.precio}</h5>
            `;
        productosSeleccionadosDiv.appendChild(productoDiv);
      });
    }
  });
});
//NOTA: YA PUDE HACER QUE SE DIBUJEN LOS ARTICULOS EN OFERTAS DEL HOME DINAMICAMENTE, Y QUE AL HACER CLICK EN AGREGAR AL CARRITO SE AGREGUEN AL ARRAY DEL CARRITO.
//FALTA: SETEAR PARA QUE SE DIBUJEN EN EL CARRITO - VER LA SECCIÓN DE ABAJO DEL HOME - BOTON ELIMINAR DEL CARRITO - FORMATOS VARIOS, ELIMINAR PÁGINAS - LOCAL STORAGE - CAMBIAR LOS NOMBRES A LAS CLASES O CAMBIAR LOS METODOS PARA QUE NO SEA COPIA DEL PROFE
