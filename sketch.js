var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,DroppingpointR,DroppingpointC,DroppingpointL;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(700, 700);
	rectMode(CENTER);
	
	DroppingpointR = createSprite(350,650,100,10);
	DroppingpointLeft = createSprite(300,630,10,50);
	DroppingpointRight = createSprite(400,630,10,50);


	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	//packageSprite.restitution=0.9;
    //packageSprite.friction=0.5;
    //packageSprite.density=1.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//packageSprite = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	//packageSprite.restitution = 0.5;
	World.add(world, packageSprite);
	World.add(world,DroppingpointLeft);
	//World.add(DroppingpointRight);
	World.add(world,DroppingpointR);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // packageSprite.x= packageBody.position.x 
 // packageSprite.y= packageBody.position.y 
  
 packageSprite.collide(DroppingpointR);
 packageSprite.collide(DroppingpointLeft);
 //packageSprite.collide(DroppingpointRight);
  drawSprites();
  keyPressed();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.velocityY = 3
	 World.add(world,packageSprite);
 }
  }




