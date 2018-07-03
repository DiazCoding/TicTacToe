'use strict'

//////////////////////Board Creation//////////////////////////

const createBoard = function () {
    //References HTML for the body 
    let body = document.getElementsByTagName("body")[0];
    //creates the table and table body
    let table = document.createElement("table")
    let tableBody = document.createElement("tableBody")
    //create cells
    for (let i = 0; i < 3; i++) {
        let row = document.createElement("tr")

        for(let j = 0; j < 3; j++){
            let cell = document.createElement("td")
            let cellText = document.createTextNode("cell")
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
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
}

///////////////////GAME LOGIC////////////////////



module.exports = {
    createBoard
}