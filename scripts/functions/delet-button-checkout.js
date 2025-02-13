import { cart } from "../../data/cart.js";
// import { products } from "../../data/products.js";
import { htmlForCkeckout } from "./generating-html.js";
export function deleteButton() {
  const deleteButtonElement = document.querySelectorAll(".js-delet-button");
  deleteButtonElement.forEach((button) => {
    button.addEventListener('click', () => {
      cart.forEach((cartProduct,index)=>{
        if(button.dataset.buttonId === cartProduct.id){
          cart.splice(index,1)
          localStorage.setItem('cart',JSON.stringify(cart))
          htmlForCkeckout()
        }
      })
    });
  });
}
