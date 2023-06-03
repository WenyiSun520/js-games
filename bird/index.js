import { updateBird, setUpBird, getBirdRect } from "./bird.js";
import { updatePipe, setUpPipeHole, getScore, getPipeReact } from "./pipe.js";
//press any key to start the game, and the event only happen at the very first time
document.addEventListener("keypress", gameStart, { once: true });
const title = document.querySelector(".title");
const subtitle = document.querySelector("[data-subtitle]");
let lastTimeUpdated;
//initilization
function gameStart() {
  title.classList.add("hide"); // hide text
  setUpBird();
  setUpPipeHole();
  lastTimeUpdated = null;
  window.requestAnimationFrame(gameLoop);
}

//shutdown
function gameEnd() {
  setTimeout(() => {
    //wait 500ms to prevent user hit space key too much
    title.classList.remove("hide");
    subtitle.classList.remove("hide");
    subtitle.innerHTML = getScore() + " Pipes";
    document.addEventListener("keypress", gameStart, { once: true }); //enable restarting game
  }, 500);
}

//game loop
function gameLoop(time) {
  if (lastTimeUpdated == null) {
    //skip the first time render
    lastTimeUpdated = time;
    window.requestAnimationFrame(gameLoop);
    return;
  }

  let delta = time - lastTimeUpdated; // time period between 2 renders
  // console.log("dealta: "+delta)
  updateBird(delta);
  updatePipe(delta);
  if (checkLose()) return gameEnd();
  lastTimeUpdated = time;
  window.requestAnimationFrame(gameLoop);
}

function checkLose() {
  const birdRect = getBirdRect();
  const pipeRect = getPipeReact();

  const isCollision = pipeRect.some((p) => checkCollision(birdRect, p));

  const outOfWindow = birdRect.top < 0 || birdRect.bottom >= window.innerHeight;
  return outOfWindow || isCollision;
}

function checkCollision(birdRect, pipeRect) {
  return (
    birdRect.top < pipeRect.bottom &&
    birdRect.right > pipeRect.left &&
    birdRect.bottom > pipeRect.top &&
    birdRect.left < pipeRect.right
  );
}
