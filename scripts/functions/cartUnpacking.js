import { products } from "../../data/products.js";
import { cart } from "../../data/cart.js";
export const cartUnpacking = () => {
  let productsInCart = [];
  cart.forEach((productCart) => {
    const isExist = productsInCart.find(
      (product) => product.id === productCart.id
    );
    if (!isExist) {
      productsInCart.push([
        products.find((product) => product.id === productCart.id),
        productCart.quantity,
      ]);
    }
  });
  return productsInCart;
};
