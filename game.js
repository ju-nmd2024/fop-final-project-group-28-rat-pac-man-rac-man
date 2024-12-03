
import Rat from "rat.js";
import grey_Exterminator from "grey_exterminator.js";
import red_Exterminator from "red_exterminator.js";
import blue_Exterminator from "blue_exterminator.js";
import pink_Exterminator from "pink_exterminator.js";

let win_video;
let rat;
let normal_cheese;
let blue_cheese;

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
    img = loadImage('rat pac man game plan-03 copy.png');
    imgright = loadImage('rat pac man game plan-03 copy.png');
    imgleft = loadImage('rat pac man game plan-03 up flipped.png');
    imgup = loadImage('rat pac man game plan-03 up.png');
    imgdown = loadImage('rat pac man game plan-03 down.png');
    imgclosed_right = loadImage('rat pac man game plan-03 closed.png');
    imgclosed_left = loadImage('rat pac man game plan-03 closed left.png');
    imgclosed_down = loadImage('rat pac man game plan-03 closed  down.png');
    imgclosed_up = loadImage('rat pac man game plan-03 closed up.png');
    win_video = ('rat pac man game plan-03 copy_1.mp4');
    normal_cheese = loadImage('normal cheese.png');
    blue_cheese = loadImage('blue_cheese.png');
    red_exterminator = loadImage('redExterminator.png');
    blue_exterminator = loadImage('blueExterminator.png');
    pink_exterminator = loadImage('pinkExterminator.png');
    grey_exterminator = loadImage('greyExterminator.png');
  }
  
  function collision(){
    for (let row = 0; row < maze.length; row++) {
      for (let col = 0; col < maze[row].length; col++) {
        if (maze[row][col] === 1) {  
        }
      }
    }
  }

  function setup() {
    createCanvas(1200, 1500);
    
    rat = new Rat(img, imgright, imgleft, imgup, imgdown,imgclosed_up,imgclosed_down,imgclosed_left,imgclosed_right);
    grey_exterminator = new grey_Exterminator(grey_exterminator);
    red_exterminator = new red_Exterminator(red_exterminator);
    blue_exterminator = new blue_Exterminator(blue_exterminator);
    pink_exterminator = new pink_Exterminator(pink_exterminator);
  
  }
 
  function drawGrid(){
  background(0); 
    fill(0);
    stroke(255, 180, 190); 
    strokeWeight(3);
  
    
    let boxSize = 50; 
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
    collision();

    

    rat.movement(); 
    rat.show();
   
    grey_Exterminator.show();
    red_Exterminator.show();
    pink_Exterminator.show();
    purple_Exterminator.show();
    
  }