console.log("Hello world");

//cart
// const cartIcon = document.querySelector('#cart-icon');
// let cartOpen = false;

// cartIcon.addEventListener('click', function() {
//   const cartItemsEl = document.querySelector('#cart-items');

//   if (!cartOpen) {
//     // Clear any existing items in the cart
//     cartItemsEl.innerHTML = '';

//     // Add each item to the cart
//     cartItems.forEach(function(item) {
//       const itemEl = document.createElement('div');
//       itemEl.innerText = item.name;
//       cartItemsEl.appendChild(itemEl);
//     });

//     // Show the cart
//     cartItemsEl.style.display = 'block';
//     cartOpen = true;
//   } else {
//     // Hide the cart
//     cartItemsEl.style.display = 'none';
//     cartOpen = false;
//   }
// });

// Crear un arreglo con los datos de los artículos
var articulos = [
  {
    nombre: "Camiseta",
    foto: "camiseta.jpg",
    caracteristicas: "Algodón, talla M, color azul",
    precio: "$15",
  },
  {
    nombre: "Pantalón",
    foto: "pantalon.jpg",
    caracteristicas: "Jean, talla L, color negro",
    precio: "$25",
  },
  {
    nombre: "Zapatos",
    foto: "zapatos.jpg",
    caracteristicas: "Cuero, talla 40, color marrón",
    precio: "$35",
  },
  {
    nombre: "Gorra",
    foto: "gorra.jpg",
    caracteristicas: "Lana, talla única, color rojo",
    precio: "$10",
  },
];

// Obtener los elementos del DOM
var carousel = document.getElementById("carousel");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// Crear una función para crear una tarjeta con los datos de un artículo
function crearTarjeta(articulo) {
  // Crear un elemento div con la clase card
  var card = document.createElement("div");
  card.className = "card";

  // Crear un elemento img con la foto del artículo
  var img = document.createElement("img");
  img.src = articulo.foto;

  // Crear un elemento h3 con el nombre del artículo
  var h3 = document.createElement("h3");
  h3.textContent = articulo.nombre;

  // Crear un elemento p con las características del artículo
  var p = document.createElement("p");
  p.textContent = articulo.caracteristicas;

  // Crear un elemento span con el precio del artículo
  var span = document.createElement("span");
  span.textContent = articulo.precio;

  // Crear un elemento button con el texto Agregar al carrito
  var button = document.createElement("button");
  button.textContent = "Agregar al carrito";

  // Agregar los elementos creados al div card
  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(span);
  card.appendChild(button);

  // Devolver el div card
  return card;
}

// Crear una variable para guardar el índice actual del carrusel
var indice = 0;

// Crear una función para agregar las tarjetas al carrusel según el índice
function agregarTarjetas() {
  // Limpiar el contenido del carrusel
  carousel.innerHTML = "";

  // Recorrer el arreglo de artículos desde el índice hasta el índice + 4
  for (var i = indice; i < indice + 4; i++) {
    // Obtener el artículo en la posición i del arreglo
    var articulo = articulos[i];

    // Si el artículo existe, crear una tarjeta con sus datos y agregarla al carrusel
    if (articulo) {
      var tarjeta = crearTarjeta(articulo);
      carousel.appendChild(tarjeta);
    }
  }
}

// Invocar la función agregarTarjetas para mostrar las primeras cuatro tarjetas
agregarTarjetas();

// Crear una función para mover el carrusel a la izquierda
function moverIzquierda() {
  // Si el índice es mayor que cero, restar uno al índice y agregar las tarjetas
  if (indice > 0) {
    indice--;
    agregarTarjetas();
  }
}

// Crear una función para mover el carrusel a la derecha
function moverDerecha() {
  // Si el índice es menor que la longitud del arreglo de artículos menos cuatro, sumar uno al índice y agregar las tarjetas
  if (indice > 0) {
    indice++;
    agregarTarjetas();
  }
}

prev.addEventListener("click", moverIzquierda);
