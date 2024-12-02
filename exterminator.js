export default class Exterminator{
    constructor(imgpurple, imgpink, imggrey, imgred){
        this.size = 20;
        this.x = 560;
        this.y = 790;
        this.imgpurple = imgpurple;
        this.imgpink =imgpink;
        this.imggrey = imggrey;
        this.imgred = imgred;
    } show(){
    image(this.imgpurple, this.imgpink, this.imggrey, this.imgred, this.x, this.y, 120, 160);
}
movement(){

}
}
