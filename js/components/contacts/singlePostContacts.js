"use script";

function singlePostContact(data) {
  function contactInfo() {
    let allInfo = "";
    for (let i = 0; i < data.info.length; i++) {
      allInfo += `<div>${data.info[i]}</div>`;
    }
    return allInfo;
  }

  return `<div> 
        <i class='${data.icon}'></i>
        <div class='c-info'> 
        <h4>${data.subtitle}</h4>
        <span>
        ${contactInfo()}
        </span>
        </div>
        </div>`;
}

export { singlePostContact };
