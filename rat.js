//syntax taken from p5.js
//https://p5js.org/search/?term=class
export default class Rat{
  constructor(img,imgright,imgleft,imgup,imgdown,imgclosed_right,imgclosed_left,imgclosed_down,imgclosed_up){
    this.size = 50; 
    this.img = img;
    this.imgright = imgright;
    this.imgleft = imgleft;
    this.imgup = imgup;
    this.imgdown = imgdown;
    this.imgclosed_right = imgclosed_right;
    this.imgclosed_left = imgclosed_left;
    this.imgclosed_down = imgclosed_down;
    this.imgclosed_up = imgclosed_up; 
    this.x = 560;
    this.y = 890;
    this.score = 0;
    
  }
  show(){
    image(this.img, this.x, this.y, 80, 50);
  }
  movement(maze) {

    let ratCenterX = this.x + 80 / 2;
    let ratCenterY = this.y + 50 / 2;
    let col = Math.floor(ratCenterX / 50);
    let row = Math.floor(ratCenterY /50);


    if((col >= 24)){
      this.x = 0;
    }
    // Movement for each key
    if (keyIsDown(UP_ARROW)) {
      if (row > 0 && maze[row - 1][col] !== 1) { 
          this.img = this.imgup;
          this.y -= 3;
      }
  }
  if (keyIsDown(DOWN_ARROW)) {
      if (row < maze.length - 1 && maze[row + 1][col] !== 1) {
          this.img = this.imgdown;
          this.y += 3;
      }
  }
  if (keyIsDown(LEFT_ARROW)) {
      if (col > 0 && maze[row][col - 1] !== 1) {
          this.img = this.imgleft;
          this.x -= 3;
      }
  }
  if (keyIsDown(RIGHT_ARROW)) {
      if (col < maze[row].length - 1 && maze[row][col + 1] !== 1) {
          this.img = this.imgright;
          this.x += 3;
      }
  }
  
  }
  


  // cheese eating
  // ratCenter becasue it tracks from the edge not the centre so we divided it by 2 
  checkCollision(maze) {
    let ratCenterX =this.x + 80 /2;
    let ratCenterY =this.y + 50 /2;
    let col = Math.floor(ratCenterX/50 );  
    let row = Math.floor(ratCenterY/50 ); 
    //console.log(col);
    // console.log(row);
  
   
    if (maze[row] && maze[row][col]) {
      if (maze[row][col] === 2 || maze[row][col] === 3) {  
        maze[row][col] = 0; 
        this.score++;
        console.log("eaten");
        console.log(this.score);
      }
    }
    
  
}
  keyReleased() {
      if (keyCode === UP_ARROW) {
        this.img = this.imgclosed_up;
      }
      if (keyCode === DOWN_ARROW) {
        this.img = this.imgclosed_down;
      }
      if (keyCode === LEFT_ARROW) {
        this.img = this.imgclosed_left;
      }
      if (keyCode === RIGHT_ARROW) {
        this.img = this.imgclosed_right;
      }
    }
}