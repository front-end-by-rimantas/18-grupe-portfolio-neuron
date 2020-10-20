"use script";
function diferentInfo(data, infoType) {
  if (infoType === "address") {
    return `${data} <br>`;
  }

  if (infoType === "number" || infoType === "email") {
    return `<a href="${data.href}">${data.text}</a>`;
  }
}

function singlePostContact(data) {
  function contactInfo() {
    let allInfo = "";
    for (let i = 0; i < data.info.length; i++) {
      allInfo += diferentInfo(data.info[i], data.type);
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
