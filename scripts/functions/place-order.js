import { cart } from "../../data/cart.js";
export function placeOrderFunc() {
  const placeOrderElement = document.querySelector(".js-place-order");
  placeOrderElement.addEventListener("click", async () => {
    loadingDataForOrde();
    window.location.href = 'orders.html'
  });
}
async function loadingDataForOrde() {
  const respons = await fetch("https://supersimplebackend.dev/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: cart,
    }),
  });
  const orders = await respons.json();
  console.log(orders);
}
