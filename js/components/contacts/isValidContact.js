function isValidContact(contact, showErrors = false) {
  let errors = [];

  if (typeof contact !== "object") {
    if (showErrors === true) {
      console.error("ERROR: paslauga turi buti objektas.");
    }
    return false;
  }

  if (typeof contact.active !== "boolean") {
    errors.push("ERROR: paslaugos aktyvumo statusas turi buti boolean tipo.");
  }

  if (typeof contact.icon !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis");
  } else {
    if (contact.icon === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuščias.");
    }
    if (contact.icon.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }

  if (typeof contact.subtitle !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis.");
  } else {
    if (contact.subtitle === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuščias.");
    }
    if (contact.subtitle.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }

  if (!Array.isArray(contact.info)) {
    errors.push("ERROR: paslaugos aprašymas turi buti masyvas.");
  } else {
    if (contact.info.length < 0) {
      errors.push("ERROR: paslaugos aprašymas negali buti tuscias.");
    }
    if (contact.info.length > 5) {
      errors.push("ERROR: paslaugos aprašymas yra per ilgas.");
    }
  }

  if (errors.length > 0) {
    if (showErrors === true) {
      for (let i = 0; i < errors.length; i++) {
        console.error(errors[i]);
      }
    }
    return false;
  }

  if (!contact.active) {
    return false;
  }

  return true;
}

export { isValidContact };
