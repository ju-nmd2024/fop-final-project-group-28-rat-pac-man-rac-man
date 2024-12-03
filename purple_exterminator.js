export default class purple_Exterminator{
    constructor(purple_Exterminator){
        this.size = 10;
        this.x = 630;
        this.y = 870;
        this.purple_Exterminator = purple_Exterminator;
        this.boxsize = 50;
    }

    movement(){

    }

    show(){
        image(this.purple_Exterminator, this.x, this.y, 70, 90);
    }
}