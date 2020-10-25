function isValidContact(contacts, showErrors = false) {
  const cIPosts = contacts.infoPosts;
  let errors = [];

  //   data
  if (typeof contacts !== "object") {
    if (showErrors === true) {
      console.error("ERROR: paslauga turi buti objektas.");
    }
    return false;
  }
  //   status active
  if (
    typeof cIPosts.active !== "boolean" ||
    typeof contacts.form.active !== "boolean"
  ) {
    errors.push("ERROR: paslaugos aktyvumo statusas turi buti boolean tipo.'");
  }
  // selector and pathForm
  if (
    typeof contacts.selector !== "string" ||
    typeof contacts.pathForm !== "string"
  ) {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis.");
  } else {
    if (contacts.selector === "" || contacts.pathForm === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuščias.");
    }
    if (contacts.selector.length > 30 || contacts.pathForm.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }
  // title
  if (typeof contacts.title !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis ");
  } else {
    if (contacts.title === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuščias.");
    }
    if (contacts.title.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }
  //   icon
  if (typeof cIPosts.icon !== "string" || typeof mainIcon !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis");
  } else {
    if (cIPosts.icon === "" || mainIcon === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuscias.");
    }
    if (cIPosts.icon.length > 30 || mainIcon.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }
  // subtitle
  if (typeof cIPosts.subtitle !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis");
  } else {
    if (cIPosts.subtitle === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuscias.");
    }
    if (cIPosts.subtitle.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }
  // info post array
  if (typeof cIPosts.info !== "array") {
    errors.push("ERROR: paslaugos aprasymas turi buti masyvas.");
  } else {
    if (cIPosts.info === "") {
      errors.push("ERROR: paslaugos aprasymas negali buti tuscias.");
    }
    if (cIPosts.info.length > 5) {
      errors.push("ERROR: paslaugos aprasymas yra per ilgas.");
    }
  }
  /**
   * formos validacija
   */
  // form array
  if (typeof contacts.form !== "array") {
    errors.push("ERROR: paslaugos aprasymas turi buti masyvas.");
  } else {
    if (contacts.form === "") {
      errors.push("ERROR: paslaugos aprasymas negali buti tuscias.");
    }
    if (contacts.form.length > 5) {
      errors.push("ERROR: paslaugos aprasymas yra per ilgas.");
    }
  }
  // objects in form
  if (
    typeof form.type !== "string" ||
    typeof form.placeholder !== "string" ||
    typeof form.id !== "string" ||
    typeof form.name !== "string"
  ) {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis.");
  } else {
    if (
      form.type === "" ||
      form.placeholder === "" ||
      form.id === "" ||
      form.name === ""
    ) {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuscias.");
    }
    if (
      form.type > 30 ||
      form.placeholder > 30 ||
      form.id > 30 ||
      form.name > 30
    ) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }

  // button
  if (typeof contacts.formButton !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis.");
  } else {
    if (contacts.formButton.length < 5) {
      errors.push("ERROR: paslaugos pavadinimas negali buti per trumpas.");
    }
    if (contacts.image.length > 20) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }
  // visų error išloginimas
  if (errors.length > 0) {
    if (showErrors === true) {
      for (let i = 0; i < errors.length; i++) {
        console.error(errors[i]);
      }
    }
    return false;
  }
  // negeneruojame neaktyviu paslaugu
  if (!service.active) {
    return false;
  }

  return true;
}
export { isValidContact };
