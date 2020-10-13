
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob,bob2,bob3,bob4,bob5,roof,slingshot;


function setup() {
	createCanvas(800, 350);


	engine = Engine.create();
	world = engine.world;

 
	bob1=new Bob(100,200,50);
	World.add(world, bob1);
	bob2=new Bob(150,200,50);
	World.add(world, bob2);
	bob3=new Bob(200,200,50);
	World.add(world, bob3);
	bob4=new Bob(250,200,50);
	World.add(world, bob4);
	bob5=new Bob(300,200,50);
	World.add(world, bob5);
  slingshot1 = new Rope(bob1.body,{x:100, y:100});
  slingshot2 = new Rope(bob2.body,{x:150, y:100});
  slingshot3 = new Rope(bob3.body,{x:200, y:100});
  slingshot4 = new Rope(bob4.body,{x:250, y:100});
  slingshot5 = new Rope(bob5.body,{x:300, y:100});
}


function draw() {
  
  background("blue");
  Engine.update(engine);
  bob5.display();
  bob3.display();
  bob2.display();
  bob4.display();
  bob1.display();
 slingshot5.display();
 slingshot1.display();
 slingshot2.display();
 slingshot3.display();
 slingshot4.display();
}


function mouseDragged(){
	Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
	
	}
	

