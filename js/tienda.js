let btnRemera = document.getElementById("btnRemera");
let btnGorra = document.getElementById("btnGorra");
let btnLlavero = document.getElementById("btnLlavero");
let btnTaza = document.getElementById("btnTaza");
let btnPines = document.getElementById("btnPines");
let btnSticker = document.getElementById("btnSticker");
let btnDisco = document.getElementById("btnDisco");
let btnPases = document.getElementById("btnPases");
let cantprodcarrito= document.getElementById("cantprodcarrito");
let arrayCarrito = [];
btnRemera.onclick = () =>
{
    let inputp = document.getElementById("inputremera")
    let cantidadp = inputp.value

    agregarProducto("remera",cantidadp)
    alert(`listo! se agregó ${cantidadp} remera/s al carrito! `)
    inputp.value = 1

    cantprodcarrito.textContent = ` ${contarproductos()} `;
}

btnGorra.onclick = () =>
{
    let inputp = document.getElementById("inputgorra")
    let cantidadp = inputp.value

    if(cantidadp > 0){
    agregarProducto("gorra",cantidadp)
    alert(`listo! se agregó ${cantidadp} gorra/s al carrito! `)
    inputp.value = 1
    }
    else
    {
        alert("Disculpe! no poseemos stock de este producto en este momento!")
    }
}

btnLlavero.onclick = () =>
{
    let inputp = document.getElementById("inputllavero")
    let cantidadp = inputp.value


    agregarProducto("llavero",cantidadp)
    alert(`listo! se agregó ${cantidadp} llavero/s al carrito! `)
    inputp.value = 1

    cantprodcarrito.textContent = ` ${contarproductos()} `;
    
}

btnTaza.onclick = () =>
{
    let inputp = document.getElementById("inputtaza")
    let cantidadp = inputp.value

    agregarProducto("taza",cantidadp)
    alert(`listo! se agregó ${cantidadp} taza/s al carrito! `)
    inputp.value = 1

    cantprodcarrito.textContent = ` ${contarproductos()} `;
}

btnPines.onclick = () =>
{
    let inputp = document.getElementById("inputpines")
    let cantidadp = inputp.value

    agregarProducto("pin",cantidadp)
    alert(`listo! se agregó ${cantidadp} pin/es al carrito! `)
    inputp.value = 1

    cantprodcarrito.textContent = ` ${contarproductos()} `;
}

btnSticker.onclick = () =>
{
    let inputp = document.getElementById("inputsticker")
    let cantidadp = inputp.value

    agregarProducto("sticker",cantidadp)
    alert(`listo! se agregó ${cantidadp} sticker/s al carrito! `)
    inputp.value = 1

    cantprodcarrito.textContent = ` ${contarproductos()} `;
}

btnDisco.onclick = () =>
{
    let inputp = document.getElementById("inputdiscos")
    let cantidadp = inputp.value

    agregarProducto("disco",cantidadp)
    alert(`listo! se agregó ${cantidadp} disco/s al carrito! `)

    cantprodcarrito.textContent = ` ${contarproductos()} `;
}

btnPases.onclick = () =>
{
    let inputp = document.getElementById("inputpases")
    let cantidadp = inputp.value

    agregarProducto("pase",cantidadp)
    alert(`listo! se agregó ${cantidadp} pase/s al carrito! `)
    inputp.value = 1

    cantprodcarrito.textContent = ` ${contarproductos()} `;

}






function contarproductos()
{
    let contador = 0;
    let contadorstr
    arrayCarrito.forEach(producto => {

        contador += parseInt(producto.cantidad)

        
    });
    console.log(contador)
    return contador;
}


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