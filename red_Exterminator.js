export default class red_Exterminator{
    constructor(red_Exterminator){
        this.size = 10;
        this.x = 630;
        this.y = 870;
        this.red_Exterminator = red_Exterminator;
        this.boxsize = 50;
    }

    movement(){

    }

    show(){
        image(this.red_Exterminator, this.x, this.y, 70, 90);
    }
}