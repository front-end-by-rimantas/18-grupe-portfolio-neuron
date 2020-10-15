function renderContactForm(data) {
  const contactformDom = document.querySelector("#c-form-side");
  let fullform = "";
  for (let i = 0; i < data.form.length; i++) {
    fullform += `<div class='form-input'>${data.form[i]}</div>`;
  }

  let formWButton = `<form class="c-form col-3">${fullform}${data.formText}${data.formButton}
  </form>`;

  contactformDom.innerHTML = formWButton;
}

export { renderContactForm };
