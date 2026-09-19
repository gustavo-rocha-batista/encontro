
const header = document.querySelector('header')
const body = document.querySelector('body')
const sim = document.getElementById('yes');
const nao = document.getElementById('no');
const calendly = document.querySelector('.calendly-inline-widget');

const headerHeight = header.offsetHeight;
const bodyHeight = body.offsetHeight;
const bodyWidth = body.offsetWidth;

nao.style.position = 'relative';
calendly.style.display = 'none';


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function checkCollision(x, y, element, other) {
    return x < other.offsetLeft + other.offsetWidth
        && x + element.offsetWidth > other.offsetLeft
        && y < other.offsetTop + other.offsetHeight
        && y + element.offsetHeight > other.offsetTop;
}

function changePos() {
    let newX, newY;
    do {
        newY = getRandomInt(0 - (headerHeight / 2), bodyHeight - headerHeight - nao.offsetHeight - 190);
        newX = getRandomInt(0 - (bodyWidth / 2) + nao.offsetWidth, bodyWidth / 2 - nao.offsetWidth);
    } while (checkCollision(newX, newY, nao, sim));
    nao.style.top = newY + 'px';
    nao.style.left = newX + 'px';
}

sim.addEventListener('click', () => {
    nao.style.display = "none";
    sim.style.display = "none";
    calendly.style.display = "block";
});

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    nao.addEventListener('click', () => {
        changePos();
    });
} else {
    nao.addEventListener('mouseover', () => {
        changePos();
    });
}