//importing modules needded
import { htmlForCkeckout } from "./functions/generating-html.js";
import { calcPrice } from "./functions/calculate-price.js";
import { loadFromBackend } from "../data/products.js";
////////////////////////////

loadFromBackend(() => {
  htmlForCkeckout();
  calcPrice();
});
