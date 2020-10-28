function renderContentNumbers(selector, data) {
    const DOM = document.querySelector(selector);

    let HTML = '';
    const size = data.length;
    for (let i = 0; i < size; i++) {
        HTML += `<div class="fact col-3 col-lg-6 col-sm-12" data-animate="true">
                    <p class="number">${data[i].number}</p>
                    <h4 class="description">${data[i].description}</h4>
                </div>`;
    }
    
    return DOM.innerHTML = HTML;
}

function animateContentNumber(block, maxSeconds) {
    const numberElement = block.querySelector('.number');

    if (maxSeconds < 1) {
        throw 'ERROR: mazu maziausiai animacijai reikia 1 sekundes!';
    }

    const number = parseInt(numberElement.innerText),
        totalTime = maxSeconds % 1 === 0 ? maxSeconds * 1000 : Math.round(maxSeconds) * 1000,
        fps = 30,
        timegap = 500 / fps,                   // galimos tik sveikos sekundes
        totalFrames = (totalTime / 1000 * fps);
    let currentNumber = 0,
        currentFrame = 0;

    numberElement.innerText = currentNumber;

    const timer = setInterval(() => {
        currentFrame++;
        currentNumber += number / totalFrames;

        numberElement.innerText = Math.round(currentNumber);
        if (currentFrame >= totalFrames) {
            clearInterval(timer);
        }
    }, timegap);

    return;
}

function addEventListenerContentNumbersOnScroll() {
    window.addEventListener('scroll', () => {
        const blocks = document.querySelectorAll('.fact');

        for (const block of blocks) {
            const blockBottomHeight = block.offsetHeight + block.offsetTop;
            const windowBottomHeight = window.innerHeight + window.scrollY;
            if (windowBottomHeight >= blockBottomHeight) {
                if (block.dataset.animate === 'true') {
                    animateContentNumber(block, 3);
                    block.dataset.animate = 'false';
                }
            }
        }
    });
}

export { renderContentNumbers, animateContentNumber, addEventListenerContentNumbersOnScroll };
