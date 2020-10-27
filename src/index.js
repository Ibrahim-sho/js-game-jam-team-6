import { drawSnake, updateSnake } from './snake';
import { drawFood } from './food';

console.log("add food");

let score = 0;
let gameOver = false;

let gameboard = document.getElementById("game-board");



function main() {
<<<<<<< HEAD
	gameboard.innerHTML = "";
	updateSnake();	
    drawFood(gameboard);
    drawSnake(gameboard);
}

let gameOn = setInterval(main, 1500);


=======
   drawFood(gameboard);
   drawSnake(gameboard);
}

>>>>>>> 20f726a1a6487e74c4c99737e9b00a43a7849082
