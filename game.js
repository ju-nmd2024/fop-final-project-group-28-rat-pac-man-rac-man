
import Rat from "./rat.js";
import grey_Exterminator from "./grey_exterminator.js";
import red_Exterminator from "./red_exterminator.js";
import purple_Exterminator from "./purple_exterminator.js";
import pink_Exterminator from "./pink_exterminator.js";
let x =300;
let y = 100;
let boxSize = 50;
// let win_video;
// let win_video = createVideo('/WinVideo.mp4');
// let lose_video = createVideo('/WinVideo.mp4');
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
let score;
let startscreen;
let state = "start";
//let gameState;
// https://www.youtube.com/watch?v=HyK_Q5rrcr4 for the array only
let maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 0, 0, 2, 0, 0, 2, 0, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1,1 ],
    [1, 1, 1, 3, 1, 1, 0, 2, 1, 1, 2, 2, 2, 0, 1, 1, 0, 2, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 2, 0, 1, 1, 0, 0, 0, 2, 1, 1, 2, 0, 1, 1, 2, 1, 1, 1],
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

  function startScreen(){
    image(startscreen,20,10,1200,1390);
    strokeWeight(5);
    fill(0);
    rect(x+120,y+1100,400,150);
    textSize(40);
    fill(255,255,255);
    text("Start Game", x+220, y+1200);
    
  }
  function gameScreen(){
    drawGrid();
 }

  function WinScreen(){
    if(score === 2){
      image(win_video, 0, 0, width, height);

    }
   
  }
  function LoseScreen(){
    image(lose_video);
  }

  function preload() {
    img = loadImage('ratRight.png');
    imgright = loadImage('ratRight.png');
    imgleft = loadImage('ratLeft.png');
    imgup = loadImage('ratUp.png');
    imgdown = loadImage('ratDown.png');
    imgclosed_right = loadImage('ratClosedUpFlipped.png');
    imgclosed_left = loadImage('ratClosedDown.png');
    imgclosed_down = loadImage('ratClosedLeft.png');
    imgclosed_up = loadImage('ratClosedRight.png');
    // win_video = loadImage('WinVideo.mp4');
    // lose_video = loadImage('GameOverVideo.mp4');
    normal_cheese = loadImage('normal-cheese.png');
    blue_cheese = loadImage('blue-cheese.png');
    red_exterminator = loadImage('redExterminator.png');
    purple_exterminator = loadImage('purpleExterminator.png');
    pink_exterminator = loadImage('pinkExterminator.png');
    grey_exterminator = loadImage('greyExterminator.png');
     startscreen = loadImage('startScreen.jpg');
  }
  window.preload = preload;

  function setup() {
    createCanvas(1200, 1500);
    
    rat = new Rat(img, imgright, imgleft, imgup, imgdown,imgclosed_up,imgclosed_down,imgclosed_left,imgclosed_right);
    grey_exterminator = new grey_Exterminator(grey_exterminator);
    red_exterminator = new red_Exterminator(red_exterminator);
    purple_exterminator = new purple_Exterminator(purple_exterminator);
    pink_exterminator = new pink_Exterminator(pink_exterminator);
    score = 0;
    
  }
  window.setup = setup;
 


  function drawGrid(){
  background(0); 
    fill(0);
    stroke(255, 180, 190); 
    strokeWeight(3);
  
    
    // https://www.youtube.com/watch?v=HyK_Q5rrcr4 continuation for the array
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

window.keyReleased=keyReleased;
  
function draw() {

    if(state === "start"){
      startScreen();
    }else if(state === "game"){
      gameScreen();
      drawGrid();
      rat.movement(); 
    rat.show();
    rat.checkCollision();
    grey_exterminator.show();
    grey_exterminator.movement();
    red_exterminator.show();
    red_exterminator.movement();
    pink_exterminator.show();
    pink_exterminator.movement();
    purple_exterminator.show();
    purple_exterminator.movement();

    //dist(grey_exterminator.x, grey_exterminator.y, rat.x, rat.y) < 10
    
    } else if(state === "win"){
      WinScreen();

    }else if( state === "Game Over"){
        LoseScreen();
    }

    if(score === 2){
     WinScreen();
    }
    
    
  }
window.draw = draw;

function mouseClicked(){
  if(state==="start"){
    gameScreen();
    drawGrid();
  state = "game";
  }else if(state === "win" || state === "lose"){}


  }
  window.mouseClicked = mouseClicked;




