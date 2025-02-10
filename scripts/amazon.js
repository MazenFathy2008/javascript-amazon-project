// import needed files
import { products } from "../data/products.js"; // --> data
import { cart } from "../data/cart.js"; // --> data
import { generateHtml } from "./functions/generating-html.js"; // --> function
import { addButtonFunc } from "./functions/add-button-func.js"; // --> function
///////////////////////////////////////////////
/* code for generating page */
// put the grid element in the js
const productGridElement = document.querySelector(".js-prodcts-grid");
// render html
let Html = generateHtml(products);
productGridElement.innerHTML = Html;

///////////////////////////////////////////////
/* cart code */
addButtonFunc(cart)
console.log(cart)