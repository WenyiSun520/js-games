let inputDirection = { x: 0, y: 0 };
let lastInputDeirection = { x: 0, y: 0 }; // prevent snake move 180 degree

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
    case "W":
    case "w":
      if (lastInputDeirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
    case "S":
    case "s":
      if (lastInputDeirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
    case "A":
    case "a":
      if (lastInputDeirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
    case "D":
    case "d":
      if (lastInputDeirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDeirection = inputDirection;
  return inputDirection;
}
