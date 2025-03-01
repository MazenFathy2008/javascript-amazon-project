import { cart } from "../../data/cart.js";
import { updadeQuantity } from "./update-quantity.js";
import { calcPrice } from "./calculate-price.js";
export function saveButton(element) {
  const button = element.querySelector(".js-save-button");
  const numCounters = element.querySelector(".js-add-number");
  const itemQuantityElement = document.querySelector(".js-items-quantity");
  const quantityLable = element.querySelector(".js-quantity");
  const updadeQuantityElement = element.querySelector(`.js-update-input`);
  button.addEventListener("click", () => {
    cart.forEach((product) => {
      if (product.id === updadeQuantityElement.dataset.updateId) {
        if (product.quantity + parseInt(numCounters.value) > 0) {
          const newQuantity = (product.quantity += parseInt(numCounters.value));
          localStorage.setItem("cart", JSON.stringify(cart));
          const quantity = cart.reduce((acc, product) => {
            acc += product.quantity;
            return acc;
          }, 0);
          quantityLable.innerHTML = newQuantity;
          itemQuantityElement.innerHTML = `${quantity} items`;
          updadeQuantityElement.innerHTML = `<span class="js-update-span">Update</span>`;
          calcPrice();
          updadeQuantity(updadeQuantityElement, element);
        } else {
          alert("Invalid number (decrease by unexcbectid number)");
        }
      }
    });
  });
}
