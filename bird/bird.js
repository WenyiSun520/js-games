const bird = document.querySelector("[data-bird]");
const BIRD_SPEED = 3;
const JUMP_DURATION = 125; // how long the jump persist: 125ms
let timeSinceLastJump = Number.POSITIVE_INFINITY;

export function setUpBird() {
  setTop(window.innerHeight / 2);
  document.removeEventListener("keydown", (e) => handleJump(e));
  document.addEventListener("keydown", (e) => handleJump(e));
}
export function updateBird(delta) {
  if (timeSinceLastJump < JUMP_DURATION) {
    setTop(getTop() - BIRD_SPEED);
  } else {
    // else,  if user doesn't react during jump period, bird goes down
    //by default, bird is constanly go downwards
    setTop(getTop() + BIRD_SPEED);
  }
  timeSinceLastJump += delta;
}
export function getBirdRect() {
  return bird.getBoundingClientRect();
}
// setTop && getTop: get the top position of the bird
function setTop(topValue) {
  bird.style.setProperty("--bird-top", topValue);
}

function getTop() {
  // css value can only be get by getComputedStyle
  return parseFloat(getComputedStyle(bird).getPropertyValue("--bird-top"));
}

function handleJump(e) {
  if (e.key !== " ") return;
  timeSinceLastJump = 0;
}
