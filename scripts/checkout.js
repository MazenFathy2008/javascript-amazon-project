//importing modules needded
import { htmlForCkeckout } from "./functions/generating-html.js";
import { calcPrice } from "./functions/calculate-price.js";
import { loadedDataPromis } from "../data/products.js";
////////////////////////////
loadedDataPromis.then(() => {
  htmlForCkeckout();
  calcPrice();
});
