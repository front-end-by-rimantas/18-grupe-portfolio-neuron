import { singlePostContact } from "./singlePostContacts.js";

function renderPostsContacts(data) {
  let HTML = "";
  const contactsDOM = document.querySelector(data.path);
  const contactsPostsCount = data.infoPosts.length;

  for (let i = 0; i < contactsPostsCount; i++) {
    const contact = data.infoPosts[i];
    HTML += singlePostContact(contact);
  }
  contactsDOM.innerHTML = HTML;
  console.log(HTML);
  console.log(contactsDOM);
}

export { renderPostsContacts };
