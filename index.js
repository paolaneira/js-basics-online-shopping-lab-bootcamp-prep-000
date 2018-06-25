var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var itemObj = {itemName: item, price: price};
  cart.push(itemObj);
  return `${item} has been added to your cart.`
}

function viewCart() {
}

function total() {
}

function removeFromCart(item) {
}

function placeOrder(cardNumber) {
}
