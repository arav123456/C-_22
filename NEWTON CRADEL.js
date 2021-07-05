const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob,bob1,bob2,bob3,bob4;
var rope,rope1,rope2,rop3,rope4;
var world;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true
	}
    
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
     restitution:1,
	 friction:0,
	 density:0.8,
     isStatic:false
	}
	
    bob = Bodies.circle(320,320,20,bob_options);
	World.add(world,bob);
	bob1 = Bodies.circle(360,320,20,bob_options);
	World.add(world,bob1);
	bob2 = Bodies.circle(400,320,20,bob_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(440,320,20,bob_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(480,320,20,bob_options);
	World.add(world,bob4);
	
    rope=new Rope(bob,roof,-80,0)
	rope1=new Rope(bob1,roof,-40,0)
	rope2=new Rope(bob2,roof,0,0)
	rope3=new Rope(bob3,roof,40,0)
	rope4=new Rope(bob4,roof,80,0)

	
    

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  
  background("#99004d");
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
rope.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
  //create ellipse shape for multiple bobs here
  ellipse(bob.position.x,bob.position.y,20,20);
  ellipse(bob1.position.x,bob1.position.y,20,20);
  ellipse(bob2.position.x,bob2.position.y,20,20);
  ellipse(bob3.position.x,bob3.position.y,20,20);
  ellipse(bob4.position.x,bob4.position.y,20,20);



  }

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
     Matter.Body.applyForce(bob,bob.position,{x:-50,y:-45})
	
	}
}