import { saveButton } from "./save-button.js";
import { htmlForCkeckout } from "./generating-html.js";
import { cart } from "../../data/cart.js";
function generateHtmlForUpdate() {
  const updadeQuantityElement = document.querySelectorAll(".js-update-input");

  updadeQuantityElement.forEach((element) => {
    let value = 1;
    element.addEventListener("click", () => {
      value = updadeQuantityValue(element, value);
      const addHtml = `
        <input type='number' value = ${value} class="update-number-input js-add-number
      }"> <span class = 'save-span js-save-button'>save</span></input>
        `;
      element.innerHTML = addHtml;
      saveButton(element, value);
    });
  });
}
function updadeQuantityValue(element, previousValue) {
  const updateCounteElement = element.querySelector(".js-add-number");
  if (updateCounteElement) {
    return parseInt(updateCounteElement.value);
  }
  return previousValue;
}
function saveButton(element, value = 0) {
  const button = element.querySelector(".js-save-button");
  button.addEventListener("click", () => {
    cart.forEach((cartProduct) => {
      if (cartProduct.id === element.dataset.updateId) {
        if (value > 0) {
          cartProduct.quantity += value;
          localStorage.setItem("cart", JSON.stringify(cart));
          htmlForCkeckout();
          return;
        }
        alert(`Value : ${value} is invalide`);
      }
    });
  });
}

export function updadeQuantity() {
  generateHtmlForUpdate();
}
