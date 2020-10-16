function renderContactForm(data) {
  const contactformDom = document.querySelector("#contact-form");
  let fullform = "";
  for (let i = 0; i < data.form.length; i++) {
    fullform += `<div class='form-input'>${data.form[i]}</div>`;
  }

  let formWButton = `<form class="c-form">${fullform}<div class="f-text-input">${data.formText}${data.formButton}</div>
  </form>`;

  contactformDom.innerHTML = formWButton;
}

export { renderContactForm };
