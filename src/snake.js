let inputDirection = {x: 0, y: 0};
let lastInputDirection = {x: 0, y: 0};
let snake = [
	{ x: 10, y: 18},
	{ x: 11, y: 18},
	{ x: 12, y: 18}
];

export function draw(gameboard) {
	snake.forEach(segment => {
		let snakeElement = document.createElement("div");

		snakeElement.style.gridRowStart = segment.y;
		snakeElement.style.gridColumnStart = segment.x;
		snakeElement.classList.add("snake");
		gameboard.appendChild(snakeElement);
	});
}