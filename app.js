


$(() => {

    const player1 = {
        label: "X",
        icon: "fa-x",
        array: []
    }

    const player2 = {
        label: "O",
        icon: "fa-o",
        array: []
    }

    let activePlayer = player1 // sets the active player to be player one initially (X's)

    const cells = $('td') // labels all td's to be cells
    let whosTurn = $('h3')
    let gameStatus = $('h1')

    let reset = $('#reset-button');
        function resetGame(reset) {
            document.location.reload()
    };

    reset.on('click', resetGame)

    let turnNumber = 0

    const winningCombinations = [ // combination of winning indexes
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

    

    const takeTurn = (player, cell) => {
        if (activePlayer == player1) {
            $(cell).text(`${player.label}`).addClass('XandO').addClass('X').attr('data-occupy', player.label).push(player.array)
            player.array.push(cell)
            activePlayer = player2
            whosTurn.text(`It is ${player2.label}'s turn`)
            turnNumber ++
            console.log(player.array)
        } else {
            $(cell).text(`${player.label}`).addClass('XandO').addClass('O').attr('data-occupy', player.label).push(player.array)
            player.array.push(cell)
            activePlayer = player1
            whosTurn.text(`It is ${player1.label}'s turn`)
            turnNumber ++
            console.log(player.array)

        }

        if (checkForWin(player)) {
            gameStatus.text(`Player ${player.label} Wins!`)
        }

        
    }

    const checkForWin = player => {
        let hasWon = false
        if (player.array[i] == winningCombinations[i]) {
            hasWon = true;
            gameStatus.text(`${player} wins!`)
        }        
        // add something here
        if (turnNumber >= 9) {
            hasWon = false
            gameStatus.text(`It's a Draw!`).addClass('alert').addClass('alert-primary')
            whosTurn.text('')
        }



        for (const combo of winningCombinations) {
            let compare1 = _.intersection(combo, player1.array)
                if (compare1.length === 3) {
                    hasWon = true
                }
            let compare2 = _.intersection(combo, player2.array)
                if (compare2.length === 3) {
                    hasWon = true
                }

        return hasWon;
        
        }
        console.log(hasWon)
    }


    for (const cell of cells) {
        $(cell).on('click', () => takeTurn(activePlayer, cell))
    }



})