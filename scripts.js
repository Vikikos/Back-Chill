const COLORS = 7;
const divBg = document.querySelector('#bgColors');
let isOpenMenu = false;

function toggleMenu() {
  const menuContainer = document.querySelector('#menu');
  menuContainer.className = '';
  console.log(isOpenMenu)
  if(isOpenMenu) {
    menuContainer.classList.add('menu-hide');
  } else {
    menuContainer.classList.add('menu-show');
  }
  isOpenMenu = !isOpenMenu;
}

function changeColor(number) {
    deleteColor();
    toggleMenu();
    divBg.classList.add(`bg_color_${number}`);
}

function deleteColor() {
    deleteContent();
    for (let i = 1; i <= COLORS; i++) {
        divBg.classList.remove(`bg_color_${i}`);
    }
}

function deleteContent() {
  if (divBg) {
    divBg.innerHTML = '';
  }
}

function iniciarCaidaDeHojas(imageUrl, cantidad = 20) {
  let container = document.getElementById('bgColors');
  if (!container) {
    container = document.createElement('div');
    container.id = 'bgColors';
    document.body.appendChild(container);
  }

  const blurOverlay = document.createElement('div');
  blurOverlay.classList.add('blur-overlay');
  container.appendChild(blurOverlay);

  for (let i = 0; i < cantidad; i++) {
    const leaf = document.createElement('img');
    leaf.src = imageUrl;
    leaf.classList.add('leaf');

    const leftPos = Math.random() * 100;          
    const duration = 5 + Math.random() * 5;        
    const delay = Math.random() * 5;               
    const size = 20 + Math.random() * 30;

    leaf.style.left = `${leftPos}vw`;
    leaf.style.animationDuration = `${duration}s`;
    leaf.style.animationDelay = `${delay}s`;
    leaf.style.width = `${size}px`;

    container.appendChild(leaf);
  }
}