# Snake game

### Actions
- create snake 3 units large in the middle of the container
- create random food 1 unit large
- move up
- move down
- move right
- move left
- increase speed
- when key pressed, move around
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

### Actions Ahmad
- créer le serpent dans une petite taille (3 carrés)
- Créer l'environnement du jeu
- Donner la commande du serpent:
  - tourner à gauche, à droite, en haut, en bas.
  - aller plus vite s'il mange quelque chose de spécifique
  - grossir s'il mange un carré
  - le jeu devient plus rapide quand il devient plus grand

### Actions Eva
- De la nourriture est aléatoirement généré dans le bloc
- Si le serpent touche la nourriture avec sa tête, son corps s'allonge
- Si la tête du serpent touche le corps du serpent, game over
- Si le user appuie sur la flèche de droite,Alors le serpent se décale vers la droite
- Si le user appuie sur la flèche de gauche, Alors le serpent se décale vers la gauche
- Si le user appuie sur la flèche du haut, Alors le serpent se décale vers le haut
- Si le user appuie sur la flèche de gauche, Alors le serpent se décale vers la droite

### Actions Ibrahim
- The snake should move inside a container
- The snake should move in 4 directions
- The snake should touch a dot (Food) and grow in size
- The food should change position randomly after each time the snake touches it
- if the snake touches any of the borders of the container the game is over
- if the snake touches itself the game is over
- if the game is over, display score
- if the game is over ask the user if she/he wants to replay

# Pseudocode for Snake Game

### Variables

 Set size to 10;
 Set speed to 1;
 Set score to 0;
 Set position to [5, 10, 8, 10] ([x1, y1, x2, j2]);

 ### Methods (actions)
 
 **function main (first method called when game starts)**
    put the snake in the middle of the block
    put food randomly at x units distance from the snake (create food)
    ask the user if he wants to start the game
    // start game
    
    if keypressed = one of [up, down, left, right]    
        while (not (snakeTouchesBorders AND snakeTouchesItself))
            switch case key:
                if key == up => moveUp()
                if key == down => moveDown()
                if key == right => moveRight()
                if key == left => moveLeft()
            end switch
            
            if snake eats (eat)
            then 
                - updateSize()
                - updateScore()
                - goFaster()
        end while
    
    else, keep moving in the same direction
    end if
**end main**

**function snakeTouchesBorders**
    if snake touches borders return true 
    else return false
**end function**

**function snakeTouchesItself**
    if snake touches itself return true 
    else return false
**end function**

**function createFood**

   - initialize the object food
   
**end function**
 
**function moveRight**
   - move the snake to the right
    x += 1;
**end function**

**function moveLeft**
   - move the snake to the left
    x -= 1;
    change direction to left
**end function**

**function moveDown**
   - move the snake down
    y -= 1;
**end function**

**function moveUp**
   - move the snake up
    y += 1
**end function**

**function eat**
    Ser grandit 
    Ser va + vite 
    update(); ??
**end function**

**function update**
  - size++
  - speed+10
  - change position
**end function**

**function updatePosition**
  - position changes
**end function**

**function updateSize**
  - size++
**end function**

**function goFaster(speedUp)**
    speed += speedUp;
**end function**

**function updateScore()**
    score = size
**end function**

**function pickRandomLocation(param)**
    position = random(1, max width)
**end function**

**function collision(snake, food)**
    if the positions of the 2 objetcs collide
    then
      Game Over (reset game)
      Ask the user if he wants to replay
**end function**


let mysnake = [10, 1, 2, 3];
console.log();

// **************************************************************************************************************************

### PSEUDOCODE FRANÇAIS

Éléments à créer en HTML et CSS :
- Zone de jeu (Area)
- Serpent (Ser)
- Nourriture (Food)

Initial :
function main() menu > le jeu demarre
- Ser vitesse 1 
- Position : centre
- Direction : Gauche => Droite
- Taille : 3 cases

### Fonctions
*update() { => - change à chaque fois la taille du Ser, la vitesse, la position;
  1. augmente la taille
  2. augmente la vitesse
  3. changer la position
}*

ex: position = [1, 2, 3, 2]; => [2, 2, 4, 2...]
[x1, y1, x2, y2]
position[y1] += 1 //up
position[y1] -= 1 //down
position[x1] += 1 //right
position[y1] -= 1 //left

manger: position[x2] += 1;

