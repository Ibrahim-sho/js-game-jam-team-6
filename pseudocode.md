# Snake game

### Actions
- when page loads, ask user to enter his name (it will be displayed in the top left corner all the time, with the score)
- create snake 3 units large in the middle of the container
- create random food 1 unit large
- move up
- move down
- move right
- move left
- increase speed
- when key pressed, move around
- change the snake’s direction using the four arrow keys
- eating action
- pick random location
- update snake position (when move around, when eating)
- update snake size (when move around, when eating)
- update snake score (when eating)
- create a grid for background

**Conditions**
- if snake touches itself then game over
- the snake should move inside a container
- the food should change position randomly after each time the snake touches it
- if the snake touches any of the borders of the container the game is over
- if the snake touches itself the game is over
- if the game is over, display score
- if the game is over ask the user if she/he wants to replay

<!-- vidéo: https://www.youtube.com/watch?v=QTcIXok9wNY -->

# Pseudocode for Snake Game

### Variables

 Set size to 10;
 
 Set speed to 1;

 <!-- *Set direction to "right"; -->

 Set changingDirection to false; // yes or no
 
 Set score to 0;
 
 Set position to [5, 10, 8, 10] ([x1, y1, x2, j2]);
 

### Methods (actions)
 
 ***function*** main (first method called when page loads)
 
	- ask the user to enter his name
	- put the snake in the middle of the block
	- put food randomly at x units distance from the snake (create food)
	- ask the user if he wants to start the game (button)

	- start the game
	
	if keypressed = one of [up, down, left, right] and different from snake current direction
		while (not (snakeTouchesBorders AND snakeTouchesItself))
			switch case key:
				*if key == up => moveUp() and changeDirection()
				*if key == down => moveDown() and changeDirection()
				*if key == right => moveRight() and changeDirection()
				*if key == left => moveLeft() and changeDirection()
			end switch

			if snake eats (head position = food position)
			then 
				- updateSize()
				- updateScore()
				- goFaster()
				*- reposition food randomly (food position != snake position)
			end if

			if the snake touches any of the borders OR the snake touches itself
			then 
				// the game is over:
				- reset variables
				- ask the user if she/he wants to replay
			end if
		end while
	
	else keep moving in the same direction (changingDirection = false)
	end if
	
***end*** function

***function*** changeDirection(event)

	changingDirection = true;

	// register keyboard key codes for arrow keys
	const LEFT_KEY = 37;  
	const RIGHT_KEY = 39;
	const UP_KEY = 38;  
	const DOWN_KEY = 40;

	// register the key pressed by the user
	const keyPressed = event.keyCode;

	// define each direction
	const goingUp = dy === -10; 
	const goingDown = dy === 10; 
	const goingRight = dx === 10; 
	const goingLeft = dx === -10;

	// all conditions when one of the arrow keys is pressed
	if keyPressed = LEFT_KEY and not goingRight
		dx = -10; dy = 0; { x: 2, y: }

	if keyPressed = UP_KEY and not goingDown
		dx = 0; dy = -10;

	if keyPressed = RIGHT_KEY and not goingLeft 
	   dx = 10;    dy = 0;

	if keyPressed = DOWN_KEY and not goingDown
	   dx = 0;    dy = 10;

***end function*** 

***function*** snakeTouchesBorders

	if snake touches borders return true 
	
	else return false
	
***end function*** 

***function*** snakeTouchesItself

	if snake touches itself return true 
	
	else return false
	
***end function***

***function createFood***

   // initialize the object food
   
***end function***
 
***function*** moveRight

   // move the snake to the right
   
	x += 1;
	
***end function***

***function*** moveLeft

   // move the snake to the left
   
	x -= 1;
	
	// change direction to left
	
***end function***

***function*** moveDown

   // move the snake down
   
	y -= 1;
	
***end function***

***function*** moveUp

   // move the snake up
   
	y += 1
	
***end function***

***function*** update

  - size++
  - speed+10
  - change position
  
***end function***

***function*** updatePosition

  - position changes
  
***end function***

***function*** updateSize

  - size++
  
***end function***

***function*** goFaster(speedUp)

	speed += speedUp;
	
***end function***

***function*** updateScore()

	score = size
	
***end function***

***function*** eat

	- updateSize()
	- updateScore()
	- goFaster()
	
***end function***

***function*** pickRandomLocation(param)

	position = random(1, max width)
	
***end function***

***function*** collision(snake, food)

	if the positions of the 2 objetcs collide
	
	then
	
	  - Game Over (reset game)
	  - Ask the user if he wants to replay
	  
***end function***


let mysnake = [10, 1, 2, 3];
console.log();

// **************************************************************************************************************************

### PSEUDOCODE FRANÇAIS

Initial :
function main() menu > le jeu demarre
- Ser vitesse 1 
- Position : centre
- Direction : Gauche => Droite
- Taille : 3 cases

ex: position = [1, 2, 3, 2]; => [2, 2, 4, 2...]
[x1, y1, x2, y2]
position[y1] += 1 //up
position[y1] -= 1 //down
position[x1] += 1 //right
position[y1] -= 1 //left

manger: position[x2] += 1;
