class Rope{
    constructor(pointA,bodyB){
        var options={
            pointA:pointA,
            bodyB:bodyB,
            stiffness:0.05
        }
        this.link=Constraint.create(options);
        World.add(world,this.link)
    }
    fly(){
        this.link.bodyB= null;
    }
    attach(body){
        this.link.bodyB = body;
    }
}