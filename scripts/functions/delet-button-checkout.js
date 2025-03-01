//importing modules needded
import { cart } from "../../data/cart.js";
import { calcPrice } from "./calculate-price.js";
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
        calcPrice();
        if (!cart.length) {
          const checkOutGridElement =
            document.querySelector(".js-checkout-grid");
          let html;
          html = `<div class="cart-empty-div">
          <p class="cart-empty-p">Cart is Empty</p>
          <a href="amazon.html"><button class="View-products button-primary">View products</button></a>
        </div>`;
          checkOutGridElement.innerHTML = html;
        }
      }
    });
  });
}
