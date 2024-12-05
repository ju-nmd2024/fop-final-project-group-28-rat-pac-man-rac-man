//codes taken from p5.js
// https://p5js.org/reference/p5/class/
export default class purple_Exterminator{
    constructor(purple_Exterminator){
        this.size = 10;
        this.x = 570;
        this.y = 1030;
        this.purple_Exterminator = purple_Exterminator;
        this.boxsize = 50;
        this.direction = "forward";
    }

    movement(){

        let purple_exterminatorX = this.x + 70 ;
        let purple_exterminatorY = this.y + 90 ;
        let col = Math.floor(purple_exterminatorX / 50);
        let row = Math.floor(purple_exterminatorY / 50);
   
   
   
     
       if(this.direction==="forward"){
         if((this.x < 800)){
           this.x= this.x + 3;
           console.log(this.x);
         } else{
           this.direction = "backwards";
           //this.x = this.x - 3;
         }
       } else if(this.direction==="backwards"){
         if(this.x>310){
           this.x = this.x - 3;
         } else {
           this.direction = "forward";
         }
       } 
   
    }

    show(){
        image(this.purple_Exterminator, this.x, this.y, 70, 90);
    }
}