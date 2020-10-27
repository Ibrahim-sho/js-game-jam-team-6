import { draw } from './snake';

console.log("en fin!!!");
// console.log("again qqqqq");

let score = 0;
let gameOver = false;

let gameboard = document.getElementById("game-board");
// let gameOn = setInterval(main, 1500);

// function main() {
// 	// console.log("Render frames");
// }
draw(gameboard);