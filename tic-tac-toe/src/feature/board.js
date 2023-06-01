import { useState } from "react";
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true); // set 'X' to first play as default
  const [value, setValue] = useState(Array(9).fill(null)); //value can be:'X', 'O', null
  let status;
  const handleClick = (i) => {
    if (value[i] || calculateWinner(value)) return; // break the function if the square already has a value

    const copy = value.slice();
    if (xIsNext) {
      copy[i] = "X";
    } else {
      copy[i] = "O";
    }
    setValue(copy);
    setXIsNext(!xIsNext);
  };

  console.log(calculateWinner(value));
  if (calculateWinner(value)) {
    status = `Winner is:  ${calculateWinner(value)}`; // break the function if the game has a winner
    console.log(status);
  } else {
    status = `Next Player:${xIsNext ? "X" : "O"} `;
  }

  return (
    <>
      <div className="square-row">
        <Square id="1" value={value[0]} handleClick={() => handleClick(0)} />
        <Square id="2" value={value[1]} handleClick={() => handleClick(1)} />
        <Square id="3" value={value[2]} handleClick={() => handleClick(2)} />
      </div>

      <div className="square-row">
        <Square id="4" value={value[3]} handleClick={() => handleClick(3)} />
        <Square id="5" value={value[4]} handleClick={() => handleClick(4)} />
        <Square id="6" value={value[5]} handleClick={() => handleClick(5)} />
      </div>

      <div className="square-row">
        <Square id="7" value={value[6]} handleClick={() => handleClick(6)} />
        <Square id="8" value={value[7]} handleClick={() => handleClick(7)} />
        <Square id="9" value={value[8]} handleClick={() => handleClick(8)} />
      </div>
      <h2 className="status">{status}</h2>
      <button className="btn" onClick={() => window.location.reload()}>
        Restart
      </button>
    </>
  );
}

function Square({ id, value, handleClick }) {
  return (
    <button id={id} className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

//helper function: calculate who is the winner
function calculateWinner(value) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (
      value[a] !== null &&
      value[a] === value[b] &&
      value[a] === value[c] &&
      value[c] === value[b]
    ) {
      return value[a];
    }
  }
  return null;
}
