//codes taken from p5.js
// https://p5js.org/reference/p5/class/
export default class grey_Exterminator{
  constructor(grey_Exterminator){
      this.size = 20;
      this.x = 500;
      this.y = 1370;
      this.grey_Exterminator = grey_Exterminator;
      this.boxSize = 50;
      this.direction = "forward";
  } 
movement(){

   let grey_exterminatorX = this.x + 70 ;
   let grey_exterminatorY = this.y + 90 ;
   let col = Math.floor(grey_exterminatorX / 50);
   let row = Math.floor(grey_exterminatorY / 50);


  if(this.direction==="forward"){
    if((this.x < 1000)){
      this.x= this.x + 3;
      console.log(this.x);
    } else{
      this.direction = "backwards";
      //this.x = this.x - 3;
    }
  } else if(this.direction==="backwards"){
    if(this.x>140){
      this.x = this.x - 3;
    } else {
      this.direction = "forward";
    }
  } 




  }

show(){
  image(this.grey_Exterminator, this.x, this.y, 70, 90);
}

}
