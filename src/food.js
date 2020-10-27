let food = {x: 5, y: 6}

export function drawFood(gameboardElem){
    let foodElement = document.createElement("div")
    foodElement.classList.add("food");
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    gameboardElem.appendChild(foodElement)
}