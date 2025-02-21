import { listClicked } from "./renering-checkout.js";
import { renderSaveDelete } from "./renering-checkout.js";
export function updadeQuantity() {
  const updadeQuantityElement = document.querySelectorAll(`.js-update-input`);
  updadeQuantityElement.forEach((element) => {
    element.addEventListener("click", () => {
      const isExist = listClicked.find((listElement) => element === listElement);
      if (!isExist) {
        listClicked.push(element);
      }
      renderSaveDelete();
    });
  });
}

export function updadeQuantityValue() {
  const updateCounteElement = document.querySelectorAll(".js-add-number");
  updateCounteElement.forEach((element) => {
    element.addEventListener("click", () => {
      renderSaveDelete();
    });
  });
}
