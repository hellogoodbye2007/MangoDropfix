
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boyimage
function preload()
{
	boyimage=loadImage("Plucking+mangoes/Pluckingmangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	gameState="inhand";
	//Create the Bodies Here.
	thetree=new Tree(650,500,401,427);
	ground1=new Ground(400,695,800,20);
	stone1=new Stone(60,600);
	mango1=new Mango(550,420);
	mango2=new Mango(700,350);
	mango3=new Mango(660,450);
	sling=new Rope({x:60,y:600},stone1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  thetree.display();
  ground1.display();
  image(boyimage,100,640,1697*2/25,192);
  mango1.display();
  mango2.display();
  mango3.display();
  stone1.display();
  mangoDown(mango1.body,stone1.body);
  mangoDown(mango2.body,stone1.body);
  mangoDown(mango3.body,stone1.body);
  drawSprites();
}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setVelocity(stone1.body,{x:0,y:0});
        Matter.Body.setPosition(stone1.body,{x:60,y:600});
        Matter.Body.setAngle(stone1.body,0);
	    sling.attach(stone1.body);
	    gameState="inhand"
    }
}
//(bodyA.position.x-bodyB.position.x)^2+(bodyA.position.y-bodyB.position.y)^2
function mangoDown(bodyA,bodyB){
    var distance=dist(bodyA.position.x,bodyA.position.y,bodyB.position.x,bodyB.position.y);
    //console.log(distance);
    //console.log(bodyA.position,bodyB);
	if(distance<31){
        Matter.Body.setStatic(bodyA,false);
	}
}