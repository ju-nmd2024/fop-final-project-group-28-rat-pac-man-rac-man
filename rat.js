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
    movement(){
      if (keyIsDown(UP_ARROW)) {
        this.img= this.imgup;
        this.y -= 3; 
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.img= this.imgdown;
        this.y += 3; 
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.img= this.imgleft;
        this.x += -3;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.img= this.imgright;
        this.x += 3;
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