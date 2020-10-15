"use script";

function singlePostContact(data) {
  function contactInfo() {
    let allInfo = "";
    for (let i = 0; i < data.info.length; i++) {
      allInfo += `<span class='text-info'>${data.info[i]}</span>`;
    }
    return allInfo;
  }

  return `<div class='sng-info-post'>
        <div class= c-icon> 
        <i class='s-c-icon ${data.icon}'></i>
        </div>
        <div class='c-info'> 
        <h4>${data.subtitle}</h4>
        <div>
        ${contactInfo()}
        </div>
        </div>
        </div>`;
}

export { singlePostContact };
