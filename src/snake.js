import { getInputDirection } from './input';

// Coordinates X & Y on the grid 
let snakeBody = [
    {x: 10, y: 11},
    {x: 15, y: 15},
    {x: 20, y: 20}
];

// Drawing the snack by creating new div inside the grid 
export function drawSnake(gameboard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div");

        snakeElement.classList.add("snake");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        
        gameboard.appendChild(snakeElement);
    });

    // console.log(snakeBody);
};

export function updateSnake() {
    let inputDirection = getInputDirection();

    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = { ...snakeBody[i]};
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}