var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
<<<<<<< HEAD
  var price = Math.floor(Math.random() * 100)
  var itemObj = {itemName: item, price: price};
  cart.push(itemObj);
  return `${item} has been added to your cart.`
}
=======
  var price = Math.floor(Math.random())
  cart = {"item": price}
>>>>>>> 5c3e969fe857cf1b271ae546ab027b4b6ec7b765

function viewCart() {
}

function total() {
}

function removeFromCart(item) {
}

function placeOrder(cardNumber) {
}
