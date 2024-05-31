const btn = document.querySelector("#total-btn");

const priceForMaleJacket = 180.95;
const priceForFemaleJacket = 150.95;

let quantityForMale = document.querySelector("#male-qty");
let quantityForFemale = document.querySelector("#female-qty");

let maleTotalPrice = document.querySelector("#male-total-price");
let femaleTotalPrice = document.querySelector("#female-total-price");

let total = document.querySelector("#total");

function calculateTotal() {
  // for male
  if (quantityForMale !== undefined) {
    quantityForMale = parseFloat(quantityForMale.value);
    var mtotal = (quantityForMale * priceForMaleJacket).toFixed(2);
    maleTotalPrice.innerText = `R${mtotal}`;
  }
  // for females
  if (quantityForFemale !== undefined) {
    quantityForFemale = parseFloat(quantityForFemale.value);
    var ftotal = (quantityForFemale * priceForFemaleJacket).toFixed(2);
    femaleTotalPrice.innerText = `R${ftotal}`;
  }

  //   total for both
  total.innerText = `R${+ftotal + +mtotal}`
}

btn.addEventListener("click", calculateTotal);
