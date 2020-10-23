console.log("in game.js");


// Coordinates X & Y on the grid 

const snackBody = [{x: 11, y: 11,}]


// Drawing the snack by creating new div inside the grid 

// didn't finish yet

function draw(game-board){
    snackBody.array.forEach(segment => {
        const snackElement = document.createElement("div")
        snackElement.classList.add("snack");
        snackElement.style.gridRowStart = segment.y
        snackElement.style.gridColumnStart = segment.x
        game-board.appendChild(snackElement)
        console.log(snackBody)

    })
}