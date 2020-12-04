let food = randomFood();
console.log(food);

export function drawFood(gameboardElem) {
    let foodElement = document.createElement("div");

    foodElement.classList.add("food");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;

    gameboardElem.appendChild(foodElement);
}

export function randomFood() {
    return {
        x: Math.floor(Math.random() * 21 ) + 1 , y: Math.floor(Math.random() * 21) + 1
    }
}