// Import variables et/or functions from another files, so that we can access them here
import { drawSnake, updateSnake } from './snake';
import { drawFood } from './food';

// Declare variables and assign them values
let score = 0;
let gameOver = false; // This value will change when we'll have a collision or snake touches itself
let gameboard = document.getElementById("game-board"); // gameboard DOM element

function main() {
    
	gameboard.innerHTML = ""; // Reset the gameboard (empty)

	// Update elemnts when moving around
	updateSnake();

	// Redraw the elements with their new positions
    drawFood(gameboard);
    drawSnake(gameboard);
}

let gameOn = setInterval(main, 100); // Executes main() each 100 miliseconds