let food = [{x: 5, y: 6}]


export function drawFood(gameboardElem){

    food.forEach(segment => {
        let foodElement = document.createElement("div")
        foodElement.classList.add("food");
        foodElement.style.gridRowStart = segment.y
        foodElement.style.gridColumnStart = segment.x
        gameboardElem.appendChild(foodElement)
    })

    console.log(food)
}