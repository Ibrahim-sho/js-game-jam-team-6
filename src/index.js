import { draw as drawSnake } from './snake';
import { drawFood } from './food';
console.log("add food");

let score = 0;
let gameOver = false;

let gameboard = document.getElementById("game-board");
// let gameOn = setInterval(main, 1500);

// function main() {
// 	// console.log("Render frames");
// }
drawFood(gameboard);
