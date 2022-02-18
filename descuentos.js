

// podemos enviar un objeto al console.log con {}
/* console.log({ 

    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
})  */

function calcularPrecioConDescuento(precio, descuento) {
    

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

return precioConDescuento;

}

function onclickButtonPriceDisccount() {
    
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

       
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resulP = document.getElementById("ResultP")

        resulP.innerText = "El precio con descuento es: $" + precioConDescuento;
   
}