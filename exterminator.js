export default class exterminator{
    constructor(exterminator){
        this.size = 20;
        this.x = 560;
        this.y = 790;
        this.exterminator = exterminator;
    }
show(){
    image(this.exterminator, this.x, this.y, 120, 160);
}
movement(){
    
}
}