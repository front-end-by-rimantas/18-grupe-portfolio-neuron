import validation from "../../components/contentIntroduction/dataValidation.js";

function renderCntIntroduction(data) {
  if (!validation.cntIntroduction(data)) {
    console.error("validacija nepraėjo");
    return;
  }
  const cntIntroTextDom = document.querySelector(`${data.path}`);
  const cntIntroImageDom = document.querySelector(`${data.path2}`);
  let allCntIntroText = "";
  let cIntTitle = `<h2 class="cnt-int-h">${data.title}</h2>`;
  let cIntButton = `<button class="cnt-int-btn">${data.button}</button>`;
  let cIntVideo = `<a class="cnt-int-video flaticon-play-button" href="${data.videoLink}" aria-hidden="true"></a>`;
  let cIntImage = `<img class="about" src="${data.imagePath}${data.image}" alt="About video"/>`;
  for (let i = 0; i < data.cntIntText.length; i++) {
    allCntIntroText += `<p>${data.cntIntText[i]}</p>`;
  }
  let cntLeft = `<div class="cnt-int-text">${cIntTitle}${allCntIntroText}</div><div class="cnt-int-btn-v">${cIntButton}${cIntVideo}</div>`;
  cntIntroTextDom.innerHTML = cntLeft;
  cntIntroImageDom.innerHTML = `${cIntImage}`;
}

export { renderCntIntroduction };
