//importing modules needded
import { cartUnpacking } from "./cartUnpacking.js";
import { conrolingEachDiv } from "./renering-checkout.js";
import { dateidentifyer } from "./date.js";
////////////////////////////
// this used to generate html for page
export function htmlForAmazonPage(list = []) {
  let html = ` `;
  list.forEach((product) => {
    html += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}" />
          </div>

          <div class="product-name limit-text-to-2-lines">${product.name}</div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="${product.getStarUrl()}"
            />
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${product.formatPrice()}
          </div>

          <div class="product-quantity-container">
            <select class="js-select-quantatiy">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          ${product.extraInfo()}
          <div class="product-spacer"></div>
          <div class="add-button-flexbox">
            <div class="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>
            <div class="Added-animtion-flexbox">
              <div class="Added-animtion js-Added-animtion">
                <img
                  src="images/icons/checkmark.png"
                  alt="checkmark"
                  class="checkmark-img"
                />
                <span class="Added">Added</span>
              </div>
            </div>
            <button
              class="add-to-cart-button button-primary js-add-button"
              data-product-id="${product.id}"
            >
              <!-- this add data to this button to be able to use it later -->
              Add to Cart
            </button>
          </div>
        </div>
    `;
  });
  return html;
}
////////////////////////////

const generateHtmlForRender = () => {
  const productsInCart = cartUnpacking();
  let quantity = productsInCart.reduce((acc, product) => {
    acc += parseInt(product[1]);
    return acc;
  }, 0);
  const checkOutGridElement = document.querySelector(".js-checkout-grid");
  const itemQuantityElement = document.querySelector(".js-items-quantity");
  let listOfDates = dateidentifyer();
  let html = " ";

  if (productsInCart.length) {
    productsInCart.forEach((product) => {
      html += `<div class="cart-item-container js-cart-item-div" data-id='${
        product[0].id
      }'>
            <div class="delivery-date">Delivery date:
            <span class='js-delivery-date'>${product[3]}</span>
            </div>
            <div class="cart-item-details-grid">
              <img
                class="product-image"
                src="${product[0].image}"
              />
              <div class="cart-item-details">
                <div class="product-name">${product[0].name}</div>
                <div class="product-price">$${(
                  product[0].priceCents / 100
                ).toFixed(2)}</div>
                <div class="product-quantity">
                  <span> Quantity: 
                    <span class="quantity-label js-quantity">${
                      product[1]
                    }</span> 
                  </span>
                  <div class="update-quantity-link link-primary js-update-input" data-update-id = "${
                    product[0].id
                  }">
                    <span class="js-update-span">Update</span>
                  </div>
                  <span class="delete-quantity-link link-primary js-delet-button" data-button-id='${
                    product[0].id
                  }'>
                    Delete
                  </span>
                </div>
              </div>
              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option js-delivery-options-grid">
                  <input
                    type="radio"
                
                    class="delivery-option-input js-radio-button"
                    name="delivery-option-${product[0].id}"
                    data-date="${listOfDates[0]}"
                    
                  />
                  <div>
                    <div class="delivery-option-date">${listOfDates[0]}</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option js-delivery-options-grid">
                  <input
                    type="radio"
                    class="delivery-option-input js-radio-button"
                    name="delivery-option-${product[0].id}"
                    data-date="${listOfDates[1]}"

                  />
                  <div>
                    <div class="delivery-option-date">${listOfDates[1]}</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option js-delivery-options-grid">
                  <input
                    type="radio"
                    class="delivery-option-input js-radio-button"
                    name="delivery-option-${product[0].id}"
                    data-date="${listOfDates[2]}"
                  />
                  <div>
                    <div class="delivery-option-date">${listOfDates[2]}</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
    });
    checkOutGridElement.innerHTML = html;
  } else {
    html = `<div class="cart-empty-div">
            <p class="cart-empty-p">Cart is Empty</p>
            <a href="amazon.html"><button class="View-products button-primary">View products</button></a>
          </div>`;
    checkOutGridElement.innerHTML = html;
  }

  itemQuantityElement.innerHTML = `${quantity} items`;
};

export function htmlForCkeckout() {
  generateHtmlForRender();
  conrolingEachDiv();
}
