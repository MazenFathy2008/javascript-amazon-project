//importing modules needded
import { htmlForCkeckout } from "./functions/generating-html.js";
import { calcPrice } from "./functions/calculate-price.js";
import { loadedDataPromis } from "../data/products.js";
import { placeOrderFunc } from "./functions/place-order.js";
////////////////////////////
loadedDataPromis.then(() => {
  htmlForCkeckout();
  calcPrice();
  placeOrderFunc();
});
