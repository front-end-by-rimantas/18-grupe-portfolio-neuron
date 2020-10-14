"use script";
import { contentContactsData } from "./data/contentContacts.js";

function singleContentContactsPost(data) {
  const HTML = `
      <div> 
      <div class='c-icon'>ICON</div>
      <div class='c-info'> 
      <h4>${data.subtitle}</h4>
      <span>
      INFOFUNCTION
      </span>
      </div>
      </div>`;
  return HTML;
}

console.log(singleContentContactsPost);

/* <span>${infofunction(contentContactData.info)}</span> */

// sukuriama funkcija if, kad atrinktu contentContactsData.info.lenght > 1 ?
// mapinanti funkcija- map ciklas tol kol maziau i negu info.lenght
// su htm prie kurio prilipdysi div su info

function renderContentContactsPosts(data) {
  let HTML = "";
  const contactsDOM = document.querySelector(data.path);
  const contactsPostsCount = data.infoPosts.length;

  for (let i = 0; i < contactsPostsCount; i++) {
    const contact = data.infoPosts[i];
    HTML += singleContentContactsPost(contentContactsData);
  }
  return (contactsDOM.innerHTML = HTML);
}

export { renderContentContactsPosts };
