import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
function simpleUnpcking() {
  let productsInCart = [];
  cart.forEach((productCart) => {
    const itemInfo = products.find((product) => product.id === productCart.id);
    productsInCart.push([itemInfo.priceCents, productCart.quantity]);
  });
  return productsInCart;
}
function totalPrice(productsInCart = []) {
  const price = productsInCart.reduce((acc, product) => {
    acc += product[0] * product[1];
    return acc;
  }, 0);
  return price;
}

export const calcPrice = () => {
  const productsInCart = simpleUnpcking();

  const priceBeforTax = totalPrice(productsInCart);
  const shipping = 0;
  const priceShipping = priceBeforTax + shipping;
  const tax = priceShipping * 0.1;
  const priceWithTax = tax + priceShipping;
  const cartQuantity = cart.reduce((acc, product) => {
    acc += product.quantity;
    return acc;
  }, 0);
  ///////////////////////////
  const itemsNumElement = document.querySelector(".js-payment-row");
  const PriceNoTaxElement = document.querySelector(".js-price-no-tax");
  const shippingElement = document.querySelector(".js-shipping-price");
  const priceWithShippingElement = document.querySelector(
    ".js-total-shipping-price"
  );
  const taxAmountElement = document.querySelector(".js-tax");
  const totalPriceElement = document.querySelector(".js-total-price");
  //////////////////////////////////////////
  itemsNumElement.innerHTML = `Items (${cartQuantity}):`;
  PriceNoTaxElement.innerHTML = `$${(priceBeforTax / 100).toFixed(2)}`;
  shippingElement.innerHTML = `$${(shipping / 100).toFixed(2)}`;
  priceWithShippingElement.innerHTML = `$${(priceShipping / 100).toFixed(2)}`;
  taxAmountElement.innerHTML = `$${(tax / 100).toFixed(2)}`;
  totalPriceElement.innerHTML = `$${(priceWithTax / 100).toFixed(2)}`;
};
