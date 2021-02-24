
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload(){
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    roof = new Roof(800, 200,200, 20)
	ball3 = new Ball(800, 510, 20)
	ball2 = new Ball(760,510, 20 )
	ball1 = new Ball(720,510,20)
	ball4 = new Ball(840,510,20)
	ball5 = new Ball(880,510,20)
  rope1 =new Rope(roof.body, ball1.body,-80,0 )
  rope2 =new Rope(roof.body, ball2.body,-40,0 )
  rope3 =new Rope(roof.body, ball3.body, 0,0 )
  rope4 =new Rope(roof.body, ball4.body, 40,0 )
  rope5 =new Rope(roof.body, ball5.body,80,0 )
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 
  roof.display();
  ball3.display();
  ball1.display();
  ball2.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-50,y:-50})
  }
}



