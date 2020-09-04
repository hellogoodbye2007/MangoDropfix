class Stone{
    constructor(x,y){
        var options={
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.image=loadImage("Plucking+mangoes/Pluckingmangoes/stone.png");
    }
    display(){
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image(this.image,0,0,40,1276*2/85);
        pop();
    }
}