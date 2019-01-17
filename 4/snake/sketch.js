let game, cnv;
let averageScore = 0;
let highestScore = 0;
let gamesHappened = 0;
const keys = "";

function setup() {
  const winLength = Math.min(windowWidth, windowHeight) - 10;
  cnv = createCanvas(winLength, winLength);
  cnv.parent("canvas-container");
  game = new Game(50, 50, width, height, true);
}

function draw() {
  game.render();
  game.keyIn(key);
  game.step();
  if (game.gameover && document.querySelector("#autoplay").checked)
    restartGame();
  document.querySelector("#score").textContent = `Length currently at ${game.snake.score}`;
}

// Helpers
const handleAverageScore = () => {
  gamesHappened++;
  const score = game.snake.score;
  if (gamesHappened > 1)
    averageScore = Math.round(((averageScore * (gamesHappened - 1)) + score) / gamesHappened);
  else
    averageScore = score;
  if (score > highestScore) highestScore = score;
  const msg = `Previous Score: ${score}<br>Highest Score: ${highestScore}<br>Average Score: ${averageScore}<br>Games Played: ${gamesHappened}`;
  document.querySelector("#average-score").innerHTML = msg;
};

const restartGame = () => {
  handleAverageScore();
  const aiOn = document.querySelector("#aiplay").checked;
  game = new Game(50, 50, width, height, aiOn);
};

// Event Listeners
document.addEventListener("keydown", evt => key = evt.key);
