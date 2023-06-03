const HOLE_HEIGHT = 200;
const PIPE_INTERVAL = 1000; // create new piple after 1s
const PIPE_WIDTH = 100;
const PIPE_SPEED = 5;
let pipesArr = [];
let score;

export function setUpPipeHole() {
  document.documentElement.style.setProperty("--pipe-width", PIPE_WIDTH);
  document.documentElement.style.setProperty("--hole-height", HOLE_HEIGHT);
  timeSinceLastPipe = PIPE_INTERVAL;
  pipesArr.forEach((p)=> p.remove());
  score = 0;
}
export function getScore(){
    return score;
}
export function getPipeReact(){
    return pipesArr.flatMap((p)=>p.rect())
}

// add new pipes on screen when game is ongoing
let timeSinceLastPipe = 0;
export function updatePipe(delta) {
  timeSinceLastPipe += delta;
  if (timeSinceLastPipe > PIPE_INTERVAL) {
    console.log("timeSInceLastpiple is Larger than Pipe interval");
    timeSinceLastPipe -= PIPE_INTERVAL; // reset timeSinceLastPiple be 0 is not acurate as deduct piple-interval
    createPipe();
  }
  //move old pipe to the left;
  pipesArr.forEach((pipe) => {
    if(pipe.left + PIPE_WIDTH < 0){
        score++;
        return pipe.remove();
    }
    pipe.left = pipe.left - PIPE_SPEED;
  });
}



function createPipe() {
  console.log("im createPipe");
  let newPipe = document.createElement("div");
  newPipe.classList.add("pipe");

  let topPipe = document.createElement("div");
  topPipe.classList.add("pipe-top");

  let bottomPipe = document.createElement("div");
  bottomPipe.classList.add("pipe-bottom");

  newPipe.appendChild(topPipe);
  newPipe.appendChild(bottomPipe);

  newPipe.style.setProperty(
    "--hole-top",
    randomHoleHeight(HOLE_HEIGHT * 1.5, window.innerHeight - HOLE_HEIGHT * 0.5)
  ); // prevent the hole directly connect with screen border

  const pipe = {
    get left() {
      return parseFloat(
        getComputedStyle(newPipe).getPropertyValue("--pipe-left")
      );
    },
    set left(value) {
      newPipe.style.setProperty("--pipe-left", value);
    },
    remove(){
        pipesArr = pipesArr.filter((p)=>p !== pipe)
        newPipe.remove();
    },
    rect(){
        return [
          topPipe.getBoundingClientRect(),
          bottomPipe.getBoundingClientRect(),
        ];
    }
  };
  pipe.left = window.innerWidth;
  document.body.appendChild(newPipe);
  pipesArr.push(pipe);
}

function randomHoleHeight(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
