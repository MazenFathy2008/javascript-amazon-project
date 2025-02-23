//importing modules needded
import { saveButton } from "./save-button.js";
////////////////////////////
export function updadeQuantity(element, divElements) {
  const updateSpan = divElements.querySelector(".js-update-span");
  updateSpan.addEventListener("click", () => {
    const value = updadeQuantityValue(element);
    element.innerHTML = `<input type='number' value = ${value} class="update-number-input js-add-number
            }"> <span class = 'save-span js-save-button'>save</span></input>`;
    saveButton(divElements);
  });
}
const updadeQuantityValue = (element) => {
  const counter = element.querySelector(".js-add-number");
  if (counter) {
    const value = counter.value;
    return value;
  }
  return 1;
};
