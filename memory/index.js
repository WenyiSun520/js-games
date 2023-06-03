const board = document.querySelector("#board");
const colors = [
  "blue",
  "green",
  "yellow",
  "red",
  "pink",
  "brown",
  "darkblue",
  "teal",
];
const pickList = [...colors, ...colors];
// console.log("pickList.lenth: " + pickList.length);
let prevCard = null;

function buildCard(color) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  // customize attribute syntax: data-* e.g: data-color, data-name, data-type...
  newCard.setAttribute("data-color", color);

  newCard.addEventListener("click", () => {
    newCard.style.backgroundColor = color;
    console.log(prevCard);

    if (prevCard === null) {
      prevCard = newCard;
    } else {
      let prevColor = prevCard.getAttribute("data-color");
      console.log("prevColor: ", prevColor);
      if (prevColor !== color) {
        setTimeout(() => {
          newCard.style.backgroundColor = "black";
          prevCard.style.backgroundColor = "black";
          prevCard = null;
        }, 500);
      } else {
        prevCard = null;
      }
    }
  });

  return newCard;
}

//pick color randomly
const pickListCopy = [...pickList];
for (let i = 0; i < pickList.length; i++) {
  let randomIndex = Math.floor(Math.random() * pickListCopy.length);
  let cardColor = pickListCopy[randomIndex];
  let newCard = buildCard(cardColor);
  pickListCopy.splice(randomIndex, 1);
  document.querySelector("#board").appendChild(newCard);
}
