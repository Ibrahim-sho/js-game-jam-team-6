# Snake game

### Actions Ahmad

- créer le serpent dans une petite taille (3 carrés)
- Créer l'environnement du jeu
- Donner la commande du serpent:
  - tourner à gauche, à droite, en haut, en bas.
  - aller plus vite s'il mange quelque chose de spécifique
  - grossir s'il mange un carré
  - le jeu devient plus rapide quand il devient plus grand

### Actions Cristina

- create snake
- create food
- move up
- move down
- move right
- move left
- update snake position
- when key pressed, move around
- show (draw) snake with new position
- eating action
- pick random location
- change snake length after eating
- create a grid for background


### Actions Eva

Ce programme est un jeu Snake. 

- De la nourriture est aléatoirement généré dans le bloc
- Si le serpent touche la nourriture avec sa tête, son corps s'allonge

- Si la tête du serpent touche le corps du serpent, game over

- Si le user appuie sur la flèche de droite,Alors le serpent se décale vers la droite
- Si le user appuie sur la flèche de gauche, Alors le serpent se décale vers la gauche
- Si le user appuie sur la flèche du haut, Alors le serpent se décale vers le haut
- Si le user appuie sur la flèche de gauche, Alors le serpent se décale vers la droite


### Actions Ibrahim

This game will allow the user to play the snake game
on the computer.

- The snake should move inside a container
- The snake should move in 4 directions
- The snake should touch a dot (Food) and grow in size
- The food should change position randomly after each time the snake touches it
- if the snake touches any of the borders of the container the game is over
- if the snake touches itself the game is over
- if the game is over, display score
- if the game is over ask the user if she/he wants to replay

# Pseudocode for Snake Game

### Snake class definition
class Snake {
   // properties
   int size;
   int speed;
   int posx, posy;
   array position = [x1, y1, x2, j2];
          
   // define constructor
   constructor(size, speed, posx, posy) {
      this.size = size;
      this.speed = speed;   
      this.posx = posx;
      this.posy = posy;   

      // posx = random(width);
      // posy = random(height);
   }
           
   // define methods (actions)
   draw() {
      // put the snake in the middle of the block;
      // put food randomly at x px distance from the snake; (create food)
   }

   create food() {
      // initialize the object food
   }
           
   moveRight() {
      // move the snake to the right
   }

   moveLeft() {
      // move the snake to the right
   }

   moveUp() {
      // move the snake to the right
   }

   moveDown() {
      // move the snake to the right
   }

   updatePosition() {
      
   }

   getSpeed() {
      return speed;
   }
       
   goFaster(speedUp) {
      speed += speedUp;
   }
}

### Game class declaration ???
