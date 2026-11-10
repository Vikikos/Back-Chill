const createGiftTheme = () => {
    const container =  document.querySelector('#bgColors');
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots-container');

    for (let i = 0; i < 96; i++) {
        let dot = document.createElement('i');
        dot.classList.add('gift-dot');
        dotsContainer.appendChild(dot);
    }
    const ribbon = createRibbon();
    container.appendChild(dotsContainer);
    container.appendChild(ribbon);
}

const createRibbon = () => {
    const ribbonContainer = document.createElement('div');

    ribbonContainer.classList.add('ribbon-container')

    let divVertical = document.createElement('div');
    divVertical.classList.add('div-vertical');

    let divHorizontal = document.createElement('div');
    divHorizontal.classList.add('div-horizontal');

    let ribbon = document.createElement('img');
    ribbon.src = 'images/ribbon.png';
    ribbon.classList.add('ribbon');

    ribbonContainer.appendChild(divHorizontal);
    ribbonContainer.appendChild(divVertical);
    ribbonContainer.appendChild(ribbon)

    return ribbonContainer;
}