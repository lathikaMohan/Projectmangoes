const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree, stone, groundObject, sling;
var mango1,mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
createCanvas(1370, 610);
engine = Engine.create();
world = engine.world;

stone=new Stone(235,420,30); 


mango1=new Mango(1170,130,30);
mango2=new Mango(1100,100,30);
mango3=new Mango(1140,150,40);
mango4=new Mango(1000,70,30);
mango5=new Mango(1100,70,30);
mango6=new Mango(1000,230,30);
mango7=new Mango(900,230,40);
mango8=new Mango(900,160,40);
mango9=new Mango(1010,140,30);
mango10=new Mango(1200,200,40);
mango11=new Mango(1120,50,40);


tree=new Tree(1050,580);
groundObject=new Ground(width/2,600,width,20);
sling=new Slingshot(stone.body,{x:240,y:460})  
Engine.run(engine);
 
}

function draw() {

  background("lightBlue");
  textSize(30);
  fill('black');
  textFont("Bold");
  text("Press Space to get another stone to Play!!",50 ,50);
  image(boy ,200,380,200,300);
  
  

  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  
  stone.display();

  groundObject.display();
  sling.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  sling.attach(stone.body);
	}
}

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body , false);
 } 
}
