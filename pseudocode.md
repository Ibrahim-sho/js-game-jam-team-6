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
      div 
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

let mysnake = new Snake(10, 1, 2, 3);
console.log();

// **************************************************************************************************************************

### PSEUDOCODEFRANÇAIS

This game will allow the user to play the snake game
on the computer.

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
  

# Mouvements 

*moveRight() {
  x += 1;
}*

*moveLeft() {
  x -= 1;
}*

*moveDown() {
  Y -= 1;
}*

*moveUp() {
  y += 1
}*

*eat() {
  Ser grandit 
  Ser va + vite 
  update(); ??
}*

Si l'utilisateur appuie sur la flèche droite
  moveRight();

Si l'utilisateur appuie sur la flèche gauche
  moveLeft();

Si l'utilisateur appuie sur la flèche haut
  moveUp();
 
Si l'utilisateur appuie sur la flèche bas
  moveDown();

  
# Manger 
Si eat()
  Alors
   
   
*collision()* 
Si 
  les positions des 2 objets se touchent
Alors
  Game Over (on remets les valeur initiales)
  Demander à l'utilisateur si il veux jouer de nouveau


