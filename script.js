
const header = document.querySelector('header')
const body = document.querySelector('body')
const sim = document.getElementById('yes');
const nao = document.getElementById('no');
const marcar = document.getElementById('schedule');
const calendario = document.getElementById('calendario');

const headerWidth = header.offsetWidth;
const headerHeight = header.offsetHeight;
const bodyHeight = body.offsetHeight;
const bodyWidth = body.offsetWidth;
nao.style.position = 'relative';
calendario

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
        newY = getRandomInt(0-headerHeight, bodyHeight);
        newX = getRandomInt(0-headerWidth, headerWidth);        
    } while (checkCollision(newX, newY, nao, sim) || checkCollision(newX, newY, nao, marcar) 
        || checkCollision(newX, newY, nao, calendario))
    nao.style.top = newY + 'px';
    nao.style.left = newX + 'px';
}

sim.addEventListener('click', () =>{
    nao.style.display = "none";
});