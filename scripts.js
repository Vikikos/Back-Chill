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

function addSnow() {
  const svg = createSnowDown();
  divBg.appendChild(svg);
}

const createSnowDown = () => {
  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 1440 320");

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("fill", "#f0f9ff");
  path.setAttribute("fill-opacity", "1");
  path.setAttribute(
    "d",
    "M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,218.7C672,213,768,139,864,117.3C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  );

  svg.appendChild(path);
  svg.classList.add('snowDown');

  return svg;
}