//  declearation to the cart array and get the array of products from local storage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const calculateQuantity = () =>
  cart.reduce((total, item) => total + item.quantity, 0);

// get the quantity of the products from local storage
let quantity = calculateQuantity();

// putting all Html elements that we need in variables to reuse it
const addButtonElement = document.querySelectorAll(".js-add-button");
const cartQuantityElement = document.querySelector(".js-cart-quantity");
const selectquantatiyElement = document.querySelectorAll(
  ".js-select-quantatiy"
);
// set the new products in the local storage
const setItem = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  quantity = calculateQuantity();
};
// used to render the cart on page
const renderCart = () => {
  //  render the quantity of cart
  cartQuantityElement.innerHTML = `${quantity}`;
};

const updateCart = () => {
  setItem();
  renderCart();
};
// Beggining of the code
addButtonElement.forEach((button, index) => {
  // ---> useing foreach to loop on each element in the array
  const productId = button.dataset.productId; // ---> put the name of object from dataset of button
  button.addEventListener("click", () => {
    // ---> event for each button
    const isExist = cart.find((product) => product.id === productId);
    //check if the product is in the cart
    if (isExist) {
      // increase the quantity of the product in the cart
      isExist.quantity += parseInt(selectquantatiyElement[index].value);
    } else {
      // add new prodact to the cart
      cart.push({
        id: productId,
        quantity: parseInt(selectquantatiyElement[index].value),
      }); // ---> end of add new prodact to the cart
    }
    updateCart();
  });
});
updateCart();

