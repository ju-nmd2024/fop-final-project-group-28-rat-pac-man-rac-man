export default class grey_Exterminator{
    constructor(grey_Exterminator){
        this.size = 20;
        this.x = 570;
        this.y = 870;
        this.grey_Exterminator = grey_Exterminator;
        this.boxSize = 50;
        //this.gameState = true;
    } 
movement(){

    let exterminatorCenterX = this.x + 70 / 2;
    let exterminatorCenterY = this.y + 90 / 2;
    let col = Math.floor(exterminatorCenterX / boxSize);
    let row = Math.floor(exterminatorCenterY / boxSize);

    if(Rat.movement){
        Mathfloor(Math.random(this.x && this.y)*grey_Exterminator);
    }


    }

show(){
    image(this.grey_Exterminator, this.x, this.y, 70, 90);
}

}
