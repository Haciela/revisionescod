// cotejar que las rutas estuvieran bien
// los productos estaban mal etiquetados o no supe si yo los movi
const productos = [
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "/codigo-otros-3/bota-azul.jpg"},
    {nombre: "bota negra", tipo: "bota", color: "negro", img: "/codigo-otros-3/bota-negra.jpg"},
    {nombre: "zapato azul", tipo: "zapato", color: "azul", img: "/codigo-otros-3/taco-azul.jpg"},
    {nombre: "zapato negro", tipo: "zapato", color: "negro", img: "/codigo-otros-3/taco-negro.jpg"},
    {nombre: "zapato rojo", tipo: "zapato", color: "rojo", img: "/codigo-otros-3/zapato-rojo.jpg"}
  ]
  // DECIA ELEMENTS Y  ES SINGULAR, igual es element byId y se ponen en el html
  const listaProductos = document.getElementById("lista-de-productos");
  // se llama a los elementos del html
  const inputFiltro = document.getElementById("input");
    
  // cambiar de var a let.
  //se llama primero a la funcion permite que los productos se muestren sin tener que añadir las img en el html
  // estaba abajo y no estaba definida la funcion
  
  const displayProductos = (productos) => {
    listaProductos.innerHTML = ""; // reemplace el while para no iterar uno a uno y la verdad no entendia con el while
  
    
    for (let i = 0; i < productos.length; i++) {
      let producto = productos[i]; // para que itere por cada uno y pueda crearles un div
      let div = document.createElement("div");
      div.classList.add("producto");
  
      let productName = document.createElement("p"); 
      productName.classList.add("titulo");
      productName.textContent = producto.nombre; 
  
      let imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);
  
      div.appendChild(productName);
      div.appendChild(imagen);
      listaProductos.appendChild(div); // decia li pero puse el nombre de la variable diferente por lo que no estaba bien
  
    };
  };
  
  displayProductos(productos);
  
  function filterProducts() {
    const texto = inputFiltro.value.toLowerCase(); 
    const productosFiltrados = productos.filter(item => 
      item.tipo.includes(texto) || item.color.includes(texto)
    );
  
    displayProductos(productosFiltrados);
  }