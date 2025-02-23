//importing modules needded
import { cart } from "../../data/cart.js";
////////////////////////////
export function deleteButton(deletSpan, divElement) {
  deletSpan.addEventListener("click", () => {
    const itemQuantityElement = document.querySelector(".js-items-quantity");

    cart.forEach((cartProduct, index) => {
      if (deletSpan.dataset.buttonId === cartProduct.id) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        divElement.remove();
        const quantity = cart.reduce((acc, product) => {
          acc += product.quantity;
          return acc;
        }, 0);
        itemQuantityElement.innerHTML = `${quantity} items`;
      }
    });
  });
}
