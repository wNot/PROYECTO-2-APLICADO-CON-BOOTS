let btnRemera = document.getElementById("btnRemera");
let btnGorra = document.getElementById("btnGorra");
let btnLlavero = document.getElementById("btnLlavero");
let btnTaza = document.getElementById("btnTaza");
let btnPines = document.getElementById("btnPines");
let btnSticker = document.getElementById("btnSticker");
let btnDisco = document.getElementById("btnDisco");
let btnPases = document.getElementById("btnPases");

btnRemera.onclick = () =>
{
    let cantidadp = prompt("Ingrese la cantidad que desea comprar!")

    while(isNaN(cantidadp))
    {
        cantidadp = prompt("Ingreso un valor incorrecto. Por favor Ingrese la cantidad que desea comprar!")
    }
    
    agregarProducto("remera",cantidadp)
    alert(`listo! se agregó ${cantidadp} remera/s al carrito! `)
}

btnGorra.onclick = () =>
{
    let cantidadp = prompt("Ingrese la cantidad que desea comprar!")

    while(isNaN(cantidadp))
    {
        cantidadp = prompt("Ingreso un valor incorrecto. Por favor Ingrese la cantidad que desea comprar!")
    }

    agregarProducto("gorra",cantidadp)
    alert(`listo! se agregó ${cantidadp} gorra/s al carrito! `)
}

btnLlavero.onclick = () =>
{
    let cantidadp = parseInt(prompt("Ingrese la cantidad que desea comprar!"))


    while(isNaN(cantidadp))
    {
        cantidadp = prompt("Ingreso un valor incorrecto. Por favor Ingrese la cantidad que desea comprar!")
    }

    agregarProducto("llavero",cantidadp)
    alert(`listo! se agregó ${cantidadp} llavero/s al carrito! `)
    
    
}

btnTaza.onclick = () =>
{
    let cantidadp = prompt("Ingrese la cantidad que desea comprar!")

    while(isNaN(cantidadp))
    {
        cantidadp = prompt("Ingreso un valor incorrecto. Por favor Ingrese la cantidad que desea comprar!")
    }

    agregarProducto("taza",cantidadp)
    alert(`listo! se agregó ${cantidadp} taza/s al carrito! `)
}

btnPines.onclick = () =>
{
    let cantidadp = prompt("Ingrese la cantidad que desea comprar!")

    while(isNaN(cantidadp))
    {
        cantidadp = prompt("Ingreso un valor incorrecto. Por favor Ingrese la cantidad que desea comprar!")
    }

    agregarProducto("pin",cantidadp)
    alert(`listo! se agregó ${cantidadp} pin/es al carrito! `)
}

btnSticker.onclick = () =>
{
    let cantidadp = prompt("Ingrese la cantidad que desea comprar!")

    while(isNaN(cantidadp))
    {
        cantidadp = prompt("Ingreso un valor incorrecto. Por favor Ingrese la cantidad que desea comprar!")
    }

    agregarProducto("sticker",cantidadp)
    alert(`listo! se agregó ${cantidadp} sticker/s al carrito! `)
}

btnDisco.onclick = () =>
{
    let cantidadp = prompt("Ingrese la cantidad que desea comprar!")

    while(isNaN(cantidadp))
    {
        cantidadp = prompt("Ingreso un valor incorrecto. Por favor Ingrese la cantidad que desea comprar!")
    }

    agregarProducto("disco",cantidadp)
    alert(`listo! se agregó ${cantidadp} disco/s al carrito! `)
}

btnPases.onclick = () =>
{
    let cantidadp = prompt("Ingrese la cantidad que desea comprar!")

    while(isNaN(cantidadp))
    {
        cantidadp = prompt("Ingreso un valor incorrecto. Por favor Ingrese la cantidad que desea comprar!")
    }

    agregarProducto("pase",cantidadp)
    alert(`listo! se agregó ${cantidadp} pase/s al carrito! `)
}





let arrayCarrito = [];

function Gorra (cantidad)
{
    this.nombre= Gorra;
    this.descripcion = "Gorra Bordada con logo";
    this.precio = 749.99;
    this.cantidad = cantidad;
}

function Remera (cantidad)
{
    this.nombre= Remera;
    this.descripcion = "Remera serigrafiada logo";
    this.precio = 1699.99;
    this.cantidad = cantidad;
}
function Llavero (cantidad)
{
    this.nombre= Llavero;
    this.descripcion = "Llavero metalico con logo";
    this.precio = 349.99;
    this.cantidad = cantidad;
}

function Taza (cantidad)
{
    this.nombre= Taza;
    this.descripcion = "Taza Negra sublimada con logo";
    this.precio = 149.99;
    this.cantidad = cantidad;
}
function Pin (cantidad)
{
    this.nombre= Pin;
    this.descripcion = "Pines con logo de la banda";
    this.precio = 149.99;
    this.cantidad = cantidad;
}
function Sticker (cantidad)
{
    this.nombre= Sticker;
    this.descripcion = "Stickers con logo";
    this.precio = 149.99;
    this.cantidad = cantidad;
}
function Disco (cantidad)
{
    this.nombre= Disco;
    this.descripcion = "Disco fisico ultimo lanzamiento";
    this.precio = 649.99;
    this.cantidad = cantidad;
}

function PaseVip (cantidad)
{
    this.nombre= "Pase Vip";
        this.descripcion = "Conoce a la banda! Pases vip para meet-and-greed y promociones exclusivas!";
        this.precio = 2499.99;
        this.cantidad = cantidad;
}

function agregarProducto(productoid,cantidad)
{
    switch(productoid)
    {
        case "taza":
            const taza = new Taza (cantidad);
            arrayCarrito.push(taza);
            console.log(taza);
            break;

        case "remera":
            const remera = new Remera (cantidad);
            arrayCarrito.push(remera);
            console.log(remera);
            break;

        case "llavero":
            const llavero = new Llavero (cantidad);
            arrayCarrito.push(llavero);
            console.log(llavero);
            break;

        case "pin":
            const pin = new Pin (cantidad);
            arrayCarrito.push(pin);
            console.log(pin);
            break;

        case "sticker":
            const sticker = new Sticker (cantidad);
            arrayCarrito.push(sticker);
            console.log(sticker);
            break;

        case "disco":
            const disco = new Disco (cantidad);
            arrayCarrito.push(disco);
            console.log(disco);
            break;

        case "pase":
            const paseVip = new PaseVip (cantidad);
            arrayCarrito.push(paseVip);
            console.log(paseVip);
            break;
    }
 
}