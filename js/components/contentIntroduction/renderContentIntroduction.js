function renderCntIntroduction(data) {
  const cntIntroTextDom = document.querySelector(`${data.path}`);
  const cntIntroImageDom = document.querySelector(`${data.path3}`);
  let allCntIntroText = "";
  for (let i = 0; i < data.cntIntText.lenght; i++) {
    allCntIntroText += data.cntIntText[i];
  }
  let cntLeft = `<div class="cnt-int-text">${allCntIntroText}</div><div class="cnt-int-btn-v">${data.button}${data.videoLink}</div>`;
  cntIntroTextDom.innerHTML = cntLeft;
  cntIntroImageDom.innerHTML = `${data.image}`;
}

export { renderCntIntroduction };
