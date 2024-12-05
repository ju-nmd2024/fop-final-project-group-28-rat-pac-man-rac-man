//codes taken from p5.js
// https://p5js.org/reference/p5/class/
export default class red_Exterminator{
    constructor(red_Exterminator){
        this.size = 10;
        this.x = 560;
        this.y = 585;
        this.red_Exterminator = red_Exterminator;
        this.boxsize = 50;
        this.direction = "forward";
    }

    movement(){

        let red_exterminatorX = this.x + 70 ;
        let red_exterminatorY = this.y + 90 ;
        let col = Math.floor(red_exterminatorX / 50);
        let row = Math.floor(red_exterminatorY / 50);
   
   
   
     
       if(this.direction==="forward"){
         if((this.x < 1100)){
           this.x= this.x + 3;
           console.log(this.x);
         } else{
           this.direction = "backwards";
           //this.x = this.x - 3;
         }
       } else if(this.direction==="backwards"){
         if(this.x>20){
           this.x = this.x - 3;
         } else {
           this.direction = "forward";
         }
       } 
   
    }

    show(){
        image(this.red_Exterminator, this.x, this.y, 70, 90);
    }
}