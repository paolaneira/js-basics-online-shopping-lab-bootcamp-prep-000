var cart = [];
var cart2 = []

function getCart() {
 return cart;
}

function getCart2() {
 return cart2;
}

function setCart(c) {
  cart = c;
  return cart;
}

function setCart2(c) {
  cart2 = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var itemObj = {"itemName": [item], "itemPrice": price};
  cart.push(itemObj);
  return `${item} has been added to your cart.`
}

function viewCart() {
  const line = "In your cart, you have "
  var itemObj2 = {[item]:price}
  var cart= cart.push(itemObj2)
  if (cart.length === 0) {
    return "Your shopping cart is empty"
  }
  else if (cart2.length === 1) {
    return line + Object.keys(cart2) + " at $" + Object.values(cart2) + "."
  }
  else {
  const line3 = ", and " + Object.keys(cart2[cart2.length-1]) + "at $" + Object.keys(cart2[cart2.length-1]) + "."
  for (let i=0; i<cart2.length-1; i++) {
    var line2 = []
    var line2 =  Object.keys(cart2[i]) + " at $" + Object.values(cart2[i])
    }
    return line + line2 + line3
  }
}

function total() {
}

function removeFromCart(item) {
}

function placeOrder(cardNumber) {
}
