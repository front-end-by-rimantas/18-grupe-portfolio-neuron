function isValidContact(contact, showErrors = false) 
  let errors = [];

  //   data
  if (typeof contact !== "object") {
    if (showErrors === true) {
      console.error("ERROR: paslauga turi buti objektas.");
    }
    return false;
  }
  //   status active
  if (
    typeof cIPosts.active !== "boolean" ||
    typeof contact.form.active !== "boolean"
  ) {
    errors.push("ERROR: paslaugos aktyvumo statusas turi buti boolean tipo.'");
  }
  // selector and pathForm
  if (
    typeof contact.selector !== "string" ||
    typeof contact.pathForm !== "string"
  ) {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis.");
  } else {
    if (contact.selector === "" || contact.pathForm === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuščias.");
    }
    if (contact.selector.length > 30 || contact.pathForm.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }
  // title
  if (typeof contact.title !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis ");
  } else {
    if (contact.title === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuščias.");
    }
    if (contact.title.length > 30) {
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


export { isValidContact };
