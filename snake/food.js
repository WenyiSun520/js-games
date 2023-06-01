import { onSnake, bodyExpand } from "./snake.js";
let food = {
  x: Math.floor(Math.random() * 21) + 1, // 21: the grid size
  y: Math.floor(Math.random() * 21) + 1,
};
const EXPANSTION_RATE = 1; // the snake will growth by 1 when it eat one food
let currentSore = 0;

export function update() {
  if (onSnake(food)) {
    bodyExpand(EXPANSTION_RATE);
    updateScore();
    food = {
      x: Math.floor(Math.random() * 21) + 1, // 21: the grid size
      y: Math.floor(Math.random() * 21) + 1,
    };
  }
}

export function render(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function updateScore() {
  currentSore += EXPANSTION_RATE;
  document.querySelector(".number").innerHTML = currentSore;
}

export function updateHighestScore() {
  let highestScore = localStorage.getItem("highestScore");
  if (currentSore >= highestScore) {
    localStorage.setItem("highestScore", currentSore);
    document.querySelector(".number-highest").innerHTML = currentSore;
  }
  document.querySelector(".number-highest").innerHTML = highestScore;
  console.log("highest score: ", highestScore);
}
