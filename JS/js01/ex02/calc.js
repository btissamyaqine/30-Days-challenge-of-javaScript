function calculateDiscountPourcent(levelType){

  var discountPercent = 0;
    if ( levelType === "lev1") {
      discountPercent = 5;
    } else if( levelType === "lev2") {
    discountPercent = 10;
    } else if(levelType === "lev3") {
    discountPercent = 15;
    }
  return discountPercent;
  };
 function getPrice() {
  var amount = Number(document.getElementById("amount").value);
  var discountLevel = Number(document.getElementById("discount-level").value) / 100;
  var discountPerscent = calculateDiscountPourcent(discountLevel, amount);


  var totalDiscount = amount - (amount * discountPerscent);
  var productNameValue = document.getElementById("prodName").value;
  var amountValue = document.getElementById("amount").value;
  document.getElementById("discount").value = totalDiscount.toFixed(2);
  document.getElementById("productNameValue").value = productNameValue;
  document.getElementById("CostValue").value = amountValue;
}
