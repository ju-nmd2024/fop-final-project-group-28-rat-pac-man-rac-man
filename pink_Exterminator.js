export default class pink_Exterminator{
    constructor(pink_Exterminator){
        this.size = 10;
        this.x = 530;
        this.y = 870;
        this.pink_Exterminator = pink_Exterminator;
        this.boxsize = 50;
    }

    movement(){

    }

    show(){
        image(this.pink_Exterminator, this.x, this.y, 70, 90);
    }
}