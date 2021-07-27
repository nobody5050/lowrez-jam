var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

const debounce = (func) => {
  let timer;
  return (event) => {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(func, 100, event)
  }
};

window.addEventListener('resize', debounce(() => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}))

function draw() {
  ctx.fillRect(100, 100, 100, 100)
}