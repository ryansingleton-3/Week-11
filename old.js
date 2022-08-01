$( document ).ready( () => {

    // let p = $('p')
    // console.log(p.css('background-color'));

    // p.hide( 2500 );
    // p.fadeOut( 2500 );
    // p.show( 2500 );
    // p.slideUp( 2500 );
    // p.on("click", () => {
    //     p.toggle();
    // })

    // jquery 

    
    const player_X = "X"
    const player_O = "O"
    const cell = $('td')

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

    // sets the starting player as X 
    let currentPlayer = player_X



    const winningCombo1 = [0, 1, 2]
    const winningCombo2 = [3, 4, 5]
    const winningCombo3 = [6, 7, 8]
    const winningCombo4 = [0, 3, 6]
    const winningCombo5 = [1, 4, 7]
    const winningCombo6 = [2, 5, 8]
    const winningCombo7 = [0, 4, 8]
    const winningCombo8 = [2, 4, 6]
    
    
    // console.log(cell)
    const gameboardArray = []
    // let turn = true;
    let turnNumber = 1;
    for ( let i = 0; i < 9; i++ ) {             // this iterates through each cell
        let td = $(`#${i+1}`);                  // this creates a variable for the index of each cell. 
        td.on('click', () => {                  // this handles the event of a click on each cell and begins our function
            if (currentPlayer === player_X) {   // player x's turn 
                td.text('X').addClass('XandO'); // adds the X in the cell and styles it with the class being added
                currentPlayer = player_O        // switches turn to player Y
                turnCounter();                   // calls on turnCounter function, which adds 1 to the turn each time. This also checks for a win.
            } else {
                td.text('O').addClass('XandO');  //adds the X in the cell and styles it with the class being added
                currentPlayer = player_X         // switches turn to Player X
                turnCounter();                  // calls on turnCounter function, which adds 1 to the turn each time. This also checks for a win.
            }
            
        })
        gameboardArray.push(td);                // this pushes the index number of the selected cell to the gameboard array. This array will be used to check for winning combinations later.
    }

    function turnCounter() {
        if ( turnNumber < 5 ) {                 // it is possible to win at 5+ turns, you cant win with 4 or less
            turnNumber++;                       // iterate to the next turn
        } else {
            if ( checkForWin(turnNumber) ) {
                // do something to show who won
            } 
            turnNumber++;
        }
    }



    const matchArray = []
    function checkForWin(x) {
        console.log('Turn Number greater than 5');
        if ( x > 9 ) {
            return false; //
        } else {
            for (let i = 0; i < gameboardArray.length; i++) {
                let match = false
                for (let j = 0; j < winningCombo1.length; j++)
                    if (gameboardArray[i].every(winningCombo1[j]) == winningCombo1) {
                        match = true
                        break;
                    }

                        checkForWin = true;
                        
                    
                    }
                    if (match) {
                        matchArray.push(winningCombo1[j])
                        console.log(matchArray)
                    }
                }
            }
            console.log(checkForWin) 
    



    // function checkForWin(x) {
    //     console.log('Turn Number greater than 5');
    //     if ( x > 9 ) {
    //         return false; //
    //     } else {
    //         for (let i = 0; i < gameboardArray.length; i++) {
    //             // console.log(gameboardArray[i])
    //             // console.log(winningCombinations[i])
    //             if (gameboardArray[winningCombinations[i][0]] == currentPlayer &&
    //                 gameboardArray[winningCombinations[i][1]] == currentPlayer &&
    //                 gameboardArray[winningCombinations[i][2]] == currentPlayer) {
    //                     checkForWin = true;
                        
                    
    //                 }
    //             }
    //         }
    //         console.log(checkForWin) 
    //     }




                
    // function declareWinner (matchOneFound) {
    //     if (matchOneFound) {
    //         console.log("you win!")
    //     } else {
    //         console.log("something is wrong")
    //     }
    // }

            
            // do something with the array we created earlier 
            // function checkCombos (winningCombo1, array) {
            //     for (let i = 0; i < array.length; i++) {
            //         if (cell[i].innerHTML.indexOf("X") !== -1) {
            //             let matchOneFound = winningCombo1.every(e => array.indexOf(e) != -1) ? true : false
            //             console.log(matchOneFound)
            //             console.log("X Wins")
            //         } else if ((cell[i].innerHTML.indexOf("O") !== -1)){
            //             console.log("0 Wins!")
            //         }
            //     }
                
            //     //     if (winningCombo1.every(e => array.includes(e))) {
            //     //         matchOneFound = true;
            //     //         console.log(matchOneFound);

            //     // } else {
            //     //     console.log('something is wrong')
            //     }
                
        // };

   
    // match1 = (array) => {
    //     function matchOneCombo (array) {
    //         winningCombo1.every(element) 
    //         return array.includes(element);
    //     }
    //     if (match1 == true) {
    //         console.log("You win!")
    //     } else {
    //         console.log("you dont win")
    //     }
    // } 
        
        
    // function compareValues(array, winningCombo1) {
    // for (let i = 0; i < winningCombinations.length; i++) {
    //     let xs = array.cell[i].innerHTML.indexOf("X") !== -1;
    //     if (winningCombo1.every(e => array.indexOf(e) !== -1)){
    //         console.log("hello")
    //     } else {
    //         console.log(xs)
    //     }
            
    // }
        // if (match1 === true) {
        //     for (let i = 0; i < array.length; i++) {
        //             const match1 = winningCombo1.every(element => {
        //                 return array.includes(element);
        //             });
        //     }
        // } else if (match2 === true) {
        //     for (let i = 0; i < array.length; i++) {
        //         const match2 = winningCombo2.every(element => {
        //             return array.includes(element);
        //         });
        //     }
        // } else {
        //     console.log("no matches")
        
        // for (let i = 0; i < array.length; i++) {
        //     const match1 = winningCombo1.every(element => {
        //         return array.indexOf(element) != -1;
        //     });

            
            
        //     // if (match) {
        //     //     console.log('You Win!')
        //     // }

        // }
        // if (match1 == true) {
        //     console.log('You win!')
        // }
        // console.log(match1);
        // console.log("you win!")
    // }

    let reset = $('#reset-button');
    function resetGame(reset) {
        document.location.reload()
    };
    
    $(reset).click(resetGame);
    
    for (i=0;i<cell.length; i++) {
        console.log(i)
    };
    

        // let square = $( evt.target );
        // square.add( 'p' ).text('X').addClass('XandO');

        // square.text('X').addClass('XandO').slideUp( 2500 )
        
        
        


})