// import needed files
import { products } from "../data/products.js"; // --> data
import { cart } from "../data/cart.js"; // --> data
import { htmlForAmazonPage } from "./functions/generating-html.js"; // --> function
import { addButtonFunc } from "./functions/add-button-func.js"; // --> function
import "../backend/backEnd-practise.js";
///////////////////////////////////////////////
/* code for generating page */
// put the grid element in the js
const productGridElement = document.querySelector(".js-prodcts-grid");
// render html
let Html = htmlForAmazonPage(products);
productGridElement.innerHTML = Html;

///////////////////////////////////////////////
/* cart code */
addButtonFunc(cart);
