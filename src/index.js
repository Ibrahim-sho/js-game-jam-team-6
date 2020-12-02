import { drawSnake, updateSnake } from './snake';
import { drawFood } from './food';

console.log("add food");

let score = 0;
let gameOver = false;

let gameboard = document.getElementById("game-board");



function main() {
    
	gameboard.innerHTML = "";
	updateSnake();	
    drawFood(gameboard);
    drawSnake(gameboard);
    console.log("hello")
}

let gameOn = setInterval(main, 100);






