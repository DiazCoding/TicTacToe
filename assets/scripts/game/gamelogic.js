'use strict'
//////////////////////Variables//////////////////////
let letter = "X"
let turn = 0

//////////////////////BoardCreation//////////////////////

const createBoard = function () {
    //References HTML for the body 
    let body = document.getElementsByTagName("body")[0];
    //creates the table and table body
    let table = document.createElement("table")
    let tableBody = document.createElement("tableBody")
    //create cells
    let innerLoopCounter = 0 
    const multiply = 3
    for (let i = 0; i < 3; i++) {
        let row = document.createElement("tr")
        row.setAttribute('data-index', i)
        for(let j = (innerLoopCounter * multiply ) ; j < multiply * (innerLoopCounter + 1) ; j++){
            let cell = document.createElement("td")
            let cellText = document.createTextNode(".")
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell.setAttribute('data-index', j)
        }
        innerLoopCounter++

        //add row to the table body
        tableBody.appendChild(row);

    }

    let board = document.getElementById("board")
    //puts the tbody into the table
        table.appendChild(tableBody);
    //appends table into the body tag
    body.appendChild(table);
    board.appendChild(table);
    //sets border attribute of table to ()
    table.setAttribute("border", "1")
    //Add click handler to the cells
    
}
  const  createClasses = function(){
    $( "tr" ).addClass( "row" );
    $( "td" ).addClass( "cell" );
  }

  const clickHandlers = function(){
   let cells = $(".cell")
   cells.on("click", () => {
       placeLetter
    })
    
}
//////////////////////GameLogic//////////////////////
/*callback will run the following: 
placeLetter(Jquery)
winCons(for,if)
letterSwitcher
*/
const placeLetter = function(){
    (event) => {
        let temp = event.target
         temp.innerHTML = letter
}

module.exports = {
    createBoard , 
    createClasses , 
    clickHandlers
}