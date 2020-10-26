function isValidForm(form, button, showErrors = false) {
  let errors = [];

  if (typeof form !== "object") {
    if (showErrors === true) {
      console.error("ERROR: paslauga turi buti objektas.");
    }
    return false;
  }

  if (typeof form.active !== "boolean") {
    errors.push("ERROR: paslaugos aktyvumo statusas turi buti boolean tipo.");
  }

  if (typeof form.type !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis");
  } else {
    if (form.type === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuščias.");
    }
    if (form.type.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }

  if (typeof form.placeholder !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis.");
  } else {
    if (form.placeholder === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuščias.");
    }
    if (form.placeholder.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }

  if (typeof form.id !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis.");
  } else {
    if (form.id === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuščias.");
    }
    if (form.id.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }

  if (typeof form.name !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis.");
  } else {
    if (form.name === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuščias.");
    }
    if (form.name.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }

  if (form.type !== "text" && form.type !== "email") {
    errors.push("ERROR: įveskite tinkamą formos tipą");
  }

  if (typeof button !== "string") {
    errors.push("ERROR: paslaugos pavadinimas turi buti tekstinis.");
  } else {
    if (button.length < 5) {
      errors.push("ERROR: paslaugos pavadinimas negali buti per trumpas.");
    }
    if (button.length > 20) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }

    if (errors.length > 0) {
      if (showErrors === true) {
        for (let i = 0; i < errors.length; i++) {
          console.error(errors[i]);
        }
      }
      return false;
    }

    if (!form.active) {
      return false;
    }

    return true;
  }
}
export { isValidForm };
