const cart = [];
const addButtonElement = document.querySelectorAll(".js-add-button");
const cartQuantityElement = document.querySelector(".js-cart-quantity");
const selectquantatiyElement = document.querySelectorAll(
  ".js-select-quantatiy"
);
let quantity = 0;
addButtonElement.forEach((button, i) => {
  button.addEventListener("click", () => {
    cartQuantityElement.innerHTML = `${(quantity += parseInt(
      selectquantatiyElement[i].value
    ))}`;
    cart.push({info:products[i], quantatiy:parseInt(selectquantatiyElement[i].value)});
    console.log(cart);
  });
});
