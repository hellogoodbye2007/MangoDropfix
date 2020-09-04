class Tree{
    constructor(x,y,width,height){
        this.image=loadImage("Plucking+mangoes/Pluckingmangoes/tree.png");
        // var options={
        //     isStatic:true
        // }
        // this.body=Bodies.rectangle(x,y,width,height,options);
        // World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}