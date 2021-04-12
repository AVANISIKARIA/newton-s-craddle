
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(350,100,500,20);

	rope1 = new rope(bob1.body,roof.body,-2*bobDiameter,0);
	rope2 = new rope(bob2.body,roof.body,-2*bobDiameter,0);
	rope3 = new rope(bob3.body,roof.body,-2*bobDiameter,0);	
	rope4 = new rope(bob4.body,roof.body,-2*bobDiameter,0);
	rope5 = new rope(bob5.body,roof.body,-2*bobDiameter,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



