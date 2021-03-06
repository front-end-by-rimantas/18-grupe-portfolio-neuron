import { isValidContact } from "./isValidContact.js";

function generateInfo(data, infoType) {
  if (infoType === "address") {
    return `${data} <br>`;
  }

  if (infoType === "number" || infoType === "email") {
    return `<a href="${data.href}">${data.text}</a>`;
  }
}

function singlePostContact(data) {
  if (!isValidContact(data, true)) {
    return "";
  }

  function contactInfo() {
    let allInfo = "";
    for (let i = 0; i < data.info.length; i++) {
      allInfo += generateInfo(data.info[i], data.type);
    }
    return allInfo;
  }

  return `<div class='single-info-post'>
        <div class= c-icon> 
        <i class='s-c-icon ${data.icon}'></i>
        </div>
        <div class='c-info'> 
        <h4>${data.subtitle}</h4>
        <div class='text-info'>
        ${contactInfo()}
        </div>
        </div>
        </div>`;
}

export { singlePostContact };
