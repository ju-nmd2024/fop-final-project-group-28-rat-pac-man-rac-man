
import Rat from "./rat.js";
import grey_Exterminator from "./grey_exterminator.js";
import red_Exterminator from "./red_exterminator.js";
import purple_Exterminator from "./purple_exterminator.js";
import pink_Exterminator from "./pink_exterminator.js";

let boxSize = 50;
let win_video;
let rat;
let normal_cheese;
let blue_cheese;
let img;
let imgright;
let imgleft;
let imgup;
let imgdown;
let imgclosed_right;
let imgclosed_left;
let imgclosed_down;
let imgclosed_up;
let red_exterminator;
let purple_exterminator;
let pink_exterminator;
let grey_exterminator;
let gameState;

let maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 0, 0, 2, 0, 0, 2, 0, 1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1,1 ],
    [1, 1, 1, 3, 1, 1, 0, 2, 1, 1, 2, 1, 1, 0, 1, 1, 0, 2, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 2, 0, 1, 1, 0, 1, 1, 2, 1, 1, 2, 0, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 0, 2, 1, 1, 2, 1, 1, 0, 1, 1, 0, 2, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 2, 0, 2, 0, 0, 3, 0, 1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 2, 0, 2, 1, 0, 0, 2, 1, 1, 3, 0, 0, 1, 0, 2, 0, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 2, 0, 0, 2, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 2, 0, 2],
    [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 2, 1, 0, 2, 0, 2, 0, 0, 2, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 0, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 2, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 2, 0, 2, 0, 1, 1, 0, 0, 0, 0, 1, 1, 3, 0, 2, 0, 2, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 0, 0, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 0, 2, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 2, 1, 1, 1, 2, 0, 2, 1, 1, 1, 3, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   
   
  ];

  /*function startScreen(){
    
  }
  function gameScreen(){

  }
  function WinScreen(){
    //video(win_video),0,0,width,height;
  }
  function LoseScreen(){

  }*/

  function preload() {
    img = loadImage('ratRight.png');
    imgright = loadImage('ratRight.png');
    imgleft = loadImage('ratLeft.png');
    imgup = loadImage('ratUp.png');
    imgdown = loadImage('ratDown.png');
    imgclosed_right = loadImage('ratClosedRight.png');
    imgclosed_left = loadImage('ratClosedLeft.png');
    imgclosed_down = loadImage('ratClosedDown.png');
    imgclosed_up = loadImage('ratClosedUpFlipped.png');
    win_video = ('rat-pac-man-game-plan-03-copy_1.mp4');
    normal_cheese = loadImage('normal-cheese.png');
    blue_cheese = loadImage('blue-cheese.png');
    red_exterminator = loadImage('redExterminator.png');
    purple_exterminator = loadImage('purpleExterminator.png');
    pink_exterminator = loadImage('pinkExterminator.png');
    grey_exterminator = loadImage('greyExterminator.png');
  }
  window.preload = preload;

  function setup() {
    createCanvas(1200, 1500);
    
    rat = new Rat(img, imgright, imgleft, imgup, imgdown,imgclosed_up,imgclosed_down,imgclosed_left,imgclosed_right);
    grey_exterminator = new grey_Exterminator(grey_exterminator);
    red_exterminator = new red_Exterminator(red_exterminator);
    purple_exterminator = new purple_Exterminator(purple_exterminator);
    pink_exterminator = new pink_Exterminator(pink_exterminator);
  
  }
  window.setup = setup;
 
  function drawGrid(){
  background(0); 
    fill(0);
    stroke(255, 180, 190); 
    strokeWeight(3);
  
    
    
    for (let row = 0; row < maze.length; row++) {
      for (let col = 0; col < maze[row].length; col++) {
        if (maze[row][col] === 1) {
          rect(col * boxSize , row * boxSize, boxSize, boxSize);
        }
        if (maze[row][col] === 2) {
          image(normal_cheese, col * boxSize , row * boxSize, boxSize, boxSize);
        }
        if (maze[row][col] === 3) {
          image(blue_cheese, col * boxSize , row * boxSize, boxSize, boxSize);
        }
      }
    }
 }

  function keyReleased() {
    rat.keyReleased();
    
  }

  function draw() {
    drawGrid();
    
    rat.movement(); 
    rat.show();
   
    grey_exterminator.show();
    red_exterminator.show();
    pink_exterminator.show();
    purple_exterminator.show();
    
  }
