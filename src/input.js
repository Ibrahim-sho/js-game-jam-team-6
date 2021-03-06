// Declare variables and assign them values
let inputDirection = {x: 0, y: 0};
let lastInputDirection = {x: 0, y: 0};

export function getInputDirection() { // Get the new position when moving
    lastInputDirection = inputDirection;

    return lastInputDirection;
}

// Catch user's click event while using the 4 keyboard keys (up, down, left, right)
document.addEventListener("keydown", (m) => {
    switch(m.key) {
        case 'ArrowUp': // move up
            if (lastInputDirection.y === 0) { // if current direction != up && current direction != down
                inputDirection = {x: 0, y: -1};
            }
            break;
        case 'ArrowDown': // move down
            if (lastInputDirection.y === 0) { // if current direction != down && current direction != up
                inputDirection = {x: 0, y: 1};
            }
            break;
        case 'ArrowLeft': // move left
            if (lastInputDirection.x === 0) { // if current direction != left && current direction != right
                inputDirection = {x: -1, y: 0};
            }
            break;
        case 'ArrowRight': // move right
            if (lastInputDirection.x === 0) { // if current direction != right && current direction != left
                inputDirection = {x: 1, y: 0};
            }
            break;
    }
});