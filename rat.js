//codes taken from p5.js
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
    this.y = 590;
  }
  show(){
    image(this.img, this.x, this.y, 80, 50);
  }
  movement() {

    let ratCenterX = this.x + 80 / 2;
    let ratCenterY = this.y + 50 / 2;
    let col = Math.floor(ratCenterX / boxSize);
    let row = Math.floor(ratCenterY / boxSize);


    if((col >= 24)){
      this.x = 0;
    }
    // if((col = 0)){
    //   this.x = 24;
    // }


   

    // Movement for each key
    if (keyIsDown(UP_ARROW)) {
      if (maze[row - 1] && maze[row - 1][col] !== 1) { //Up arraow
        this.img = this.imgup;
        this.y -= 3;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (maze[row + 1] && maze[row + 1][col] !== 1) { //Down arraow
        this.img = this.imgdown;
        this.y += 3;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      if (maze[row] && maze[row][col - 1] !== 1) { //Left arraow
        this.img = this.imgleft;
        this.x -= 3;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (maze[row] && maze[row][col + 1] !== 1) { //right arraow
        this.img = this.imgright;
        this.x += 3;
      }
    }
  }
  
  

  // cheese eating
  // ratCenter becasue it tracks from the edge not the centre so we divided it by 2 
  checkCollision() {
    let ratCenterX =this.x + 80 /2;
    let ratCenterY =this.y + 50 /2;
    let col = Math.floor(ratCenterX/boxSize );  
    let row = Math.floor(ratCenterY/boxSize ); 
    console.log(col);
     console.log(row);
  
   
    if (maze[row] && maze[row][col]) {
      if (maze[row][col] === 2 || maze[row][col] === 3) {  
        maze[row][col] = 0; 
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