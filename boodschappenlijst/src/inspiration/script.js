const table = document.getElementById('lijst');
const productPrices = document.getElementsByClassName('productPrice');
const productQuantity = document.getElementsByClassName('productQuantity');
const productTotalCost = document.getElementsByClassName('productTotalCost');
const totalCost = document.getElementById('totalCost');
const listSize = productPrices.length;

function update() {
    let sum = 0;
    for (let i = 0; i < listSize; i++) {
        let subtotal = Math.round(productPrices[i].innerHTML*productQuantity[i].value*100)/100;
        productTotalCost[i].innerHTML = subtotal;
        sum = sum + subtotal;
    }
    totalCost.innerHTML = sum;
    console.log('Aantal producten is gewijzigd');
}

table.addEventListener('change', update);