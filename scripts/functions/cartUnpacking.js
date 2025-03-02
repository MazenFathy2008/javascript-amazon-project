import { products } from "../../data/products.js";
import { cart } from "../../data/cart.js";
export const cartUnpacking = () => {
  let productsInCart = [];
  cart.forEach((productCart) => {
    productsInCart.push([
      products.find((product) => product.id === productCart.id),
      productCart.quantity,
      productCart.shipping,
      productCart.dateOfdelevier,
    ]);
  });
  return productsInCart;
};
