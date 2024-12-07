//codes taken from p5.js
// https://p5js.org/reference/p5/class/
export default class pink_Exterminator{
    constructor(pink_Exterminator){
        this.size = 10;
        this.x = 140;
        this.y = 30;
        this.pink_Exterminator = pink_Exterminator;
        this.boxsize = 50;
        this.direction = "forward";
    }

    movement(){
        let pink = this.x + 70 ;
        let pink_exterminatorY = this.y + 90 ;
        let col = Math.floor(pink / 50);
        let row = Math.floor(pink_exterminatorY / 50);
   
   
   
     
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
        image(this.pink_Exterminator, this.x, this.y, 70, 90);
    }
}