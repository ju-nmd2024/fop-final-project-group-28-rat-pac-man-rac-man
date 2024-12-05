export default class grey_Exterminator{
    constructor(grey_Exterminator){
        this.size = 20;
        this.x = 500;
        this.y = 1370;
        this.grey_Exterminator = grey_Exterminator;
        this.boxSize = 50;
        this.direction = 1;
        // this.leftLastX = 146;
        // this.rightLastX = 1040;
        //this.gameState = true;
    } 
movement(){

     let grey_exterminatorX = this.x + 70 ;
     let grey_exterminatorY = this.y + 90 ;
     let col = Math.floor(grey_exterminatorX / 50);
     let row = Math.floor(grey_exterminatorY / 50);

     console.log('Moving');

    //  switch(this.direction){
    //     case 1:
    //         this.x -= 3;
    //        col = 146;
    //         break;
    //     case 2:
    //         this.x -= 3;
    //         col = 1040;

    //         break;
    //     case 3:
    //         this.x 
            
    //     default:
    //         console.log('DEFAULT');
    //         break;
            
    //  }
    for (let row = 0; row < maze.length; row++) {
     if((col > 20)){
        this.x -= 3;
      } else if (this.x > 50) {
        this.direction = 1; // Move right
      }
      this.x += this.direction * 3;}
    //     if (!(maze[row - 1] && maze[row - 1][col] !== 1)) { //Up arraow
    //     //   this.y -= 3;
    //     this.direction = 2;
    //  console.log('SWITCHING TO LEFT');

    //   } else if (!(maze[row] && maze[row][col - 1] !== 1)) { //Left arrow
    //       this.direction = 1;
    //  console.log('SWITCHING TO RIGHT');
    //     } 
        
    //     else if (maze[row + 1] && maze[row + 1][col] !== 1) { //Down arraow
    //         this.direction = 4;
    //         console.log('SWITCHING TO DOWN');
    //     } else if (maze[row] && maze[row][col + 1] !== 1) { //right arraow
    //         this.direction = 3; console.log('SWITCHING TO RIGHT');
    //     }
    //     else if (!(maze[row] && maze[row][col - 1] !== 1)) { //Left arrow
    //         this.direction = 1;
    //    console.log('SWITCHING TO UP');
    //       } 


    }

show(){
    image(this.grey_Exterminator, this.x, this.y, 70, 90);
}

}
