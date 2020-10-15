import { singlePostContact } from "./singlePostContacts.js";

function renderPostsContacts(data) {
  let HTML = "";
  const contactsDOM = document.querySelector(data.path);
  const contactsPostsCount = data.infoPosts.length;
  const allContacts = `<div class='contact-top'><div class='con-icon'><i class= 'main-icon ${data.mainIcon}'></i></div>
  <div class='con-title'><h2>${data.title}</h2></div></div>`;

  for (let i = 0; i < contactsPostsCount; i++) {
    const contact = data.infoPosts[i];
    HTML += singlePostContact(contact);
  }

  contactsDOM.innerHTML = allContacts + HTML;
}

export { renderPostsContacts };
