export const listClicked = [];
import { saveButton } from "./save-button.js";
export function renderSaveDelete() {
  console.log(listClicked)
  listClicked.forEach((click,index) => {
    let value = 0;
    try {
      value =
        click.querySelector(".js-add-number").value;
    } catch (error) {
      value = 1;
    }
    click.innerHTML = `
        <input type='number' value = ${value} class="update-number-input js-add-number
      }"> <span class = 'save-span js-save-button'>save</span></input>
    `;
    saveButton(click, parseInt(value),index);
  });
}
