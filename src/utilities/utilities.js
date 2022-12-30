export function getShoredCart() {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
}

export function addToLocalStorage(id, q) {
  let shoppingCart = getShoredCart();

  const quantity = shoppingCart[id];

  if (quantity) {
    shoppingCart[id] = quantity + q;
  } else {
    shoppingCart[id] = q;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}

export function removeFromLocalStorage(id) {
  let shoppingCart = getShoredCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
}

export function removeAllFromLocalStorage() {
  localStorage.removeItem("shopping-cart");
}
