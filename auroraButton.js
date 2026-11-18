const createAuroraTheme = () => {
    const container = document.querySelector('#bgColors');

    let divOverlay = document.createElement('div');
    divOverlay.classList.add('overlay_9');

    for (let i = 0; i < 4; i++) {
        let divBack = document.createElement('div');
        divBack.classList.add('lines-aurora-div');

        container.appendChild(divBack);
    }

    container.appendChild(divOverlay);
}