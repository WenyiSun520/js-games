export const SNAKE_SPEED = 5; // the snake will move 2 times per seconds
const snakeBody = [{ x: 11, y: 11 }]; // the start point of snakebody
import { getInputDirection } from "./input.js";

export function update() {
  //except to the head segment, segment shift their position by the previous segment
  // since the last segment will eliminate, we care the second last segment
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  //move the head segment:
  const inputDirection = getInputDirection();
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;

  // when moving y: +1 moven down; -1 moves up;

  let snakeBodyExceptHead = snakeBody.slice(1)
  let hitSelf = snakeBodyExceptHead.some(
    (segment) => segment.x === snakeBody[0].x && segment.y === snakeBody[0].y
  );
  // if the snake hit the wall, game over!
  if (
    snakeBody[0].x === 22 ||
    snakeBody[0].x === 0 ||
    snakeBody[0].y === 0 ||
    snakeBody[0].y === 22 ||
    hitSelf === true
  ) {
    alert("Game Over!");
    location.reload();
  }
}

export function render(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function bodyExpand(amount) {
  let lastBodySegment = snakeBody[snakeBody.length - 1];
  for (let i = amount; i > 0; i--)
    snakeBody.push({
      x: lastBodySegment.x,
      y: lastBodySegment.y,
    });
}

export function onSnake(position) {
  let snakeHead = snakeBody[0];
  if (snakeHead.x === position.x && snakeHead.y === position.y) {
    // console.log(true)
    return true;
  } else {
    return false;
  }
}
