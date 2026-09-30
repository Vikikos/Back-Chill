const COLORS = 4

function changeColor(number) {
    const divBg = document.querySelector('#bgColors');
    for (let i = 1; i <= COLORS; i++) {
        divBg.classList.remove(`bg_color_${i}`);
    }
    divBg.classList.add(`bg_color_${number}`);

}