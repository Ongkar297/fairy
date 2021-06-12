var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg,fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	 fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
     fairyVoice = loadSound("sound/joyMusic.mp3"); 
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.loop();


	//create fairy sprite and add animation for fairy
	fairy = createSprite(150,300,50,50);
	fairy.addAnimation("moving",fairyImg);
	fairy.scale = 0.2;
	fairy.setCollider("circle",0,0,40);
  fairy.debug = true;  


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star= starBody.position.x
  star= starBody.position.y
  

  //write code to stop star in the hand of fairy
  if(star.isTouching(fairy)){
	Matter.Body.setStatic(starBody,true);
 }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
	
	if (keyCode === RIGHT_ARROW){
		fairy.x  = fairy.x+9;
	}
}
