// const listaProductos = document.querySelector("#lista-productos");
// const productosSeleccionadosDiv = document.querySelector("#productos-seleccionados"
// );
// const productosSeleccionados = []; //array

// arrayProductos.productos.forEach((producto) => {
//   const productoDiv = document.createElement("div");
//   productoDiv.classList.add("producto");
//   productoDiv.innerHTML = `
//             <h3>${producto.nombre}</h3>
//             <p>Precio: $${producto.precio}</p>
//             <button class="seleccionar-producto">Seleccionar</button>
//   `;
//   listaProductos.appendChild(productoDiv);
// });

// document.querySelectorAll(".seleccionar-producto").forEach((boton, index) => {
//   boton.addEventListener("click", () => {
//     seleccionarProducto(arrayProductos.productos[index]);
//     function seleccionarProducto(producto) {
//       productosSeleccionados.push(producto);
//       actualizarProductosSeleccionados();
//     }

//     function actualizarProductosSeleccionados() {
//       productosSeleccionadosDiv.innerHTML = "";
//       productosSeleccionados.forEach((producto) => {
//         const productoDiv = document.createElement("div");
//         productoDiv.classList.add("producto");
//         productoDiv.innerHTML = `
//                 <h3>${producto.nombre}</h3>
//                 <p>Precio: $${producto.precio}</p>
//             `;
//         productosSeleccionadosDiv.appendChild(productoDiv);
//       });
//     }
//   });
// });

--------------------------------------------------------------------
// //cart
// // const cartIcon = document.querySelector('#cart-icon');
// // let cartOpen = false;

// // cartIcon.addEventListener('click', function() {
// //   const cartItemsEl = document.querySelector('#cart-items');

// //   if (!cartOpen) {
// //     // Clear any existing items in the cart
// //     cartItemsEl.innerHTML = '';

// //     // Add each item to the cart
// //     cartItems.forEach(function(item) {
// //       const itemEl = document.createElement('div');
// //       itemEl.innerText = item.name;
// //       cartItemsEl.appendChild(itemEl);
// //     });

// //     // Show the cart
// //     cartItemsEl.style.display = 'block';
// //     cartOpen = true;
// //   } else {
// //     // Hide the cart
// //     cartItemsEl.style.display = 'none';
// //     cartOpen = false;
// //   }
// // });

// // Crear un arreglo con los datos de los artículos
// var articulos = [
//   {
//     nombre: "Camiseta",
//     foto: "camiseta.jpg",
//     caracteristicas: "Algodón, talla M, color azul",
//     precio: "$15",
//   },
//   {
//     nombre: "Pantalón",
//     foto: "pantalon.jpg",
//     caracteristicas: "Jean, talla L, color negro",
//     precio: "$25",
//   },
//   {
//     nombre: "Zapatos",
//     foto: "zapatos.jpg",
//     caracteristicas: "Cuero, talla 40, color marrón",
//     precio: "$35",
//   },
//   {
//     nombre: "Gorra",
//     foto: "gorra.jpg",
//     caracteristicas: "Lana, talla única, color rojo",
//     precio: "$10",
//   },
// ];

// // Obtener los elementos del DOM
// var carousel = document.getElementById("carousel");
// var prev = document.getElementById("prev");
// var next = document.getElementById("next");

// // Crear una función para crear una tarjeta con los datos de un artículo
// function crearTarjeta(articulo) {
//   // Crear un elemento div con la clase card
//   var card = document.createElement("div");
//   card.className = "card";

//   // Crear un elemento img con la foto del artículo
//   var img = document.createElement("img");
//   img.src = articulo.foto;

//   // Crear un elemento h3 con el nombre del artículo
//   var h3 = document.createElement("h3");
//   h3.textContent = articulo.nombre;

//   // Crear un elemento p con las características del artículo
//   var p = document.createElement("p");
//   p.textContent = articulo.caracteristicas;

//   // Crear un elemento span con el precio del artículo
//   var span = document.createElement("span");
//   span.textContent = articulo.precio;

//   // Crear un elemento button con el texto Agregar al carrito
//   var button = document.createElement("button");
//   button.textContent = "Agregar al carrito";

//   // Agregar los elementos creados al div card
//   card.appendChild(img);
//   card.appendChild(h3);
//   card.appendChild(p);
//   card.appendChild(span);
//   card.appendChild(button);

//   // Devolver el div card
//   return card;
// }