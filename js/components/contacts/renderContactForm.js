import { isValidForm } from "./isValidForm.js";

function renderContactForm(data) {
  const contactformDom = document.querySelector(data.pathForm);
  let fullform = "";
  for (let i = 0; i < data.form.length; i++) {
    if (!isValidForm(data.form[i], data.formButton, true)) {
      break;
    }
    fullform += `<div class='form-input'><input type="${data.form[i].type}" placeholder="${data.form[i].placeholder}" id="${data.form[i].id}" name="${data.form[i].type}" required></div>`;
  }

  let formWButton = `<form class="c-form">${fullform}<div class="f-text-input"><textarea class ="contact-text" placeholder="Your Message Here" rows="5" id="message" name="message" required=""></textarea><div><button class="data-button">${data.formButton}</button></div></div>
  </form>`;

  contactformDom.innerHTML = formWButton;
}

export { renderContactForm };
