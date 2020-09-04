class Mango{
    constructor(x,y){
        this.image=loadImage("Plucking+mangoes/Pluckingmangoes/mango.png");
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
    }
    display(){
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image(this.image,0,0,40,40);
        pop();
    }
}