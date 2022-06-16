1
const SAMA03 = 32000
const SAMA13 = 40000
const SAMA53 = 50000

let producto = 0
let selProd = prompt("seleccione el producto deseado:\n 1-Samsung a03 \n 2-Samsung a13 \n 3-Samsung a53")

if(selProd == 1){
    producto = SAMA03
}
else if(selProd == 2){
    producto = SAMA13
}
else if(selProd == 3){
    producto = SAMA53
}else{
    alert("producto no encontrado")
}


const suma = (a, b) => a + b
const resta = (a, b) => a - b
const iva = x => x * 0.21
let precioProducto = producto
let descuento = producto * 10 / 100

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
let preSinDesc = suma(producto, iva(producto))

alert("precio de lista: " + preSinDesc + "\ndescuento: -" + descuento + "\nprecio final con iva: " + nuevoPrecio )

let Cuotas = prompt("seleccione cantidad de cuotas:\n 1- 1 pago s/int \n 2- 2 pago s/int ")
if(Cuotas == 1){
    cantCuot = nuevoPrecio / 1
}
else if(Cuotas == 2){
    cantCuot = nuevoPrecio / 2
}else{
    alert("Cuotas no seleccionadas")
}

alert("el valor de la cuota es :" + cantCuot)
alert("gracias por su compra")