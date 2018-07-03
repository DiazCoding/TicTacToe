// const player1 = 'X'
// const player2 = 'O'
//     const gameBoard = [
//         ['','',''],
//         ['','',''],
//         ['','',''] ]
//     /* Turn renderBoard into a function to dynamically create the board */
// const renderBoard = (size) => {
//       //create a table dynamically using javascript using a for loop

//       let table = '<table>'
      

// }



const createBoard = function renderBoard(){
    //References HTML for the body 
    var body = document.getElementsByTagName("body")[0];
    //creates the table and table body
    let table = document.createElement("table")
    let tableBody = document.createElement("tableBody")
    //create cells
    for (let i = 0; i < 3; i++) {
        let row = document.createElement("tr")

        for(let j = 0; j < 3; j++){
            let cell = document.createElement("td")
            let cellText = document.createTextNode("cellBlock")
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        //add row to the table body
        tableBody.appendChild(row);
    }
    //puts the tbody into the table
        table.appendChild(tableBody);
    //appends table into the body tag
    body.appendChild(table);
    //sets border attribute of table to ()
    table.setAttribute("border", "4")
}

    // function isGameOver() {
    //     //check horizontal
    //     for (let x = 0; x < 3; x++) {
    //         if(gameBoard[0][y] !== '' && gameBoard[0][y] === gameBoard[1][y] && gameBoard[0][y] === gameBoard[2][y]){
    //             return grid[0][0]
    //         }
            
    //     }
    //     //check vertical
    //     for (let y = 0; y < 3; y++){
    //         if(gameBoard[x][0] !== '' && gameBoard[x][0] === gameBoard[x][1] && gameBoard[x][0] === gameBoard[x][2]){
    //             return grid[x][0]
    //         }
    //     }
        
    //     //check diagonal top left bottom right
    //         if(gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][2]){
    //             return grid[0][0]
    //         }
    //     //check diagonal bottom left top right
    //         if(gameBoard[2][0] !== '' && gameBoard[2][0] === gameBoard[1][1] && gameBoard[2][0] === gameBoard[0][2]){
    //             return grid[2][0]
    //         }
    // }
    // $('letterBox').click(function(){
    //     $this = $(this);
    //     $(this).html(PLAYER_TOKEN);
    //     const x = $(this).data('x');
    //     const y = $(this).data('y');
    //     console.log(gameBoard)
    // })

    // if (isGameOver() ){
            
    // } else{

    // }