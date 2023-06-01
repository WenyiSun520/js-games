import {
  SNAKE_SPEED,
  update as updateSnake,
  render as renderSnake,
} from "./snake.js";
import { update as updateFood, render as renderFood } from "./food.js";
let lastTimeRender = 0;
const gameBoard = document.querySelector("#game-board");

let isPause = false;
function handlePause() {
  isPause = !isPause;
  if (isPause === false) {
    window.requestAnimationFrame(main);
  }
}
function handleRestart() {
  location.reload();
}
document.querySelector("#pause").addEventListener("click", handlePause);
document.querySelector("#replay").addEventListener("click", handleRestart)

//Step One: define GameLoop
function main(currentTime) {
  if (isPause === false) {
    window.requestAnimationFrame(main);
  }
  const secondsSinceLastRender = (currentTime - lastTimeRender) / 1000; // translate milleseconds to seconds
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastTimeRender = currentTime;
  
  update();
  render();
}

window.requestAnimationFrame(main); // the initial run

//Step Two: Game Logic
function update() {
  updateSnake();
  updateFood();
}

function render() {
  gameBoard.innerHTML = "";
  renderSnake(gameBoard);
  renderFood(gameBoard);
}




