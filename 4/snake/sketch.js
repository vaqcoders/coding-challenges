let game, cnv;
const keys = "";

function setup() {
  const winLength = Math.min(windowWidth, windowHeight) - 10;
  cnv = createCanvas(winLength, winLength);
  cnv.parent("canvas-container");
  game = new Game(50, 50, width, height, true);
}

function draw() {
  background(220);
  game.render();
  if (!game.gameover) {
    game.keyIn(key);
    game.step();
  }
  document.querySelector("#score").textContent = game.gameover ?
    `Died with length at ${game.snake.score}` :
    `Length currently at ${game.snake.score}`;
}

document.addEventListener("keydown", evt => key = evt.key);
