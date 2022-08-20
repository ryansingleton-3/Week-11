$(() => {
  const player1 = {
    label: "X",
    icon: "fa-x",
    array: [],
  };

  const player2 = {
    label: "O",
    icon: "fa-o",
    array: [],
  };

  let activePlayer = player1; // sets the active player to be player one initially (X's)

  const cells = $("td"); // labels all td's to be cells
  let whosTurn = $("h3");
  let gameStatus = $("h1");

  const reset = $("#reset-button");
  function resetGame() {
    document.location.reload();
  }

  reset.on("click", resetGame);

  let turnNumber = 0;

  const winningCombinations = [
    // combination of winning indexes
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  let hasWon = false;

  for (const cell of cells) {
    $(cell).on("click", () => takeTurn(activePlayer, cell));
  }

  const takeTurn = (player, cell) => {
    if (activePlayer == player1) {
      $(cell)
        .text(`${player.label}`)
        .addClass("XandO")
        .addClass("X")
        .attr("data-occupy", player.label);
      let dataPosition = cell.getAttribute("data-position");
      player.array.push(Number.parseInt(dataPosition));
      checkForWin(player);
      activePlayer = player2;
      whosTurn.text(`It is ${player2.label}'s turn`);
      turnNumber++;
      gameOver();
    } else {
      $(cell)
        .text(`${player.label}`)
        .addClass("XandO")
        .addClass("O")
        .attr("data-occupy", player.label)
        .push(player.array);
      let dataPosition = cell.getAttribute("data-position");
      player.array.push(Number.parseInt(dataPosition));
      checkForWin(player);
      activePlayer = player1;
      whosTurn.text(`It is ${player1.label}'s turn`);
      turnNumber++;
      gameOver();
    }

    if (checkForWin(player)) {
      gameStatus
        .text(`Player ${player.label} Wins!`)
        .addClass("alert")
        .addClass("alert-primary");
      whosTurn.text("");
      $(cells).addClass("gameOver");
    }
  };

  const checkForWin = (player) => {
    let playerWon = false;
    winningCombinations.forEach((combo) => {
      if (playerWon) {
        return;
      }
      playerWon = combo.every((i) => player.array.includes(i));
    });
    console.log(playerWon);
    return playerWon;
  };

  const gameOver = () => {
    if (turnNumber >= 9) {
      hasWon = false;
      gameStatus
        .text(`It's a Draw!`)
        .addClass("alert")
        .addClass("alert-primary");
      whosTurn.text("");
    }
  };
  console.log(hasWon);
});
