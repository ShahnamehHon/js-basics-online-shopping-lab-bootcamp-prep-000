var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 101);
 let itemInfo = { itemName: `${item}`, itemPrice: price };
 cart.push(itemInfo);
 return(`${item} has been added to your cart.`);
}

function viewCart() {
  if(cart.length > 0) {
  let items = [];
  for(let i = 0; i < cart.length; i++) {
  items.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
+    if(cart.length > 1 && i === cart.length - 1) {
+      itemNameAndPrice.splice(i, 1, ` and ${cart[i].itemName} at $${cart[i].itemPrice}`);
+    }
+  }
+  return `In your cart, you have${itemNameAndPrice}.`;
+} else {
+  return 'Your shopping cart is empty.'
+  }
 }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
