  /**
   * formos validacija
   */
  // form array
  if (typeof contact.form !== "array") {
    errors.push("ERROR: paslaugos aprasymas turi buti masyvas.");
  } else {
    if (contact.form === "") {
      errors.push("ERROR: paslaugos aprasymas negali buti tuscias.");
    }
    if (contact.form.length > 5) {
      errors.push("ERROR: paslaugos aprasymas yra per ilgas.");
    }
  }
  // objects in form
  if (
    typeof contact.form.type !== "string" ||
    typeof contact.form.placeholder !== "string" ||
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

  if (form.type !== "text" || form.type !== "email") {
      error.push("ERROR: įveskite tinkamą formos tipą");
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


export { isValidContact };
