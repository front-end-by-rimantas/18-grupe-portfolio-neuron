const contactsData = {
  selector: "#contact-info",
  mainIcon: "flaticon-gps",
  title: "Contact With Us",
  infoPosts: [
    {
      icon: "flaticon-place",
      subtitle: "Visit Us",
      type: "address",
      info: ["530 Old BUffalo Street", "Northwest #205,", "New York -", "3087"],
      active: true,
    },
    {
      icon: "flaticon-phone",
      subtitle: "Call Us",
      type: "number",
      info: [
        {
          href: "tel:+1(123)-456-7890",
          text: "+1 (123) -456-7890",
        },
        {
          href: "tel:+1(123)-456-7890",
          text: "+1 (123) -456-7890",
        },
      ],
      active: true,
    },
    {
      icon: "flaticon-mail-1",
      subtitle: "Email Us",
      type: "email",
      info: [
        {
          href: "mailto:infoname@gmail.com",
          text: "infoname@gmail.com",
        },
        {
          href: "#",
          text: "www.yourname.com",
        },
      ],
      active: true,
    },
  ],
  pathForm: "#contact-form",
  form: [
    {
      type: "text",
      placeholder: "Name",
      id: "name",
      name: "name",
      active: true,
    },
    {
      type: "email",
      placeholder: "E-Mail",
      id: "email",
      name: "email",
      active: true,
    },
    {
      type: "text",
      placeholder: "Phone Number",
      id: "phone_number",
      name: "phone_number",
      active: true,
    },
    {
      type: "text",
      placeholder: "Subject",
      id: "subject",
      name: "subject",
      active: true,
    },
  ],
  formButton: "SUBMIT NOW!",
};

export { contactsData };
