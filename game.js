import './game.css'

$(() => {
  const player1 = {
    label: 'X',
    icon: 'fa-x',
  }
  const player2 = {
    label: 'O',
    icon: 'fa-o',
  }

  let playerActive = player1

  const cells = $('td')

  // array of winning conditions.
  const winningCombinations = [
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
  ]

  const resetGame = () => {
    window.location.reload()
  }

  const checkForWin = player => {
    let hasWon = false
    const playerCells = $(`[data-occupy="${player.label}"]`)
    const positions = $.map(playerCells, function (val, i) {
      return +$(val).attr('data-position')
    })

    for (const combo of winningCombinations) {
      const check = _.intersection(combo, positions)
      if (check.length === 3) {
        hasWon = true
      }
    }

    return hasWon
  }

  const takeTurn = (player, cell) => {
    $(cell).html(`<i class="fas ${player.icon}"></i>`).attr('data-occupy', player.label)

    if (checkForWin(player)) {
      setTimeout(() => {
        $('#tic-tac-toe').addClass('pointer-events-none')
        $('#game-status').text(`Player ${player.label} Wins!`)
      }, 1)
    }

    playerActive = player.label === 'X' ? player2 : player1
  }

  for (const cell of cells) {
    $(cell).on('click', () => takeTurn(playerActive, cell))
  }

  $('#reset-button').on('click', resetGame)
})
