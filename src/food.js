let food = [{x: 0, y: 0}]


export function draw(gameboardElem){

    food.forEach(segment => {
        const foodElement = document.createElement("div")
        foodElement.classList.add("food");
        foodElement.style.gridRowStart = segment.y
        foodElement.style.gridColumnStart = segment.x
        gameboardElem.appendChild(foodElement)
    })

    console.log(food)
}