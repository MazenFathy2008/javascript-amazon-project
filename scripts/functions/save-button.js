import { cart } from "../../data/cart.js";
import { htmlForCkeckout } from "./generating-html.js";
import { listClicked } from "./renering-checkout.js";
import { renderSaveDelete } from "./renering-checkout.js";
export function saveButton(element, value = 0, index) {
  try {
    const button = element.querySelector(".js-save-button");
    button.addEventListener("click", () => {
      cart.forEach((cartProduct) => {
        if (cartProduct.id === element.dataset.updateId) {
          if (value > 0) {
            cartProduct.quantity += value;
            localStorage.setItem("cart", JSON.stringify(cart));
            htmlForCkeckout()
            return;
          }
          alert(`Value : ${value} is invalide`);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}
