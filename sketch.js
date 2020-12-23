const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var paperball,box1,box2, box3,ground,dustbin;
function preload()
{
	dustbin = loadImage("b.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paperball = new Paper();

	box1 = new Dustbin(580, 650, 140, 15);
	box2 = new Dustbin(510, 580, 10, 150);
	box3 = new Dustbin(650, 580, 10, 150);


	//box1 = new Dustbin(390,600,20,150);
	//box2 = new Dustbin(510,530,,260);
	//console.log(box2)
	//box3 = new Dustbin(650,600,20,150);

	bin = createSprite(580,570,140,15);
	
	ground = new Ground();
	Engine.run(engine);
}


function draw() {
  
  background("grey");
  rectMode(CENTER);
  Engine.update(engine);
  
  box1.display();
  box3.display();
  box2.display();
  ground.display();
  bin.addImage(dustbin);
  paperball.display();
 drawSprites();
 bin.scale =0.6

 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:155,y:-155});
  	
	  }
}



