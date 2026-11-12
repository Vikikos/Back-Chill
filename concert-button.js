const container = document.getElementById('bgColors');

const createConsertTheme = () => {
    createConcertLights();
    creteGlitter();
}
const createConcertLights = () => {
    for (let i = 0; i < 8; i++) {
        const light = document.createElement('div');
        light.classList.add('light-beam');
        container.appendChild(light);
    }
}

const creteGlitter = () => {
    const containerGlitter = document.createElement('div');
    containerGlitter.classList.add('sparkles');

    for (let i = 0; i < 100; i++) {
        const dot = document.createElement('div');
        dot.className = 'sparkle';

        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;

        dot.style.animationDelay = `${Math.random() * 2}s`;
        dot.style.animationDuration = `${1 + Math.random() * 2}s`;

        containerGlitter.appendChild(dot);
    }

    container.appendChild(containerGlitter);
}

