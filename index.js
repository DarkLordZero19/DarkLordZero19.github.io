const game = document.querySelector('.game')
const h1 = document.querySelector('h1')
let point = 0;
h1.textContent=point;
// 0 - 1407 : 
let h = 750;
let w = game.offsetWidth;
setInterval(()=>{
    let rTop = Math.floor(80+ Math.random() * (h-80))
    let rLeft = Math.floor(80+ Math.random() * (w-80))
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.position="absolute";
    circle.style.top=`${rTop}px`;
    circle.style.left=`${rLeft}px`;
    game.appendChild(circle);
    circle.addEventListener('click',()=>{
        circle.remove();
        point++;
        h1.textContent=point;
        if (point>=20) win();

    });

},500);

function win(){
    game.remove();
    h1.textContent="С ДР ЕГОРКА!";
    h1.style.fontSize="100px";
    h1.style.height="100vh";
}

