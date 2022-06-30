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

    const cell = $('td')
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    
    console.log(cell)
    let array = []
    let turn = true;
    let turnNumber = 1;
    for ( let i = 0; i < 9; i++ ) {
        let td = $(`#${i+1}`);
        td.on('click', () => {
            if (turn) {
                td.text('X').addClass('XandO');
                turn = false;
                turnCounter();
            } else {
                td.text('O').addClass('XandO');
                turn = true;
                turnCounter();
            }
            
        });
        array.push(td);
    }

    function turnCounter() {
        if ( turnNumber < 5 ) {
            turnNumber++;
        } else {
            if ( checkForWin(turnNumber) ) {
                // do something to show who won
            }
            turnNumber++;
        }
    }

    function checkForWin(x) {
        console.log('Turn Number greater than 5');
        if ( x > 9 ) {
            return false; //
        } else {
            // do something with the array we created earlier 
        }
    }

    let reset = $('#reset-button');
    console.log(reset);
    function resetGame(reset) {
        document.location.reload()
    };
    
    $(reset).click(resetGame);
    
    
    

        // let square = $( evt.target );
        // square.add( 'p' ).text('X').addClass('XandO');

        // square.text('X').addClass('XandO').slideUp( 2500 )
        
        
        


})