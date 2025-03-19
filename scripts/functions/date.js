import { cart } from "../../data/cart.js";
import { calcPrice } from "./calculate-price.js";
dayjs.locale("en");
export function dateidentifyer(divItemElement = false) {
  let nowDate = dayjs();
  if (!divItemElement) {
    return formater(nowDate);
  }
  changeShipping(divItemElement, nowDate);
}
const formater = (nowDate) => {
  let date7Delve = nowDate.add(7, "day");
  let date3Delve = nowDate.add(3, "day");
  let dat1Delve = nowDate.add(1, "day");
  return [
    date7Delve.format("dddd,MMMM D"),
    date3Delve.format("dddd,MMMM D"),
    dat1Delve.format("dddd,MMMM D"),
  ];
};
const changeShipping = (divItemElement, nowDate) => {
  const deliveryDateElement = divItemElement.querySelector(".js-delivery-date");
  const delevierygridElement = divItemElement.querySelectorAll(
    ".js-delivery-options-grid"
  );
  delevierygridElement.forEach((element, i) => {
    element.addEventListener("click", () => {
      deliveryDateElement.innerHTML = formater(nowDate)[i];
      element.querySelector(".js-radio-button").checked = true;
      cart.forEach((product) => {
        if (product.id === divItemElement.dataset.id) {
          product.dateOfdelevier = formater(nowDate)[i];
          product.shipping = [0, 499, 999][i];
          product.deliveryOptionId = `${i + 1}`;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      calcPrice();
    });
  });
};
export const renderRadio = (divItemElement) => {
  // const deliveryDateElement = divItemElement.querySelector(".js-delivery-date");
  const radioButtonElement =
    divItemElement.querySelectorAll(".js-radio-button");
  const product = cart.find(
    (product) => product.id === divItemElement.dataset.id
  );

  radioButtonElement.forEach((element) => {
    if (element.dataset.date === product.dateOfdelevier) {
      element.checked = true;
    }
  });
};
