// Coordinates X & Y on the grid 
let snakeBody = [ {x: 10, y: 11}]



// Drawing the snack by creating new div inside the grid 
export function drawSnake(gameboard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div")
        snakeElement.classList.add("snake");
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        gameboard.appendChild(snakeElement)
        
    })
    console.log(snakeBody)
};


let inputDirection = {x: 0, y: 0};
// 
document.addEventListener("keydown", (m) =>{
    switch(m.key){
        case 'ArrowUp':
            inputDirection = {x: 0, y: -1}
            break;
        case 'ArrowDown':
            inputDirection = {x: 0, y: 1}
            break;
        case 'ArrowLeft':
            inputDirection = {x: -1, y: 0}
            break;
        case 'ArrowRight':
            inputDirection = {x: 1, y: 0}
            break;
    }
})

export function updateSnake(){
    for (let i = snakeBody.length - 2; i >=0; i--){
        snakeBody[i + 1] = { ...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}


export function getInput(){
    return inputDirection
}





// let inputDirection = {x: 0, y: 0};
// let lastInputDirection = {x: 0, y: 0};
// let snake = [
// 	{ x: 10, y: 18},
// 	{ x: 11, y: 18},
// 	{ x: 12, y: 18}
// ];

// export function draw(gameboard) {
// 	snake.forEach(segment => {
// 		let snakeElement = document.createElement("div");

// 		snakeElement.style.gridRowStart = segment.y;
// 		snakeElement.style.gridColumnStart = segment.x;
// 		snakeElement.classList.add("snake");
// 		gameboard.appendChild(snakeElement);
// 	});
// }
