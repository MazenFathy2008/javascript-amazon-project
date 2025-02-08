//  declearation to the cart array
const cart = []; // ---> this code will developed by localstorage


// the counter of quatityes 
let quantity = 0; // ---> this code will developed by localstorage


// putting all Html elements that we need in variables to reuse it
const addButtonElement = document.querySelectorAll(".js-add-button");
const cartQuantityElement = document.querySelector(".js-cart-quantity");
const selectquantatiyElement = document.querySelectorAll(
  ".js-select-quantatiy"
);


// Beggining of the code
addButtonElement.forEach((button, index) => { // ---> useing foreach to loop on each element in the array 


  const productId = button.dataset.productId; // ---> put the name of object from dataset of button


  button.addEventListener("click", () => { // ---> event for each button
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) { // ---> check if the product is in the cart


        //  render the quantity of cart
        cartQuantityElement.innerHTML = `${(quantity += parseInt(
          selectquantatiyElement[index].value
        ))}`;

        // increase the quantity of the product in the cart
        cart[i].quantatiy +=  parseInt(
          selectquantatiyElement[index].value
        );
        console.log(cart)
        return; // ---> end the function
      }
    }


        //  render the quantity of cart
    cartQuantityElement.innerHTML = `${(quantity += parseInt(
      selectquantatiyElement[index].value
    ))}`;


    // add new prodact to the cart
    cart.push({
      id: productId,
      quantatiy: parseInt(selectquantatiyElement[index].value),
    });
  });
});
