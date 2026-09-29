const COLOR1 = "bg_color_1";
const COLOR2 = "bg_color_2";
const COLOR3 = "bg_color_3";

function changeColor(number) {
    const divBg = document.querySelector('#bgColors');
    divBg.classList.remove(COLOR1, COLOR2, COLOR3);
    if (number == 1) {
        divBg.classList.add(COLOR1)
    }
    if (number == 2) {
        divBg.classList.add(COLOR2)
    }
    if (number == 3) {
        divBg.classList.add(COLOR3)
    }
}