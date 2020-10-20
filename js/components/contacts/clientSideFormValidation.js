function validateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      form.emailAddr.value
    )
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

export { validateEmail };
