document.getElementById("main-form").addEventListener("submit", calculatePrice);

function calculatePrice(e) {
  e.preventDefault();

  var el = document.getElementById("main-form");
  var resultBlock = document.getElementById("result");
  var error = false;

  var price = Number(el.elements["item-price"].value);
  if (price == 0) {
    error = true;
    document.getElementById("price-label").style.color = "red";
  }
  else {
    document.getElementById("price-label").style.color = "#648cf4";
  }

  var qty = Number(el.elements["item-qty"].value);
  if (qty == 0) {
    error = true;
    document.getElementById("qty-label").style.color = "red";
  }
  else {
    document.getElementById("qty-label").style.color = "#648cf4";
  }

  var type = el.elements["type"].value;
  if (type.length === 0) {
    error = true;
    document.getElementById("type-label").style.color = "red";
  }
  else {
    document.getElementById("type-label").style.color = "#648cf4";
  }

  if (error == false) {
    var markupPrice;
    switch (type) {
      case "Одяг":
        markupPrice = price * 1.2;
        break;
      case "Взуття":
        markupPrice = price * 1.25;
        break;
      case "Інші товари":
        markupPrice = price * 1.15;
        break;
      default:
        break;
    }

    var totalCost = markupPrice * qty;
   
    document.getElementById("resultItemPrice").innerHTML = markupPrice.toFixed(2);
    document.getElementById("totalCost").innerHTML = totalCost.toFixed(2);
    resultBlock.style.display = "flex";
  } 
  else {
    resultBlock.style.display = "none";
  }
}
