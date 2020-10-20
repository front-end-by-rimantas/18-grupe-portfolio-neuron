// kas tas showErrors??
// kur perkeliame validacijos funkcija
function isValidContact(contacts, showErrors = false) {
  const cIPosts = contacts.infoPosts;
  let errors = [];
  //   data
  if (typeof contacts !== "object") {
    if (showErrors === true) {
      console.error("ERROR: service has to be an object.");
    }
    return false;
  }
  //   status active
  if (
    typeof cIPosts.active !== "boolean" ||
    typeof contacts.form.active !== "boolean"
  ) {
    errors.push(
      "ERROR: a type of service activity status has to be a boolean."
    );
  }
  // selector and pathForm
  if (
    typeof contacts.selector !== "string" ||
    typeof contacts.pathForm !== "string"
  ) {
    errors.push("ERROR: a type of title service has to be a text.");
  } else {
    if (contacts.selector === "" || contacts.pathForm === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuscias.");
    }
    if (contacts.selector.length > 30 || contacts.pathForm.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }
  // title
  if (typeof contacts.title !== "string") {
    errors.push("ERROR: a type of title service has to be a text.");
  } else {
    if (contacts.title === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuscias.");
    }
    if (contacts.title.length > 30) {
      errors.push("ERROR: paslaugos pavadinimas yra per ilgas.");
    }
  }
  //   icon
  if (typeof cIPosts.icon !== "string" || typeof mainIcon !== "string") {
    errors.push("ERROR: a type of icon service has to be a text.");
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
    errors.push("ERROR: a type of title service has to be a text.");
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
  // form array
  if (typeof contacts.form !== "array") {
    errors.push("ERROR: paslaugos aprasymas turi buti masyvas.");
  } else {
    if (contacts.form === "") {
      errors.push("ERROR: paslaugos aprasymas negali buti tuscia.");
    }
    if (contacts.form.length > 5) {
      errors.push("ERROR: paslaugos aprasymas yra per ilga.");
    }
  }
  // objects in form
  if (typeof cIPosts.subtitle !== "string") {
    errors.push("ERROR: a type of title service has to be a text.");
  } else {
    if (cIPosts.subtitle === "") {
      errors.push("ERROR: paslaugos pavadinimas negali buti tuscias.");
    }
    if (cIPosts.subtitle.length > 30) {
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

// Pavyzdys:
// function isString(data) {
//   if (typeof data !== "string") {
//     console.error(`${data} is not a string`);
//     return false;
//   }
//   return true;
// }

// function isArray(data) {
//   if (!Array.isArray(data)) {
//     console.error(`${data} is not an array`);
//     return false;
//   }
//   return true;
// }

// function isDefined(data) {
//   if (!data) {
//     console.error(`${data} can not be empty`);
//     return false;
//   }
//   return true;
// }

// function textLengthMin(data, length) {
//   if (data.length < length) {
//     console.error(`${data} can not be shorter than ${length} characters`);
//     return false;
//   }
//   return true;
// }

// function textLengthMax(data, length) {
//   if (data.length > length) {
//     console.error(`${data} can not be longer than ${length} characters`);
//     return false;
//   }
//   return true;
// }

// const validation = {
//   contactvalidation(data) {
//     if (
//       !isDefined(data.path) ||
//       !isString(data.path) ||
//       !textLengthMin(data.path, 2)
//     ) {
//       return false;
//     }

//     if (
//       !isDefined(data.path2) ||
//       !isString(data.path2) ||
//       !textLengthMin(data.path2, 2)
//     ) {
//       return false;
//     }

//     if (
//       !isDefined(data.imagePath) ||
//       !isString(data.imagePath) ||
//       !textLengthMin(data.imagePath, 4)
//     ) {
//       return false;
//     }

//     if (
//       !isDefined(data.image) ||
//       !isString(data.image) ||
//       !textLengthMin(data.image, 5)
//     ) {
//       return false;
//     }

//     if (
//       !isDefined(data.title) ||
//       !isString(data.title) ||
//       !textLengthMax(data.title, 80) ||
//       !textLengthMin(data.title, 2)
//     ) {
//       return false;
//     }

//     if (isDefined(data.cntIntText) || isArray(data.cntIntText)) {
//       for (let i = 0; i < data.cntIntText.length; i++) {
//         if (
//           !textLengthMin(data.cntIntText[i], 2) ||
//           !textLengthMax(data.title, 80)
//         ) {
//           return false;
//         }
//       }
//     } else {
//       return false;
//     }

//     if (
//       !isDefined(data.button) ||
//       !isString(data.button) ||
//       !textLengthMax(data.button, 20) ||
//       !textLengthMin(data.button, 2)
//     ) {
//       return false;
//     }

//     if (
//       !isDefined(data.videoLink) ||
//       !isString(data.videoLink) ||
//       !textLengthMin(data.videoLink, 13)
//     ) {
//       return false;
//     }
//     return true;
//   },
// };
// export default validation
