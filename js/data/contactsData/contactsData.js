const contactsData = {
  path: "#contact-info",
  mainIcon: "flaticon-gps",
  title: "Contact With Us",
  infoPosts: [
    {
      icon: "flaticon-place",
      subtitle: "Visit Us",
      info: [
        `530 Old BUffalo Street <br> Northwest #205,<br> New York -<br> 3087`,
      ],
      active: true,
    },
    {
      icon: "flaticon-phone",
      subtitle: "Call Us",
      info: [
        `<a href="tel:+1(123)-456-7890">+1 (123) -456-7890</a>\n`,
        `<a href="tel:+1(123)-456-7890">+1 (123) -456-7890</a>`,
      ],
      active: true,
    },
    {
      icon: "flaticon-mail-1",
      subtitle: "Email Us",
      info: [
        `<a href="mailto:infoname@gmail.com">infoname@gmail.com</a>\n`,
        `<a href="#">www.yourname.com</a>`,
      ],
      active: true,
    },
  ],
  pathForm: "",
  form: [
    ` <input type="text" placeholder="Name" id="name" name="name" required>`,
    `<input type="email" placeholder="E-Mail" id="email" name="email" required>`,
    `<input type="text" placeholder="Phone Number" id="phone_number" name="phone_number" required>`,
    `<input type="text" placeholder="Subject" id="subject" name="subject" required>`,
  ],
  formText: `<textarea class ="contact-text" placeholder="Your Message Here" rows="5" id="message" name="message" required=""></textarea>`,
  formButton: `<div><button class="data-button">SUBMIT NOW!</button></div>`,
};

export { contactsData };
