//importing modules needded
import { updadeQuantity } from "./update-quantity.js";
import { deleteButton } from "./delet-button-checkout.js";
import { dateidentifyer } from "./date.js";
import { renderRadio } from "./date.js";
////////////////////////////
export const conrolingEachDiv = () => {
  const itemDivElements = document.querySelectorAll(".js-cart-item-div");
  itemDivElements.forEach((element) => {
    const updateSpanElement = element.querySelector(".js-update-input");
    const deleteSpanElement = element.querySelector(".js-delet-button");
    updadeQuantity(updateSpanElement, element);
    deleteButton(deleteSpanElement, element);
    dateidentifyer(element);
    renderRadio(element);
  });
};
