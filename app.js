// Html Elements
const cellDivs = document.querySelectorAll(".game-cell");
const resetDiv = document.querySelector(".reset");

console.log(cellDivs);
console.log(resetDiv);

// Game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;

// Functions
const handleWin = (letter) => {
  gameIsLive = false;
  if (letter == "x") {
    document.getElementById("win-status").innerHTML = `<p>X has won!</p>`;
  }
  if (letter == "o") {
    document.getElementById("win-status").innerHTML = `<p>O has won!</p>`;
  }
};

const checkGameStatus = () => {
  const cell1 = cellDivs[0].classList[2];
  const cell2 = cellDivs[1].classList[2];
  const cell3 = cellDivs[2].classList[2];
  const cell4 = cellDivs[3].classList[2];
  const cell5 = cellDivs[4].classList[2];
  const cell6 = cellDivs[5].classList[2];
  const cell7 = cellDivs[6].classList[2];
  const cell8 = cellDivs[7].classList[2];
  const cell9 = cellDivs[8].classList[2];

  // Check Winnner

  // Horizointal
  if (cell1 && cell1 == cell2 && cell1 == cell3) {
    handleWin(cell1);
    cellDivs[0].classList.add("won");
    cellDivs[1].classList.add("won");
    cellDivs[2].classList.add("won");
  } else if (cell4 && cell4 == cell5 && cell4 == cell6) {
    handleWin(cell4);
    cellDivs[3].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[5].classList.add("won");
  } else if (cell7 && cell7 == cell8 && cell7 == cell9) {
    handleWin(cell7);
    cellDivs[6].classList.add("won");
    cellDivs[7].classList.add("won");
    cellDivs[8].classList.add("won");
  }

  // Vertical
  else if (cell1 && cell1 == cell4 && cell1 == cell7) {
    handleWin(cell1);
    cellDivs[0].classList.add("won");
    cellDivs[3].classList.add("won");
    cellDivs[6].classList.add("won");
  } else if (cell2 && cell2 == cell5 && cell2 == cell8) {
    handleWin(cell2);
    cellDivs[1].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[7].classList.add("won");
  } else if (cell3 && cell3 == cell6 && cell3 == cell9) {
    handleWin(cell3);
    cellDivs[2].classList.add("won");
    cellDivs[5].classList.add("won");
    cellDivs[8].classList.add("won");
  }

  // Diagonal
  else if (cell1 && cell1 == cell5 && cell1 == cell9) {
    handleWin(cell1);
    cellDivs[0].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[8].classList.add("won");
  } else if (cell3 && cell3 == cell5 && cell3 == cell7) {
    handleWin(cell3);
    cellDivs[2].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[6].classList.add("won");
  }

  // Game is Tied
  else if (
    cell1 &&
    cell2 &&
    cell3 &&
    cell4 &&
    cell5 &&
    cell6 &&
    cell7 &&
    cell8 &&
    cell9
  ) {
    gameIsLive = false;
    document.getElementById("win-status").innerHTML = `<p>Game is Tied!</p>`;
  }
};

// Event Handlers
const handleReset = () => {
  xIsNext = true;
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove("x");
    cellDiv.classList.remove("o");
    cellDiv.classList.remove("won");
  }
  gameIsLive = true;
  document.getElementById("win-status").innerHTML = `<p></p>`;
};

const handleCellClick = (e) => {
  const classList = e.target.classList;
  const location = classList[1];

  if (!gameIsLive || classList[2] == "x" || classList[2] == "o") {
    return;
  }

  if (xIsNext) {
    classList.add("x");
    checkGameStatus();

    xIsNext = !xIsNext;
  } else {
    classList.add("o");
    checkGameStatus();
    xIsNext = !xIsNext;
  }
};

// Event Listeneners
resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
