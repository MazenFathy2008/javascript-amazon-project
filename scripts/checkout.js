import { products } from "../data/products.js"; // --> data
import { cart } from "../data/cart.js"; // --> data
import { htmlForCkeckout } from "./functions/generating-html.js";
////////////////////////////
htmlForCkeckout(cart,products)

